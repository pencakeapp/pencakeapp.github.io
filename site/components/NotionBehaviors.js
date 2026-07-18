"use client";

import { useEffect } from "react";

// Client behaviors ported 1:1 from the legacy
// /assets/js/1172e9111a5fb396bcb8a05870b5eabf8abf221c.js (Notion export helper):
//  - toggle blocks
//  - #<blockId> hash navigation with scroll + highlight (used by FAQ deep links)
//  - iOS image extra-padding fix

let selectedId = null;

function goToBlock(targetBlockId) {
  const blockObj = document.querySelector(`div[data-block-id='${targetBlockId}']`);
  if (blockObj) {
    clearSelectedBlock();
    selectedId = targetBlockId;
    blockObj.className += " notion-selected-highlight";
    blockObj.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function clearSelectedBlock() {
  if (selectedId) {
    const blockObj = document.querySelector(`div[data-block-id='${selectedId}']`);
    if (blockObj) {
      const className = blockObj.className;
      if (className) {
        blockObj.className = className.split(" notion-selected-highlight")[0];
      }
    }
    selectedId = null;
  }
}

// "8-4-4-4-12" uuid from a 32-char hash fragment
function getTargetBlockId(id) {
  return (
    id.slice(0, 8) +
    "-" +
    id.slice(8, 12) +
    "-" +
    id.slice(12, 16) +
    "-" +
    id.slice(16, 20) +
    "-" +
    id.slice(20)
  );
}

function moveToHash() {
  const urlHash = window.location.hash;
  if (urlHash) {
    const id = urlHash.replace("#", "");
    const targetBlockId = id.includes("-") ? id : getTargetBlockId(id);
    goToBlock(targetBlockId);
  }
}

export default function NotionBehaviors() {
  useEffect(() => {
    const cleanups = [];

    // --- toggle blocks ---
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
      const toggleContent = document.querySelector(
        `.loconotion-toggle-content[loconotion-toggle-id='${toggleId}']`
      );
      const toggleArrow = toggleButton.querySelector("svg");
      if (toggleButton && toggleContent) {
        hideToggle(toggleContent, toggleArrow);
        const onClick = () => {
          if (toggleContent.style.display === "none") {
            showToggle(toggleContent, toggleArrow);
          } else {
            hideToggle(toggleContent, toggleArrow);
          }
        };
        toggleButton.addEventListener("click", onClick);
        cleanups.push(() => toggleButton.removeEventListener("click", onClick));
      }
    }

    // --- anchor links (loconotion) ---
    const anchorLinks = document.querySelectorAll("a.loconotion-anchor-link");
    for (let i = 0; i < anchorLinks.length; i++) {
      const anchorLink = anchorLinks.item(i);
      const id = anchorLink.getAttribute("href").replace("#", "");
      const targetBlockId = getTargetBlockId(id);
      const onClick = (e) => {
        e.preventDefault();
        goToBlock(targetBlockId);
        e.stopPropagation();
      };
      anchorLink.addEventListener("click", onClick);
      cleanups.push(() => anchorLink.removeEventListener("click", onClick));
    }

    // --- iOS webkit image extra-padding fix ---
    const imgs = document.querySelectorAll("img:not(.notion-emoji)");
    for (let i = 0; i < imgs.length; i++) {
      const parent = imgs[i].parentElement;
      let style = parent.getAttribute("style") || "";
      style = style.replace(/padding-bottom: 133\.333%;/, "");
      style = style + "; height:auto!important;";
      parent.setAttribute("style", style);
    }

    // --- hash navigation + highlight ---
    moveToHash();
    const onBodyClick = () => clearSelectedBlock();
    document.body.addEventListener("click", onBodyClick);
    cleanups.push(() => document.body.removeEventListener("click", onBodyClick));

    const onHashChange = () => moveToHash();
    window.addEventListener("hashchange", onHashChange);
    cleanups.push(() => window.removeEventListener("hashchange", onHashChange));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
