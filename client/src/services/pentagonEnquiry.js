/**
 * ============================================================
 * PENTAGON PLYWOOD - UNIFIED ENQUIRY SERVICE
 * ============================================================
 *
 * Centralized React helper for submitting leads from all website forms
 * (Contact, Home Quote, Dealer Application, Plywood Overview,
 * Product Detail, and Coming Soon Launch Notifications) to Google Apps Script.
 */

export const PENTAGON_ENQUIRY_API_URL =
  import.meta.env?.VITE_PENTAGON_ENQUIRY_API_URL;

/**
 * Converts a File object to a Base64 string object.
 * @param {File} file
 * @returns {Promise<{ name: string, mimeType: string, base64: string }>}
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!(file instanceof File) || file.size === 0) {
      resolve(null);
      return;
    }

    const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8 MB
    if (file.size > MAX_FILE_SIZE) {
      reject(new Error("The selected file is larger than 8 MB."));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;

      resolve({
        name: file.name,
        mimeType: file.type || "application/octet-stream",
        base64,
      });
    };

    reader.onerror = () => {
      reject(new Error("Could not read the selected file."));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Reads UTM tracking parameters from current page URL or storage.
 * @returns {{ utmSource: string, utmMedium: string, utmCampaign: string }}
 */
export function getUtmParameters() {
  if (typeof window === "undefined") {
    return { utmSource: "", utmMedium: "", utmCampaign: "" };
  }

  const searchParams = new URLSearchParams(window.location.search);

  return {
    utmSource: searchParams.get("utm_source") || "",
    utmMedium: searchParams.get("utm_medium") || "",
    utmCampaign: searchParams.get("utm_campaign") || "",
  };
}

/**
 * Primary helper to submit any enquiry form to the Pentagon Web App backend.
 *
 * @param {Object} rawPayload - The form fields data object.
 * @param {string} [rawPayload.enquiryType="product"] - "product" | "dealer" | "project" | "export" | "industrial-chemical" | "general" | "launch-notification"
 * @param {string} [rawPayload.formSource] - E.g. "home-quote", "contact-main", "dealer-application", "plywood-overview", "product-detail", "coming-soon"
 * @param {File|Object} [rawPayload.attachment] - File object or Base64 attachment object
 * @param {boolean} [rawPayload.consent=true] - Customer consent flag
 * @returns {Promise<{ success: boolean, submissionId?: string, message?: string, errors?: string[] }>}
 */
export async function submitPentagonEnquiry(rawPayload = {}) {
  const utm = getUtmParameters();

  const payload = { ...rawPayload };

  // Set defaults and context
  payload.enquiryType = payload.enquiryType || "product";
  payload.formSource = payload.formSource || "website";
  payload.sourceUrl = payload.sourceUrl || (typeof window !== "undefined" ? window.location.href : "");

  payload.utmSource = payload.utmSource || utm.utmSource;
  payload.utmMedium = payload.utmMedium || utm.utmMedium;
  payload.utmCampaign = payload.utmCampaign || utm.utmCampaign;

  // Default consent to true if not explicitly false
  if (payload.consent === undefined) {
    payload.consent = true;
  } else {
    payload.consent = Boolean(payload.consent);
  }

  // Process file attachment if a File object was passed
  if (payload.attachment instanceof File) {
    payload.attachment = await fileToBase64(payload.attachment);
  }

  /*
   * Send to Google Apps Script.
   * "text/plain;charset=utf-8" avoids unnecessary CORS preflight options request,
   * while body is serialized JSON that Apps Script handles via JSON.parse().
   */
  const response = await fetch(PENTAGON_ENQUIRY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  let result;
  try {
    result = JSON.parse(responseText);
  } catch {
    throw new Error("The enquiry server returned an unexpected response. Please try again.");
  }

  if (!result.success) {
    const validationMessage = Array.isArray(result.errors)
      ? result.errors.join(" ")
      : "";

    throw new Error(
      validationMessage ||
        result.message ||
        "Your enquiry could not be submitted. Please review the form and try again."
    );
  }

  return result;
}

export default submitPentagonEnquiry;
