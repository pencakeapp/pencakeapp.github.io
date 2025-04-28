// re-implement toggle blocks
const showToggle = (content, arrow) => {
  arrow.style.transform = "rotateZ(180deg)";
  content.style.display = "block";
};

const hideToggle = (content, arrow) => {
  arrow.style.transform = "rotateZ(90deg)";
  content.style.display = "none";
};

const toggleButtons = document.getElementsByClassName("loconotion-toggle-button");
for (let i = 0; i < toggleButtons.length; i++) {
  const toggleButton = toggleButtons.item(i);
  const toggleId = toggleButton.getAttribute("loconotion-toggle-id");
  const toggleContent = document.querySelector(`.loconotion-toggle-content[loconotion-toggle-id='${toggleId}']`);
  const toggleArrow = toggleButton.querySelector("svg");
  if (toggleButton && toggleContent) {
    hideToggle(toggleContent, toggleArrow);
    toggleButton.addEventListener("click", () => {
      if (toggleContent.style.display == "none") {
        showToggle(toggleContent, toggleArrow);
      } else {
        hideToggle(toggleContent, toggleArrow);
      }
    });
  }
}

// sets all iframes' parent container opacity to 1
// originally notion has a callback to do that on iframe loaded
const pendingIframes = document.getElementsByTagName("iframe");
for (let i = 0; i < pendingIframes.length; i++) {
  pendingIframes.item(i).parentElement.style.opacity = 1;
}

// const pendingIframes = document.getElementsByClassName("loconotion-iframe-target");
// for (let i = 0; i < pendingIframes.length; i++) {
//   const pendingIframe = pendingIframes.item(i);
//   const iframeSrc = pendingIframe.getAttribute("loconotion-iframe-src");
//   const iframe = document.createElement("iframe");

//   pendingIframe.style.opacity = 0;
//   iframe.onload = () => {
//     pendingIframe.style.opacity = 1;
//   };

//   iframe.style.width = "100%";
//   iframe.style.height = "100%";
//   iframe.style.position = "absolute";
//   iframe.style.left = 0;
//   iframe.style.top = 0;
//   iframe.style.pointerEvents = "auto";

//   iframe.setAttribute("src", iframeSrc);
//   iframe.setAttribute("frameborder", "0");
//   iframe.setAttribute(
//     "sandbox",
//     "allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
//   );

//   pendingIframe.appendChild(iframe);
// }

// hide search box on inline databases
// couldn't find a reliable way to do this in css
const collectionSearchBoxes = document.getElementsByClassName("collectionSearch");
for (let i = 0; i < collectionSearchBoxes.length; i++) {
  const collectionSearchBox = collectionSearchBoxes.item(i).parentElement;
  collectionSearchBox.style.display = "none";
}

let selectedId = null;

const goToBlock = targetBlockId => {
  const blockObj = document.querySelector(`div[data-block-id='${targetBlockId}']`);
  if (blockObj) {
    clearSelectedBlock();
    selectedId = targetBlockId;
    blockObj.className += ' notion-selected-highlight';
    blockObj.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

const clearSelectedBlock = () => {
  if (selectedId) {
    const blockObj = document.querySelector(`div[data-block-id='${selectedId}']`);
    if (blockObj) {
      const className = blockObj.className;
      if (className) {
        blockObj.className = className.split(' notion-selected-highlight')[0];
      }
    }
    selectedId = null;
  }
}

const getTargetBlockd = id => {
  return id.slice(0, 8) + "-" + id.slice(8, 12) + "-" + id.slice(12, 16) + "-" + id.slice(16, 20) + "-" + id.slice(20);
}

// re-implement anchor links
const anchorLinks = document.querySelectorAll("a.loconotion-anchor-link");
for (let i = 0; i < anchorLinks.length; i++) {
  const anchorLink = anchorLinks.item(i);
  const id = anchorLink.getAttribute("href").replace("#", "");
  const targetBlockId = getTargetBlockd(id);
  anchorLink.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(targetBlockId);
    goToBlock(targetBlockId);
    e.stopPropagation();
  });
}

// fix the problem with images having an annoying extra padding
// in Webkit renderers on iOS devices

const imgs = document.querySelectorAll("img:not(.notion-emoji)");

for (let i = 0; i < imgs.length; i++) {
  parent = imgs[i].parentElement
  let style = parent.getAttribute("style")
  style = style.replace(/padding-bottom: 133\.333\%;/, "")
  style = style + "; height:auto!important;"
  parent.setAttribute("style",  style);
}

const moveToHash = () => {
  let urlHash = window.location.hash;

  if (urlHash) {
    const id = urlHash.replace("#", "");
    const targetBlockId = getTargetBlockd(id);
    goToBlock(targetBlockId);
  }
}

document.body.onload = () => {
  moveToHash();
}

document.body.onclick = e => {
  clearSelectedBlock();
}

// --------------------------------------------------------------
// Google Analytics

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZZNDMTFTKD"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-ZZNDMTFTKD');
// </script>

function dynamicallyLoadGoogleTagScript() {
  var script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZZNDMTFTKD";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZZNDMTFTKD');
}

dynamicallyLoadGoogleTagScript();
// --------------------------------------------------------------
