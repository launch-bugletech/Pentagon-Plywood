function DealerNetworkMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapContainerRef.current;

    if (!container || mapRef.current) return undefined;

    let map;
    let resizeObserver;
    let resizeTimer;
    let secondResizeTimer;

    const frame = requestAnimationFrame(() => {
      if (!mapContainerRef.current || mapRef.current) return;

      map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://tiles.openfreemap.org/styles/liberty",
        center: [77.5, 25],
        zoom: 3.8,
        minZoom: 3,
        maxZoom: 16,
        attributionControl: true,
      });

      mapRef.current = map;

      // Controls
      map.addControl(
        new maplibregl.NavigationControl({
          showCompass: false,
        }),
        "top-right",
      );

      // Disable unwanted interaction
      map.scrollZoom.disable();
      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();

      const bounds = new maplibregl.LngLatBounds();
      const markers = [];

      DEALER_MARKETS.forEach((market) => {
        bounds.extend(market.coordinates);

        const popup = new maplibregl.Popup({
          offset: 24,
          closeButton: false,
          closeOnClick: true,
          maxWidth: "260px",
        }).setHTML(`
          <div style="
            font-family: Manrope, Arial, sans-serif;
            padding: 4px 2px;
          ">
            <div style="
              margin-bottom: 6px;
              color: #8e510d;
              font-size: 9px;
              line-height: 1.2;
              font-weight: 800;
              letter-spacing: .14em;
              text-transform: uppercase;
            ">
              Pentagon Dealer Network
            </div>

            <strong style="
              display: block;
              color: #14211a;
              font-size: 16px;
              line-height: 1.3;
              font-weight: 700;
            ">
              ${market.name}
            </strong>

            <p style="
              margin: 7px 0 0;
              color: #65736a;
              font-size: 12px;
              line-height: 1.55;
            ">
              Pentagon has dealer presence in this market.
              Contact our team to find the appropriate dealer
              for your city or requirement.
            </p>
          </div>
        `);

        const marker = new maplibregl.Marker({
          color: "#C86D51",
          scale: 0.8,
        })
          .setLngLat(market.coordinates)
          .setPopup(popup)
          .addTo(map);

        markers.push(marker);
      });

      const fitDealerNetwork = () => {
        if (!map || !mapContainerRef.current) return;

        map.resize();

        map.fitBounds(bounds, {
          padding: {
            top: 105,
            right: 60,
            bottom: 155,
            left: 60,
          },
          maxZoom: 5.1,
          duration: 0,
        });
      };

      map.once("load", () => {
        fitDealerNetwork();

        resizeTimer = window.setTimeout(() => {
          map.resize();
          fitDealerNetwork();
        }, 100);

        secondResizeTimer = window.setTimeout(() => {
          map.resize();
        }, 500);
      });

      map.on("error", (event) => {
        console.error("Dealer MapLibre error:", event.error);
      });

      resizeObserver = new ResizeObserver(() => {
        if (!map) return;

        requestAnimationFrame(() => {
          map.resize();
        });
      });

      resizeObserver.observe(mapContainerRef.current);

      map.__dealerMarkers = markers;
    });

    return () => {
      cancelAnimationFrame(frame);

      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }

      if (secondResizeTimer) {
        window.clearTimeout(secondResizeTimer);
      }

      resizeObserver?.disconnect();

      if (map) {
        map.__dealerMarkers?.forEach((marker) => marker.remove());
        map.remove();
      }

      mapRef.current = null;
    };
  }, []);

  return (
    <div
      className="
        relative
        h-[500px]
        w-full
        min-w-0
        overflow-hidden
        rounded-[28px]
        border
        border-white/15
        bg-[#e9ece7]
        shadow-2xl
        lg:h-[560px]
      "
    >
      {/* ACTUAL MAP */}
      <div
        ref={mapContainerRef}
        className="absolute inset-0 h-full w-full"
        aria-label="Interactive map showing Pentagon dealer presence across India"
      />

      {/* TOP INFO */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
        <div className="rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
          <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#8E510D]">
            Pentagon Dealer Network
          </span>

          <strong className="mt-1 block font-display text-xl font-bold text-[#14211a]">
            Dealer Presence Across India
          </strong>
        </div>
      </div>

      {/* BOTTOM INFO CARD */}
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 sm:bottom-5 sm:left-5 sm:right-5">
        <div className="rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-end gap-2">
                <strong className="font-display text-3xl font-bold leading-none text-[#143d2b]">
                  12
                </strong>

                <span className="pb-0.5 text-xs font-bold uppercase tracking-[0.1em] text-[#65736a]">
                  States &amp; UTs
                </span>
              </div>

              <p className="mt-2 max-w-md text-xs leading-5 text-[#65736a]">
                Select a marker to see Pentagon dealer presence in that market.
              </p>
            </div>

            <a
              href="#dealer-network-coverage"
              className="
                pointer-events-auto
                inline-flex
                h-10
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#143d2b]
                px-5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#0d291d]
              "
            >
              View Network
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
