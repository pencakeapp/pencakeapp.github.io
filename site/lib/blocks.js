// Builders for new content blocks, generating the same markup as the
// legacy Notion-export pages so new content is visually indistinguishable.
//
// Usage: add an entry like
//   { "new": "callout", "icon": "💡", "html": "Some <b>rich</b> text" }
// to a page's `blocks` array in content/<lang>/<page>.json.
// `html` accepts inline HTML (b, a, span, br, …). All builders accept
// optional `maxWidth` (px, default 1728) and `blockId` (for #anchor links).

const LEAF_ATTRS =
  'contenteditable="false" data-content-editable-leaf="true" spellcheck="true"';

function blockIdAttr(blockId) {
  return blockId ? ` data-block-id="${blockId}"` : "";
}

export function text({ html, maxWidth = 1728, blockId }) {
  return `<div class="notion-selectable notion-text-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 1px; margin-bottom: 1px;"><div style="color: inherit; fill: inherit;"><div style="display: flex;"><div ${LEAF_ATTRS} placeholder=" " style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px;">${html}</div></div></div></div>`;
}

export function heading1({ html, maxWidth = 1728, blockId }) {
  return `<div class="notion-selectable notion-header-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 2em; margin-bottom: 4px;"><div style="display: flex; width: 100%; color: inherit; fill: inherit;"><div ${LEAF_ATTRS} placeholder="Heading 1" style='max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; font-weight: 600; font-size: 1.875em; line-height: 1.3;'>${html}</div></div></div>`;
}

export function heading2({ html, maxWidth = 998, blockId }) {
  return `<div class="notion-selectable notion-header-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 2em; margin-bottom: 4px;"><div style="display: flex; width: 100%; color: inherit; fill: inherit;"><h2 ${LEAF_ATTRS} placeholder="Heading 1" style='max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgba(255, 255, 255, 0.81); padding: 3px 2px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; font-weight: 600; font-size: 1.875em; line-height: 1.3; margin: 0px;'>${html}</h2><div style="position: relative; left: 0px;"></div></div></div>`;
}

export function heading3({ html, maxWidth = 998, blockId }) {
  return `<div class="notion-selectable notion-sub_sub_header-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 1em; margin-bottom: 1px;"><div style="display: flex; width: 100%; color: inherit; fill: inherit;"><h4 ${LEAF_ATTRS} placeholder="Heading 3" style='max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgba(255, 255, 255, 0.81); padding: 3px 2px 3px 6.5px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; font-weight: 600; font-size: 1.25em; line-height: 1.3; margin: 0px;'><span class="notion-enable-hover" style="font-weight:600">${html}</span></h4><div style="position: relative; left: 0px;"></div></div></div>`;
}

export function bullet({ html, maxWidth = 1728, blockId }) {
  return `<div class="notion-selectable notion-bulleted_list-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 1px; margin-bottom: 1px;"><div style="display: flex; align-items: flex-start; width: 100%; padding-left: 2px; color: inherit; fill: inherit;"><div class="pseudoSelection" contenteditable="false" data-content-editable-void="true" data-text-edit-side="start" style="user-select: none; --pseudoSelection--background:transparent; margin-right: 2px; width: 24px; display: flex; align-items: center; justify-content: center; flex-grow: 0; flex-shrink: 0; min-height: calc(1.5em + 3px + 3px);"><div class="pseudoBefore" style='font-size: 1.5em; line-height: 1; margin-bottom: 0px; --pseudoBefore--fontFamily:Arial; --pseudoBefore--content:"•";'></div></div><div style="flex: 1 1 0px; min-width: 1px; display: flex; flex-direction: column;"><div style="display: flex;"><div ${LEAF_ATTRS} placeholder="List" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; text-align: left;">${html}</div></div></div></div></div>`;
}

export function callout({ icon, html, maxWidth = 1728, blockId }) {
  return `<div class="notion-selectable notion-callout-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 4px; margin-bottom: 4px;"><div style="display: flex;"><div style="display: flex; width: 100%; border-radius: 3px; background: rgb(241, 241, 239); padding: 16px 16px 16px 12px;"><div><div aria-disabled="true" class="notion-record-icon notranslate notion-focusable" role="button" style="user-select: none; transition: background 20ms ease-in 0s; display: flex; align-items: center; justify-content: center; height: 24px; width: 24px; border-radius: 0.25em; flex-shrink: 0;" tabindex="-1"><div style="display: flex; align-items: center; justify-content: center; height: 24px; width: 24px;"><div style="height: 21.6px; width: 21.6px; font-size: 21.6px; line-height: 1; margin-left: 0px; color: black;"><span aria-label="${icon}" role="image" style='font-family: "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols; line-height: 1em; white-space: nowrap;'>${icon}</span></div></div></div></div><div style="display: flex; flex-direction: column; min-width: 0px; margin-left: 8px; width: 100%;"><div ${LEAF_ATTRS} placeholder="Type something…" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding-left: 2px; padding-right: 2px;">${html}</div></div></div></div></div>`;
}

export function divider({ maxWidth = 1728, blockId }) {
  return `<div class="notion-selectable notion-divider-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; margin-top: 1px; margin-bottom: 1px;"><div class="notion-cursor-default" style="display: flex; align-items: center; justify-content: center; pointer-events: auto; width: 100%; height: 13px; flex: 0 0 auto; color: rgba(55, 53, 47, 0.16);"><div style="width: 100%; height: 1px; visibility: visible; border-bottom: 1px solid rgba(55, 53, 47, 0.16);"></div></div></div>`;
}

export function image({ src, maxWidth = 1920, blockId }) {
  return `<div class="notion-selectable notion-image-block"${blockIdAttr(blockId)} style="width: 100%; max-width: ${maxWidth}px; align-self: center; margin-top: 4px; margin-bottom: 0px;"><div contenteditable="false" data-content-editable-void="true"><div style="display: flex;"><div class="notion-cursor-default" style="position: relative; overflow: hidden; flex-grow: 1;"><div style="position: relative;"><div><div style="height: 100%; width: 100%;"><img referrerpolicy="same-origin" src="${src}" style="display: block; object-fit: cover; border-radius: 1px; pointer-events: auto; width: 100%;"/></div></div></div></div></div></div></div>`;
}

export function spacer() {
  return "<br>";
}

const BUILDERS = { text, heading1, heading2, heading3, bullet, callout, divider, image, spacer };

// Resolves a content block entry: extracted blocks carry raw `html`,
// new blocks reference a builder via `new`.
export function blockHtml(block) {
  if (block.new) {
    const builder = BUILDERS[block.new];
    if (!builder) throw new Error(`Unknown block builder: ${block.new}`);
    return builder(block);
  }
  return block.html;
}
