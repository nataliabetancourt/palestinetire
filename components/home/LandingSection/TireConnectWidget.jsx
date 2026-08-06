"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Script from "next/script";

const TIRECONNECT_API_KEY = "188fb973af4cef2e3ae221dfd57623c2";
const TIRECONNECT_SCRIPT_SRC = "https://app.tireconnect.ca/js/widget.js";
const MOBILE_BREAKPOINT = 768;

export default function TireConnectWidget({ locale = "en" }) {
  const widgetRef = useRef(null);
  const initializedLayoutRef = useRef(null);
  const isInitializingRef = useRef(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [status, setStatus] = useState("loading");
  const [minHeight, setMinHeight] = useState("72px");
  const resizeTimeoutRef = useRef(null);

  const redirectUrl = `/${locale}/shop-tires`;

  const getLayout = useCallback((width) => {
    // Prefer horizontal; fall back to vertical only on narrow containers
    return width < MOBILE_BREAKPOINT ? "vertical" : "horizontal";
  }, []);

  const getContainerWidth = useCallback(() => {
    return widgetRef.current?.getBoundingClientRect().width || window.innerWidth;
  }, []);

  const updateMinHeight = useCallback((layout) => {
    setMinHeight(layout === "vertical" ? "280px" : "72px");
  }, []);

  const initWidget = useCallback(
    (force = false) => {
      if (typeof window === "undefined" || !window.TCWidget || !widgetRef.current) {
        return;
      }

      const layout = getLayout(getContainerWidth());
      updateMinHeight(layout);

      if (!force && initializedLayoutRef.current === layout) {
        return;
      }

      isInitializingRef.current = true;
      setStatus("initializing");
      widgetRef.current.innerHTML = "";

      try {
        window.TCWidget.initForm({
          apikey: TIRECONNECT_API_KEY,
          container: "tireconnect",
          layout: layout,
          locationDetect: "manual",
          redirectUrl,
          redirect_url: redirectUrl,
        });

        initializedLayoutRef.current = layout;
        setStatus("ready");
      } catch (error) {
        console.error("Error initializing widget:", error);
        setStatus("error");
      } finally {
        isInitializingRef.current = false;
      }
    },
    [getContainerWidth, getLayout, redirectUrl, updateMinHeight]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.TCWidget) {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptLoaded) return;

    const initTimer = window.setTimeout(() => {
      initWidget();
    }, 50);

    return () => window.clearTimeout(initTimer);
  }, [scriptLoaded, initWidget]);

  useEffect(() => {
    if (!scriptLoaded || !widgetRef.current) return;

    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current);

      resizeTimeoutRef.current = window.setTimeout(() => {
        if (isInitializingRef.current) return;

        const nextLayout = getLayout(getContainerWidth());
        updateMinHeight(nextLayout);

        if (initializedLayoutRef.current && initializedLayoutRef.current !== nextLayout) {
          initWidget(true);
        }
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    let observer;
    if ("ResizeObserver" in window) {
      observer = new ResizeObserver(handleResize);
      observer.observe(widgetRef.current);
    }

    return () => {
      clearTimeout(resizeTimeoutRef.current);
      window.removeEventListener("resize", handleResize);
      observer?.disconnect();
    };
  }, [scriptLoaded, getContainerWidth, getLayout, initWidget, updateMinHeight]);

  const isLoading = status === "loading" || status === "initializing";

  return (
    <>
      <Script
        src={TIRECONNECT_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true);
        }}
        onReady={() => {
          setScriptLoaded(true);
        }}
        onError={(e) => {
          console.error("Error loading TireConnect script:", e);
          setStatus("error");
        }}
      />
      <div
        className="relative w-full transition-all duration-300"
        style={{ minHeight }}
        aria-label="Tire selection widget"
      >
        <div
          ref={widgetRef}
          id="tireconnect"
          className="w-full"
          style={{ minHeight }}
        />
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white">
            <div className="animate-pulse text-gray-500">
              {status === "initializing"
                ? "Initializing widget..."
                : "Loading tire widget..."}
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="absolute inset-0 flex justify-center items-center bg-white text-sm text-gray-500">
            Tire finder is taking longer than expected. Please refresh the page.
          </div>
        )}
      </div>
    </>
  );
}
