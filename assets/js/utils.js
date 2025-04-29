var MAC_VERSION = "0.5.0";
var WIN_VERSION = "0.5.0";

var baseUrl = "https://github.com/pencakeapp-desktop/app/releases/download";

var urlMacOS_x64 = baseUrl + `/v${MAC_VERSION}/PenCake-${MAC_VERSION}.pkg`;
var urlMacOS_arm64 =
  baseUrl + `/v${MAC_VERSION}/PenCake-${MAC_VERSION}-arm64.pkg`;
var urlWindows = baseUrl + `/v${WIN_VERSION}/PenCake-Setup-${WIN_VERSION}.exe`;

function downloadFileFromUrl(url) {
  var a = document.createElement("a");
  a.href = url; // 파일 URL 설정
  a.download = url.split("/").pop(); // 다운로드될 파일명 설정 (URL의 마지막 부분을 파일명으로 사용)

  // 문서에 요소 추가 (보이지 않게 처리)
  document.body.appendChild(a);

  // `<a>` 요소 클릭 이벤트 강제 발생
  a.click();

  // 요소 제거
  document.body.removeChild(a);
}

function gtag_log_event(event_name, event_param) {
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    if (event_param) {
      gtag("event", event_name, event_param);
    } else {
      gtag("event", event_name);
    }
  } catch (e) {}
}

function downloadMacOS_Intel() {
  gtag_log_event("download_desktop_macos_x64");
  gtag_log_event("download_desktop", { os: "macOS", arch: "x64" });
  downloadFileFromUrl(urlMacOS_x64);
}

function downloadMacOS_AppleSilicon(lang) {
  // 2024-02-22: 기존 Mac 앱스토어에서 설치한 사람들을 위해 관련 안내문 띄움
  // 2025-04-21: 충분히 고지되었고 더이상 기존 앱스토어 버전을 사용하는 사람은 거의 없다고 보고 안내문을 띄우지 않음
  // const msg = appleSiliconWarning[lang || "en"] || appleSiliconWarning.en;
  // if (confirm("‼️ " + msg)) {
    gtag_log_event("download_desktop_macos_arm64");
    gtag_log_event("download_desktop", { os: "macOS", arch: "arm64" });
    downloadFileFromUrl(urlMacOS_arm64);
  // }
}

function downloadWindows() {
  gtag_log_event("download_desktop_windows_x64");
  gtag_log_event("download_desktop", { os: "windows", arch: "x64" });
  downloadFileFromUrl(urlWindows);
}

var appleSiliconWarning = {
  ko: "경고:  App Store에서 임시로 제공되었던 맥용 PenCake는 더이상 제공되지 않습니다. 따라서 기존 앱을 제거하면 재설치가 불가합니다.\n\n새로운 PC 버전은 프리미엄 사용자만 이용할 수 있으며, 현재 프리뷰 버전이기 때문에 기능이 완전하지 않은 점을 참고하시어, 기존 앱의 삭제 여부를 신중히 결정해주시기 바랍니다.\n\n* 현재, 사진 추가 등 일부 기능은 지원되지 않습니다.",

  en: "Warning:  The Mac version of PenCake, which has been temporarily available in the App Store, will no longer be offered. Therefore, if you remove the existing app, reinstallation will not be possible.\n\nThe new desktop version is available only for Premium users, and since it is currently a preview version, it does not include all features. As such, please carefully consider whether to delete the existing app.\n\n* Currently, some features, including adding photos, are not supported.",

  es: "Advertencia:  La versión para Mac de PenCake, que ha estado disponible temporalmente en la App Store, ya no se ofrecerá. Por lo tanto, si eliminas la aplicación existente, no será posible reinstalarla.\n\nLa nueva versión de escritorio está disponible solo para usuarios Premium, y dado que actualmente es una versión preliminar, no incluye todas las características. Como tal, por favor considera cuidadosamente si deseas eliminar la aplicación existente.\n\n* Actualmente, algunas características, incluida la adición de fotos, no están soportadas.",

  ptbr: "Aviso:  A versão para Mac do PenCake, que esteve disponível temporariamente na App Store, não será mais oferecida. Portanto, se você remover o aplicativo existente, a reinstalação não será possível.\n\nA nova versão para desktop está disponível apenas para usuários Premium, e como atualmente é uma versão de pré-visualização, ela não inclui todos os recursos. Assim, por favor, considere cuidadosamente se deseja deletar o aplicativo existente.\n\n* Atualmente, algumas funcionalidades, incluindo a adição de fotos, não são suportadas.",

  zhcn: "警告：App Store中临时提供的Mac版PenCake将不再提供。因此，如果您删除了现有应用程序，将无法重新安装。\n\n新的PC版本仅适用于高级用户，由于目前是预览版本，功能并非完整，请在考虑这一点的基础上，谨慎决定是否删除现有应用程序。\n\n* 目前，包括添加照片在内的一些功能不受支持。",

  zhtw: "警告：App Store中臨時提供的Mac版PenCake將不再提供。因此，如果您刪除了現有應用程式，將無法重新安裝。\n\n新的PC版本僅適用於高級用戶，由於目前是預覽版本，功能並非完整，請在考慮這一點的基礎上，謹慎決定是否刪除現有應用程式。\n\n* 目前，包括添加照片在內的一些功能不受支持。",

  ja: "警告：App Storeで一時的に提供されていたMac用のPenCakeは、もう提供されません。したがって、既存のアプリを削除すると、再インストールは不可能になります。\n\n新しいPC版はプレミアムユーザーのみが利用可能で、現在プレビュー版であるため機能が完全ではないことを踏まえ、既存のアプリを削除するかどうかを慎重に決定してください。\n\n* 現在、写真の追加など一部の機能はサポートされていません。",
};
