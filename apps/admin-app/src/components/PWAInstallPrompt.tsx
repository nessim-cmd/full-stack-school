"use client";

import { useEffect, useState } from "react";

/**
 * PWA Install Prompt Component
 * Shows a prompt to install the app when available
 */
export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show install button
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowInstall(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleDismiss = () => {
    setShowInstall(false);
    // Store dismiss in localStorage to not show again for 7 days
    localStorage.setItem(
      "pwa-install-dismissed",
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    );
  };

  // Check if user dismissed recently
  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed) {
      const dismissedDate = new Date(dismissed);
      if (dismissedDate > new Date()) {
        setShowInstall(false);
      }
    }
  }, []);

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white shadow-2xl rounded-lg p-4 border-2 border-lamaSky z-50 animate-slide-up">
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="w-12 h-12 bg-lamaSkyLight rounded-lg flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-lamaSky"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 mb-1">Install SchoolHub</h3>
          <p className="text-sm text-gray-600 mb-3">
            Install our app for quick access and offline support!
          </p>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="flex-1 bg-lamaSky hover:bg-lamaSkyLight text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
            >
              Not now
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
