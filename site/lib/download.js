// Desktop app download logic — ported from the legacy /assets/js/utils.js.
// Bump these versions when releasing a new desktop build.
export const MAC_VERSION = "0.6.0";
export const WIN_VERSION = "0.6.0";

const baseUrl = "https://github.com/pencakeapp-desktop/app/releases/download";

export const DOWNLOAD_URLS = {
  "macos-x64": `${baseUrl}/v${MAC_VERSION}/PenCake-${MAC_VERSION}.pkg`,
  "macos-arm64": `${baseUrl}/v${MAC_VERSION}/PenCake-${MAC_VERSION}-arm64.pkg`,
  "windows-x64": `${baseUrl}/v${WIN_VERSION}/PenCake-Setup-${WIN_VERSION}.exe`,
};

const GTAG_EVENTS = {
  "macos-x64": ["download_desktop_macos_x64", { os: "macOS", arch: "x64" }],
  "macos-arm64": ["download_desktop_macos_arm64", { os: "macOS", arch: "arm64" }],
  "windows-x64": ["download_desktop_windows_x64", { os: "windows", arch: "x64" }],
};

export function gtagLogEvent(eventName, eventParam) {
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    if (eventParam) {
      gtag("event", eventName, eventParam);
    } else {
      gtag("event", eventName);
    }
  } catch (e) {}
}

function downloadFileFromUrl(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function startDesktopDownload(target) {
  const url = DOWNLOAD_URLS[target];
  if (!url) return;
  const [legacyEvent, param] = GTAG_EVENTS[target];
  gtagLogEvent(legacyEvent);
  gtagLogEvent("download_desktop", param);
  downloadFileFromUrl(url);
}
