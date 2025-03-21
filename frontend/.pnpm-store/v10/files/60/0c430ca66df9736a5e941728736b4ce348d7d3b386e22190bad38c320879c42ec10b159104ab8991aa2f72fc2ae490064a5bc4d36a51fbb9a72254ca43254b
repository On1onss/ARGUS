import {
  getComputedStyle
} from "./chunk-VUVAE7SR.mjs";

// src/copy-visual-styles.ts
function copyVisualStyles(fromEl, toEl) {
  if (!fromEl)
    return;
  const el = getComputedStyle(fromEl);
  const cssText = "box-sizing:" + el.boxSizing + ";border-left:" + el.borderLeftWidth + " solid red;border-right:" + el.borderRightWidth + " solid red;font-family:" + el.fontFamily + ";font-feature-settings:" + el.fontFeatureSettings + ";font-kerning:" + el.fontKerning + ";font-size:" + el.fontSize + ";font-stretch:" + el.fontStretch + ";font-style:" + el.fontStyle + ";font-variant:" + el.fontVariant + ";font-variant-caps:" + el.fontVariantCaps + ";font-variant-ligatures:" + el.fontVariantLigatures + ";font-variant-numeric:" + el.fontVariantNumeric + ";font-weight:" + el.fontWeight + ";letter-spacing:" + el.letterSpacing + ";margin-left:" + el.marginLeft + ";margin-right:" + el.marginRight + ";padding-left:" + el.paddingLeft + ";padding-right:" + el.paddingRight + ";text-indent:" + el.textIndent + ";text-transform:" + el.textTransform;
  toEl.style.cssText += cssText;
}

export {
  copyVisualStyles
};
