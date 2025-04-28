const updateHistoryTitle = {
  ko: "PC 버전 업데이트 기록",
  en: "Desktop Changelog",
  ja: "PC版アップデート履歴",
  es: "Registro de cambios de escritorio",
  pt: "Registro de alterações para desktop",
  de: "Desktop-Änderungsprotokoll",
  "zh-hans": "PC版更新记录",
  "zh-hant": "PC版更新紀錄",
};

const newFeaturesTitle = {
  ko: "새로운 기능",
  en: "What's New",
  ja: "新機能",
  es: "Novedades",
  pt: "Novidades",
  de: "Was ist neu",
  "zh-hans": "新功能",
  "zh-hant": "最新功能",
};

const othersTitle = {
  ko: "기타 사항",
  en: "Additional Notes",
  ja: "その他の項目",
  es: "Notas adicionales",
  pt: "Notas adicionais",
  de: "Weitere Änderungen",
  "zh-hans": "其他说明",
  "zh-hant": "其他事項",
};

// const o = "■ ";
const o = "▪ ";
// const o = "• ";

const logs = [
  {
    features: {
      ko: `${o}PDF로 내보내기 기능이 추가되었습니다.\n${o}DOCX로 내보내기 기능이 추가되었습니다.\n${o}프록시 기능이 추가되었습니다.\n- [설정 > 프록시]에서 설정할 수 있습니다.\n${o}비밀번호 찾기 기능이 추가되었습니다.`,
      en: `${o}The feature to export to PDF has been added.\n${o}The feature to export to DOCX has been added.\n${o}A proxy feature has been added.\n- You can configure it in [Settings > Proxy].\n${o}A password recovery feature has been added.`,
      ja: `${o}PDFとしてエクスポートできる機能が追加されました。\n${o}DOCXとしてエクスポートできる機能が追加されました。\n${o}プロキシ機能が追加されました。\n- [設定 > プロキシ] から設定できます。\n${o}パスワード復旧機能が追加されました。`,
      es: `${o}Se agregó la función para exportar en formato PDF.\n${o}Se agregó la función para exportar en formato DOCX.\n${o}Se añadió una función de proxy.\n- Puedes configurarla en [Configuración > Proxy].\n${o}Se agregó la función de recuperación de contraseñas.`,
      pt: `${o}A funcionalidade de exportar para PDF foi adicionada.\n${o}A funcionalidade de exportar para DOCX foi adicionada.\n${o}Um recurso de proxy foi incluído.\n- Você pode configurá-lo em [Configurações > Proxy].\n${o}Foi adicionada a funcionalidade de recuperação de senha.`,
      "zh-hans": `${o}新增了导出为PDF的功能。\n${o}新增了导出为DOCX的功能。\n${o}新增了代理功能。\n- 你可以在 [设置 > 代理] 中进行配置。\n${o}新增了找回密码功能。`,
      "zh-hant": `${o}新增匯出為PDF的功能。\n${o}新增匯出為DOCX的功能。\n${o}新增了代理功能。\n- 你可以在 [設定 > 代理] 中進行設定。\n${o}新增了找回密碼功能。`,
    },
    others: {
      ko: `${o}둥근 따옴표 자동 변환 알고리즘이 개선되었습니다.\n${o}비밀번호 입력 화면의 디자인을 개선하였습니다.\n${o}비밀번호 입력 화면에서 Del 키와 Backspace 키를 사용할 수 있게 하였습니다.\n${o}구글 로그인 안정성을 개선하였습니다.`,
      en: `${o}The algorithm for automatically converting straight quotes to curly quotes has been improved.\n${o}The design of the password input screen has been improved.\n${o}The Del and Backspace keys can now be used on the password input screen.\n${o}Google login stability has been improved.`,
      ja: `${o}スマートクオート（ストレートクオートを曲線クオートに自動変換）のアルゴリズムが改善されました。\n${o}パスワード入力画面のデザインが改良されました。\n${o}パスワード入力画面でDelキーやBackspaceキーが使用可能になりました。\n${o}Googleログインの安定性が向上しました。`,
      es: `${o}Se mejoró el algoritmo para convertir automáticamente las comillas rectas en comillas curvas.\n${o}Se mejoró el diseño de la pantalla de ingreso de contraseña.\n${o}Ahora puedes usar las teclas Del y Backspace en la pantalla de ingreso de contraseña.\n${o}Se mejoró la estabilidad del inicio de sesión con Google.`,
      pt: `${o}O algoritmo para conversão automática de aspas retas para aspas curvas foi aprimorado.\n${o}O design da tela de inserção de senha foi melhorado.\n${o}Agora é possível usar as teclas Del e Backspace na tela de inserção de senha.\n${o}A estabilidade do login com o Google foi aprimorada.`,
      "zh-hans": `${o}自动将直引号转换为弯引号的算法已优化。\n${o}密码输入界面的设计已改进。\n${o}现在可以在密码输入界面使用Del和Backspace键了。\n${o}Google登录的稳定性已提升。`,
      "zh-hant": `${o}自動將直引號轉換為弧形引號的演算法已優化。\n${o}密碼輸入畫面的設計已改進。\n${o}現在可以在密碼輸入介面使用Del和Backspace鍵了。\n${o}Google登入的穩定性已提升。`,
    },
    version: "0.5.0",
    releasedAt: "2024-12-21",
  },
  {
    features: {
      ko: `${o}비밀번호 잠금 기능이 추가되었습니다.\n${o}더 큰 글자 크기가 추가되었습니다.\n${o}이제 단축키(Cmd+S / Ctrl+S)로 글을 저장하고 나갈 수 있습니다.\n${o}이제 팝업 대화상자에서 Enter 키와 Esc 키를 사용할 수 있습니다.`,
      en: `${o}A passcode lock feature has been added.\n${o}Larger text size options are now available.\n${o}You can now save and exit an article using a keyboard shortcut (Cmd+S / Ctrl+S).\n${o}You can now use the Enter and Esc keys in popup dialog boxes.`,
      ja: `${o}パスワードロック機能が追加されました。\n${o}より大きな文字サイズが追加されました。\n${o}これで、ショートカット(Cmd+S / Ctrl+S)で記事を保存して終了することができます。\n${o}これで、ポップアップダイアログボックスでEnterキーとEscキーを使えるようになりました。`,
      es: `${o}Se ha agregado la función de bloqueo con contraseña.\n${o}Ahora están disponibles tamaños de letra más grandes.\n${o}Ahora puedes guardar y salir de un artículo usando un atajo de teclado (Cmd+S / Ctrl+S).\n${o}Ahora puedes usar las teclas Enter y Esc en los cuadros de diálogo emergentes.`,
      pt: `${o}Adicionada a função de bloqueio por senha.\n${o}Tamanhos de texto maiores foram adicionados.\n${o}Agora é possível salvar e sair de um artigo usando um atalho de teclado (Cmd+S / Ctrl+S).\n${o}Agora você pode usar as teclas Enter e Esc em caixas de diálogo popup.`,
      "zh-hans": `${o}已添加密码锁定功能。\n${o}增加了更大的字号选项。\n${o}现在可以使用快捷键(Cmd+S / Ctrl+S)保存并退出文章。\n${o}现在您可以在弹出对话框中使用Enter键和Esc键。`,
      "zh-hant": `${o}已新增密碼鎖定功能。\n${o}新增了更大的文字大小選項。\n${o}現在可以使用快捷鍵(Cmd+S / Ctrl+S)儲存並退出文章。\n${o}現在您可以在彈出對話框中使用Enter鍵和Esc鍵。`,
    },
    others: {
      ko: `${o}Shift+Enter 입력 시 가끔씩 발생하는 줄바꿈 오류를 수정하였습니다.\n${o}작은 모니터에서 설정 창의 세로 크기를 키웠습니다.\n${o}팝업 대화상자의 내용이 길 경우 위 아래가 잘려서 버튼을 누를 수 없는 현상을 해결하였습니다.`,
      en: `${o}Fixed an issue where pressing Shift+Enter sometimes caused irregular line breaks.\n${o}Increased the vertical size of the settings window on smaller monitors.\n${o}Resolved an issue where the top and bottom of popup dialog content were cut off, making buttons inaccessible when the content was lengthy.`,
      ja: `${o}Shift+Enterを入力した際、時々発生していた改行エラーを修正しました。\n${o}小さいモニターで設定ウィンドウの縦サイズを大きくしました。\n${o}ポップアップダイアログの内容が長い場合に上下が切れてボタンが押せなくなる問題を解決しました。`,
      es: `${o}Se corrigió un problema por el cual presionar Shift+Enter a veces causaba saltos de línea irregulares.\n${o}Se ha aumentado el tamaño vertical de la ventana de configuración en monitores pequeños.\n${o}Se ha resuelto un problema donde el contenido de los cuadros de diálogo emergentes se cortaba por arriba y por abajo, haciendo que los botones no fueran accesibles cuando el contenido era extenso.`,
      pt: `${o}Corrigido um problema onde pressionar Shift+Enter às vezes causava quebras de linha irregulares.\n${o}Aumentamos o tamanho vertical da janela de configurações em monitores menores.\n${o}Resolvido um problema em que o conteúdo das caixas de diálogo popup era cortado na parte superior e inferior, tornando os botões inacessíveis quando o conteúdo era longo.`,
      "zh-hans": `${o}修正了在输入Shift+Enter时偶尔会出现的换行错误。\n${o}在较小的显示器上增加了设置窗口的垂直大小。\n${o}解决了弹出对话框内容较长时，顶部和底部被切割导致按钮无法点击的问题。`,
      "zh-hant": `${o}修正了在輸入Shift+Enter時偶爾會發生的換行錯誤。\n${o}在較小的顯示器上增加了設定視窗的垂直大小。\n${o}解決了彈出對話框內容較長時，頂部和底部被切割導致按鈕無法點擊的問題。`,
    },
    version: "0.4.0",
    releasedAt: "2024-04-03",
  },
  {
    features: {
      ko: `${o}문장 부호 자동 교정 기능이 추가되었습니다.\n- 곧은 큰따옴표 (") → 둥근 큰따옴표 (“”)\n- 곧은 작은따옴표 (\') → 둥근 작은따옴표 (‘’)\n- 마침표 세 개 (...) → 말줄임표 (…)\n${o}되돌리기(undo)를 하면 교정 전 상태로 돌아갑니다.\n${o}자동 교정 기능을 비활성화하는 옵션은 추후 제공될 예정입니다.`,
      en: `${o}Automatic punctuation correction feature has been added.\n- Straight double quotes (") → Curly double quotes (“”)\n- Straight single quotes (') → Curly single quotes (‘’)\n- Three periods (...) → Ellipsis (…)\n${o}Using the undo function will revert the text to its pre-corrected state.\n${o}An option to disable the automatic correction feature will be provided in the future.`,
      ja: `${o}句読点の自動修正機能が追加されました。\n- 直線のダブルクォーテーション (") → 曲線のダブルクォーテーション (“”)\n- 直線のシングルクォーテーション (') → 曲線のシングルクォーテーション (‘’)\n- ピリオド3つ (...) → 省略記号 (…)\n${o}元に戻す機能を使用すると、修正前の状態にテキストが戻ります。\n${o}自動修正機能を無効にするオプションは、将来提供される予定です。`,
      es: `${o}Se ha añadido la función de corrección automática de puntuación.\n- Comillas rectas (") → Comillas curvas (“”)\n- Comillas simples rectas (') → Comillas simples curvas (‘’)\n- Tres puntos (...) → Puntos suspensivos (…)\n${o}Al usar la función de deshacer, el texto volverá a su estado previo a la corrección.\n${o}En el futuro, se proporcionará una opción para desactivar la función de corrección automática.`,
      pt: `${o}Foi adicionado o recurso de correção automática de pontuação.\n- Aspas retas (") → Aspas curvas (“”)\n- Aspas simples retas (') → Aspas simples curvas (‘’)\n- Três pontos (...) → Reticências (…)\n${o}Ao usar a função desfazer, o texto voltará ao seu estado anterior à correção.\n${o}No futuro, será fornecida uma opção para desativar o recurso de correção automática.`,
      "zh-hans": `${o}新增了自动校正标点符号的功能。\n- 直双引号 (") → 弯双引号 (“”)\n- 直单引号 (') → 弯单引号 (‘’)\n- 三个句号 (...) → 省略号 (…)\n${o}使用撤销功能可以将文本恢复到校正前的状态。\n${o}未来将提供一个选项来禁用自动校正功能。`,
      "zh-hant": `${o}新增了自動校正標點符號的功能。\n- 直雙引號 (") → 彎雙引號 (“”)\n- 直單引號 (') → 彎單引號 (‘’)\n- 三個句號 (...) → 省略號 (…)\n${o}使用撤銷功能可以將文字恢復到校正前的狀態。\n${o}未來將提供一個選項來停用自動校正功能。`,
    },
    others: {
      ko: `${o}macOS에서 자동 업데이트 시 암호 입력 건너뛰는 방법 공지\n${o}동기화 설정 시 rename 오류 수정\n${o}프로그램 다중 실행 방지\n${o}중국어(번체) 시간 관련 글자 오류 수정\n${o}Windows에서 iCloud 설정 관련 안내문 추가`,
      en: `${o}Announcement on skipping password entry for automatic updates on macOS.\n${o}Fixed a rename error during sync settings.\n${o}Prevention of multiple instances of the program running.\n${o}Correction of time-related character errors in Traditional Chinese.\n${o}Addition of guidance for iCloud settings on Windows.`,
      ja: `${o}macOSでの自動更新の際、パスワード入力をスキップする方法のお知らせ。\n${o}同期設定時のリネームエラーを修正。\n${o}プログラムの多重実行を防止。\n${o}繁体字中国語の時間に関連する文字のエラーを修正。\n${o}WindowsでのiCloud設定に関する案内を追加。`,
      es: `${o}Anuncio sobre cómo omitir la entrada de contraseña para actualizaciones automáticas en macOS.\n${o}Corrección de un error de renombrar durante la configuración de sincronización.\n${o}Prevención de múltiples instancias del programa en ejecución.\n${o}Corrección de errores de caracteres relacionados con el tiempo en chino tradicional.\n${o}Adición de orientación para la configuración de iCloud en Windows.`,
      pt: `${o}Anúncio sobre pular a entrada de senha para atualizações automáticas no macOS.\n${o}Correção de um erro de renomear durante as configurações de sincronização.\n${o}Prevenção de múltiplas instâncias do programa em execução.\n${o}Correção de erros de caracteres relacionados ao tempo em Chinês Tradicional.\n${o}Adição de orientações para configurações do iCloud no Windows.`,
      "zh-hans": `${o}在macOS上自动更新时跳过密码输入的通知。\n${o}修复同步设置时的重命名错误。\n${o}防止程序多重运行。\n${o}修正繁体中文时间相关字符错误。\n${o}在Windows上添加iCloud设置相关的指南。`,
      "zh-hant": `${o}在macOS上自動更新時跳過密碼輸入的公告。\n${o}修正同步設定時的重新命名錯誤。\n${o}防止程式多重執行。\n${o}修正繁體中文時間相關字符錯誤。\n${o}在Windows上新增iCloud設定相關的指導。`,
    },
    version: "0.3.0",
    releasedAt: "2024-03-16",
  },
  {
    others: {
      ko: `${o}macOS에서 자동 업데이트 시 암호 입력 요구하지 않도록 개선\n${o}새 글 쓰기에서 자동 저장 오류 수정`,
      en: `${o}Improved to not require password entry for automatic updates on macOS.\n${o}Fixed an auto-save error when creating a new article.`,
      ja: `${o}macOSでの自動更新時にパスワード入力を要求しないように改善。\n${o}新しい記事を作成する際の自動保存エラーを修正。`,
      es: `${o}Mejora para no requerir la entrada de contraseña para actualizaciones automáticas en macOS.\n${o}Corrección de un error de auto-guardado al crear un nuevo artículo.`,
      pt: `${o}Melhoria para não requerer a entrada de senha para atualizações automáticas no macOS.\n${o}Correção de um erro de auto-salvamento ao criar um novo artigo.`,
      "zh-hans": `${o}改进macOS上自动更新时不需要输入密码。\n${o}创建新文章时修复自动保存错误。`,
      "zh-hant": `${o}改善macOS上自動更新時不需輸入密碼。\n${o}創建新文章時修正自動儲存錯誤。`,
    },
    version: "0.2.2",
    releasedAt: "2024-03-10",
  },
];
