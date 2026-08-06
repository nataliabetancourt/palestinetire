"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { motion } from "framer-motion";

const TIRECONNECT_API_KEY = "188fb973af4cef2e3ae221dfd57623c2";
const TIRECONNECT_SCRIPT_SRC = "https://app.tireconnect.ca/js/widget.js";
const TIRES_CONTAINER_ID = "tireconnect";
const BRAND_RED = "#dc2626";

/** True when the URL already has TireConnect search/results state to restore. */
function hasTireConnectSearchHash() {
  if (typeof window === "undefined") return false;
  const { hash } = window.location;
  return /(?:tires|wheels)\/(?:search|results|summary|confirmation)/.test(hash);
}

export default function TireConnectLocator() {
  const widgetRef = useRef(null);
  const initializedRef = useRef(false);

  const initWidget = () => {
    if (!window.TCWidget || !widgetRef.current || initializedRef.current) return;

    widgetRef.current.innerHTML = "";

    // Preserve hash params from the homepage compact widget redirect.
    // Only seed a default tires route when there is no existing search state.
    if (!hasTireConnectSearchHash()) {
      const { pathname, search } = window.location;
      window.history.replaceState(
        null,
        "",
        `${pathname}${search}#!/tires/search`
      );
    }

    window.TCWidget.initLocator({
      apikey: TIRECONNECT_API_KEY,
      container: TIRES_CONTAINER_ID,
      allowed_products: ["tire", "wheel"],
      allowedProducts: ["tire", "wheel"],
    });

    initializedRef.current = true;
  };

  useEffect(() => {
    if (window.TCWidget) {
      initWidget();
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center pt-24 pb-10">
      <Script
        src={TIRECONNECT_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={initWidget}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-screen-lg p-4"
      >
        <div ref={widgetRef} id={TIRES_CONTAINER_ID} />
      </motion.div>

      <style jsx>{`
        div#tcwlw_widget_locator[id="tcwlw_widget_locator"]
          .tcwlw_brand_btn_light {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget_locator[id="tcwlw_widget_locator"]
          .tcwlw_location
          .tcwlw_phone {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"] a,
        div#tcwlw_widget_outer a {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"] label .req.req,
        div#tcwlw_widget[id="tcwlw_widget"] .tcwlw_form_label > span .req.req {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"] .tcwlw_brand_btn_light,
        div#tcwlw_widget_outer .tcwlw_brand_btn_light {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"] .tcwlw_border_color,
        div#tcwlw_widget_outer .tcwlw_border_color {
          border-color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"] .tcwlw_font_color,
        div#tcwlw_widget_outer .tcwlw_font_color {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"]
          ul.tcwlw_steps_list
          .tcwlw_steps_list_item.tcwlw_active:before {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget_locator[id="tcwlw_widget_locator"]
          .tcwlw_header
          h3
          span {
          color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"] .tcwlw_brand_btn,
        div#tcwlw_widget_outer .tcwlw_brand_btn {
          background-color: ${BRAND_RED};
          border-color: ${BRAND_RED};
        }
        div#tcwlw_widget[id="tcwlw_widget"]
          ul.tcwlw_steps_list
          .tcwlw_steps_list_item.tcwlw_active
          .tcwlw_steps_list_item_circle {
          background-color: ${BRAND_RED};
        }
        .wpb_wrapper {
          width: inherit;
        }
        div#tcwlw_widget_locator[id="tcwlw_widget_locator"] a {
          color: ${BRAND_RED};
        }
      `}</style>
    </div>
  );
}
