/* @ds-bundle: {"format":4,"namespace":"WhiteForestDesignSystem_3e45e2","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"6e3443dcb3e8","components/disclosure/Accordion.jsx":"29263438d41a","components/display/Badge.jsx":"73151348ba81","components/display/Card.jsx":"e490c787e2f1","components/display/Divider.jsx":"9e2871cedc0d","components/display/Stat.jsx":"3e7cafc7b800","components/feedback/Dialog.jsx":"e79c92d2edea","components/forms/Button.jsx":"fac2da8fc428","components/forms/Checkbox.jsx":"26fed4b0564b","components/forms/IconButton.jsx":"4f21eb1805dc","components/forms/Input.jsx":"2243d5e93ab4","components/forms/Radio.jsx":"97131a280c4d","components/forms/Select.jsx":"f3fd61d9ad5c","components/forms/Switch.jsx":"919235387529","ui_kits/marketing/Site.jsx":"f3283bedad88"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WhiteForestDesignSystem_3e45e2 = window.WhiteForestDesignSystem_3e45e2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * White Forest logo. Primarily typographic (the wordmark is set in the brand
 * serif); pass `markSrc` to show the geometric mark image alongside/instead.
 */
function Logo({
  variant = "wordmark",
  tone = "dark",
  markSrc,
  size = 28,
  className = "",
  style = {},
  ...rest
}) {
  const color = tone === "light" ? "var(--wf-off-white)" : "var(--wf-forest-800)";
  const wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      whiteSpace: "nowrap"
    }
  }, "White\xA0Forest");
  const mark = markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "White Forest",
    style: {
      height: Math.round(size * 1.15),
      width: "auto",
      display: "block"
    }
  }) : null;
  let content;
  if (variant === "mark") content = mark || wordmark;else if (variant === "lockup") content = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.5
    }
  }, mark, mark ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 1,
      height: size * 0.95,
      background: "var(--border-strong)"
    }
  }) : null, wordmark);else content = wordmark;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), content);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A quiet FAQ-style disclosure list. `items: {q, a}[]`. Hairline dividers. */
function Accordion({
  items = [],
  defaultOpen = -1,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "24px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-serif)",
        fontSize: 21,
        fontWeight: 500,
        color: "var(--text-primary)"
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        flexShrink: 0,
        width: 22,
        height: 22,
        position: "relative",
        transition: "transform var(--dur-base) var(--ease-standard)",
        transform: isOpen ? "rotate(45deg)" : "none",
        color: "var(--accent-gold)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        height: 1,
        background: "currentColor"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: 1,
        background: "currentColor"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? 400 : 0,
        transition: "max-height var(--dur-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 0 26px",
        maxWidth: "62ch",
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.7,
        color: "var(--text-secondary)"
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label badge. Muted, discreet — never loud. */
function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    neutral: {
      background: "var(--wf-neutral-100)",
      color: "var(--wf-neutral-700)",
      border: "1px solid var(--border-subtle)"
    },
    forest: {
      background: "var(--wf-sage-200)",
      color: "var(--wf-forest-700)",
      border: "1px solid transparent"
    },
    gold: {
      background: "rgba(185,154,91,0.16)",
      color: "var(--wf-gold-600)",
      border: "1px solid rgba(185,154,91,0.28)"
    },
    solid: {
      background: "var(--wf-forest-800)",
      color: "var(--wf-off-white)",
      border: "1px solid var(--wf-forest-800)"
    },
    positive: {
      background: "rgba(95,122,90,0.14)",
      color: "var(--wf-positive)",
      border: "1px solid transparent"
    },
    critical: {
      background: "rgba(140,74,63,0.12)",
      color: "var(--wf-critical)",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.neutral;
  const pad = size === "sm" ? "3px 9px" : "5px 12px";
  const fs = size === "sm" ? 10 : 11;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: fs,
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      padding: pad,
      borderRadius: "var(--radius-xs)",
      ...v,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Editorial surface card. Flat, hairline-bordered, whisper shadow. */
function Card({
  variant = "default",
  padding = "lg",
  as: Tag = "div",
  children,
  style = {},
  className = "",
  ...rest
}) {
  const pad = {
    none: 0,
    sm: 20,
    md: 28,
    lg: 36
  }[padding] ?? 36;
  const variants = {
    default: {
      background: "var(--surface-raised)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-primary)",
      boxShadow: "var(--shadow-sm)"
    },
    flat: {
      background: "var(--surface-ivory)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-primary)"
    },
    inverse: {
      background: "var(--wf-forest-800)",
      border: "1px solid var(--wf-forest-700)",
      color: "var(--text-inverse)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-strong)",
      color: "var(--text-primary)"
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pad,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A hairline rule. Optional centered label — a signature editorial device. */
function Divider({
  label,
  tone = "light",
  spacing = 32,
  style = {},
  ...rest
}) {
  const line = tone === "dark" ? "var(--border-inverse)" : "var(--border-subtle)";
  const text = tone === "dark" ? "var(--text-inverse-muted)" : "var(--text-muted)";
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: "none",
        borderTop: `1px solid ${line}`,
        margin: `${spacing}px 0`,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      margin: `${spacing}px 0`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: text,
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A key figure / statistic set in the display serif. */
function Stat({
  value,
  label,
  sublabel,
  tone = "dark",
  align = "left",
  style = {},
  ...rest
}) {
  const primary = tone === "light" ? "var(--text-inverse)" : "var(--text-primary)";
  const muted = tone === "light" ? "var(--text-inverse-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: muted
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 52,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: primary
    }
  }, value), sublabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: muted
    }
  }, sublabel) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** A quiet centered modal with a soft scrim. Controlled via `open`. */
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 480,
  style = {}
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(20,26,23,0.44)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      animation: "wf-fade var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-raised)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: 36,
      animation: "wf-rise var(--dur-base) var(--ease-entrance)",
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--accent-gold)",
      marginBottom: 12
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 26,
      lineHeight: 1.1,
      margin: "0 0 14px",
      color: "var(--text-primary)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-secondary)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "flex-end",
      marginTop: 28
    }
  }, footer) : null), /*#__PURE__*/React.createElement("style", null, `@keyframes wf-fade{from{opacity:0}to{opacity:1}}@keyframes wf-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * White Forest button. Calm, confident, minimal — flat fills, hairline
 * borders, restrained radius. Primary = forest ink; gold reserved for
 * high-intent moments.
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  type = "button",
  iconLeft,
  iconRight,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 12.5,
      letter: "0.14em",
      gap: 8
    },
    md: {
      padding: "12px 24px",
      fontSize: 13.5,
      letter: "0.15em",
      gap: 9
    },
    lg: {
      padding: "16px 34px",
      fontSize: 14.5,
      letter: "0.16em",
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--wf-forest-800)",
      color: "var(--wf-off-white)",
      border: "1px solid var(--wf-forest-800)"
    },
    secondary: {
      background: "transparent",
      color: "var(--wf-forest-800)",
      border: "1px solid var(--border-strong)"
    },
    gold: {
      background: "var(--wf-gold-500)",
      color: "var(--wf-forest-900)",
      border: "1px solid var(--wf-gold-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--wf-forest-800)",
      border: "1px solid transparent"
    },
    "inverse": {
      background: "var(--wf-off-white)",
      color: "var(--wf-forest-800)",
      border: "1px solid var(--wf-off-white)"
    },
    link: {
      background: "transparent",
      color: "var(--wf-forest-800)",
      border: "1px solid transparent",
      padding: 0,
      textDecoration: "none",
      borderBottom: "1px solid var(--accent-gold)",
      borderRadius: 0
    }
  };
  const v = variants[variant] || variants.primary;
  const isLink = variant === "link";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: isLink ? 14 : s.fontSize,
      letterSpacing: isLink ? "0.02em" : s.letter,
      textTransform: isLink ? "none" : "uppercase",
      padding: isLink ? 0 : s.padding,
      borderRadius: isLink ? 0 : "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled && !isLink) e.currentTarget.style.transform = "translateY(0.5px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginBottom: -1
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginBottom: -1
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with square, hairline styling. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const uid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${on ? "var(--wf-forest-800)" : "var(--border-strong)"}`,
      background: on ? "var(--wf-forest-800)" : "var(--surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, on ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.5L9.5 3.5",
    stroke: "var(--wf-off-white)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square, quiet icon button for toolbars and headers. Pass an icon node. */
function IconButton({
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  children,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--wf-forest-700)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--surface-raised)",
      color: "var(--wf-forest-800)",
      border: "1px solid var(--border-subtle)"
    },
    solid: {
      background: "var(--wf-forest-800)",
      color: "var(--wf-off-white)",
      border: "1px solid var(--wf-forest-800)"
    },
    inverse: {
      background: "transparent",
      color: "var(--wf-off-white)",
      border: "1px solid var(--border-inverse)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast), border-color var(--dur-fast)",
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, helper and error. Hairline underline-free
 *  box style — quiet until focused, gold focus ring. */
function Input({
  label,
  helper,
  error,
  id,
  required = false,
  prefix,
  suffix,
  style = {},
  className = "",
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const uid = id || React.useId();
  const borderColor = error ? "var(--wf-critical)" : focused ? "var(--wf-forest-600)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-gold)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--surface-raised)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: "0 14px",
      boxShadow: focused ? `0 0 0 3px var(--focus-ring)` : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-primary)",
      padding: "13px 0"
    }
  })), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--wf-critical)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio with a ringed dot. Group by shared `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  name,
  value,
  style = {},
  ...rest
}) {
  const uid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "50%",
      border: `1px solid ${on ? "var(--wf-forest-800)" : "var(--border-strong)"}`,
      background: "var(--surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: on ? "var(--wf-forest-800)" : "transparent",
      transform: on ? "scale(1)" : "scale(0.4)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native-backed select styled to match Input. */
function Select({
  label,
  helper,
  error,
  id,
  children,
  style = {},
  className = "",
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const uid = id || React.useId();
  const borderColor = error ? "var(--wf-critical)" : focused ? "var(--wf-forest-600)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--surface-raised)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: "13px 40px 13px 14px",
      boxShadow: focused ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 12
    }
  }, "\u25BE")), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--wf-critical)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A restrained toggle switch. Forest when on, hairline track when off. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const uid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 44,
      height: 24,
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--wf-forest-800)" : "var(--wf-mist)",
      border: `1px solid ${on ? "var(--wf-forest-800)" : "var(--border-strong)"}`,
      position: "relative",
      transition: "background var(--dur-base) var(--ease-standard), border-color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--surface-raised)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Site.jsx
try { (() => {
// White Forest — marketing website (cosmetic recreation).
// Composes design-system primitives from the bundle namespace.
const WF = window.WhiteForestDesignSystem_3e45e2;
const {
  Logo,
  Button,
  Badge,
  Card,
  Divider,
  Stat,
  Accordion,
  Input,
  Dialog,
  IconButton
} = WF;
const MARK = "../../assets/whiteforest-mark.png";
const MARK_LIGHT = "../../assets/whiteforest-mark-light.png";
function Icon({
  n,
  size = 18,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      color,
      ...style
    }
  });
}
const CONTENT = "min(1180px, 92vw)";

/* ————————————————————— Navigation ————————————————————— */
function Nav({
  onRequest
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Protection", "Inheritance", "Family Office", "Insight"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(251,250,247,0.86)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
      transition: "background var(--dur-base), border-color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      height: 76,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "dark",
    markSrc: MARK,
    size: 20
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 38
    },
    className: "wf-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      letterSpacing: "0.04em",
      color: "var(--text-secondary)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      color: "var(--text-secondary)"
    },
    className: "wf-signin"
  }, "Client login"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onRequest
  }, "Request access"))));
}

/* ————————————————————— Hero ————————————————————— */
function Hero({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      paddingTop: 72,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 72,
      alignItems: "center"
    },
    className: "wf-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "wf-overline",
    style: {
      color: "var(--text-accent)"
    }
  }, "Private Digital Wealth Protection"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(44px, 5vw, 76px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      margin: "22px 0 0",
      fontWeight: 400
    }
  }, "Your digital wealth,", /*#__PURE__*/React.createElement("br", null), "secured for the people", /*#__PURE__*/React.createElement("br", null), "who ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--text-accent)"
    }
  }, "matter most"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: "46ch",
      margin: "28px 0 36px"
    }
  }, "We design secure inheritance systems, family access plans and long-term protection strategies \u2014 so digital wealth is never lost, and remains accessible for generations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onRequest,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      size: 17
    })
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Read our approach")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 44,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Assets protected",
    value: "\u20AC2.4B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Jurisdictions",
    value: "40+"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Recovery success",
    value: "100%"
  }))), /*#__PURE__*/React.createElement(PhotoPanel, {
    label: "Editorial photography",
    caption: "Architectural \xB7 natural \xB7 warm-neutral",
    tall: true
  })));
}

/* Honest image placeholder — commit to editorial photography here. */
function PhotoPanel({
  label,
  caption,
  tall,
  tone = "forest"
}) {
  const bg = tone === "forest" ? "var(--wf-forest-800)" : "var(--wf-sage-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: bg,
      borderRadius: "var(--radius-lg)",
      minHeight: tall ? 520 : 320,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 28,
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK_LIGHT,
    alt: "",
    style: {
      width: 120,
      height: 120
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--wf-sage-400)"
    }
  }, label), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 19,
      color: "var(--wf-off-white)",
      marginTop: 8,
      letterSpacing: "-0.01em"
    }
  }, caption) : null));
}

/* ————————————————————— Trust bar ————————————————————— */
function TrustBar() {
  const items = ["Regulated custody", "Audited quarterly", "Multi-vault architecture", "24/7 continuity"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-ivory)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      padding: "26px 0",
      flexWrap: "wrap",
      gap: 20
    }
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "shield-check",
    size: 17,
    color: "var(--wf-sage-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      letterSpacing: "0.02em",
      color: "var(--text-secondary)"
    }
  }, t)))));
}

/* ————————————————————— Services ————————————————————— */
function Services() {
  const svc = [{
    icon: "lock-keyhole",
    title: "Protect",
    body: "Institutional-grade custody with keys encrypted and split across geographically separated vaults. No single point of failure — ever."
  }, {
    icon: "git-fork",
    title: "Structure",
    body: "Wealth structured across entities and jurisdictions, aligned with your estate — clear, compliant, and built to endure."
  }, {
    icon: "users",
    title: "Preserve",
    body: "Inheritance systems and family access plans that release control only when they should, exactly as you intend."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wf-overline"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      letterSpacing: "-0.02em",
      margin: "16px 0 0",
      fontWeight: 400
    }
  }, "Three disciplines, one continuity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    },
    className: "wf-svc-grid"
  }, svc.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    variant: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "var(--radius-sm)",
      background: "var(--wf-sage-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: s.icon,
    size: 20,
    color: "var(--wf-forest-700)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      margin: "0 0 12px",
      fontWeight: 500
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      margin: 0
    }
  }, s.body)))));
}

/* ————————————————————— Assurance (dark) ————————————————————— */
function Assurance() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wf-forest-800)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    },
    className: "wf-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "wf-overline",
    style: {
      color: "var(--wf-gold-400)"
    }
  }, "Assurance"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 46,
      letterSpacing: "-0.02em",
      margin: "18px 0 24px",
      fontWeight: 400,
      color: "var(--wf-off-white)"
    }
  }, "Discreet by design,", /*#__PURE__*/React.createElement("br", null), "enduring by principle."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.7,
      color: "var(--wf-sage-400)",
      maxWidth: "44ch",
      margin: "0 0 32px"
    }
  }, "We operate with the discretion of a family office and the rigour of a private bank. Every arrangement is reviewable, revocable and yours to control \u2014 today, and for the generations that follow."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Speak with an advisor")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "light",
    label: "Continuity",
    value: "100%",
    sublabel: "Recovery success rate"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "light",
    label: "Response",
    value: "< 4h",
    sublabel: "Advisor response, always"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "light",
    label: "Established",
    value: "2024",
    sublabel: "Zug, Switzerland"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "light",
    label: "Minimum",
    value: "\u20AC10k",
    sublabel: "Portfolios and above"
  }))))));
}

/* ————————————————————— Process ————————————————————— */
function Process() {
  const steps = [{
    n: "01",
    t: "Confidential consultation",
    b: "We understand your holdings, your family and your intentions — in complete confidence."
  }, {
    n: "02",
    t: "Design your structure",
    b: "A bespoke custody and inheritance plan, documented and agreed line by line."
  }, {
    n: "03",
    t: "Secure and settle",
    b: "Assets are secured across vaults; access rules and heirs are set in place."
  }, {
    n: "04",
    t: "Ongoing stewardship",
    b: "Quarterly reviews and standing continuity — your plan evolves as life does."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wf-overline"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      letterSpacing: "-0.02em",
      margin: "16px 0 0",
      fontWeight: 400
    }
  }, "A considered, four-step engagement")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr 2fr",
      gap: 32,
      padding: "30px 0",
      borderBottom: "1px solid var(--border-subtle)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 30,
      color: "var(--wf-gold-500)",
      fontWeight: 500
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      margin: 0,
      fontWeight: 500
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      margin: 0,
      maxWidth: "56ch"
    }
  }, s.b)))));
}

/* ————————————————————— FAQ ————————————————————— */
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-ivory)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(860px, 92vw)",
      margin: "0 auto",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wf-overline"
  }, "Common questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      letterSpacing: "-0.02em",
      margin: "16px 0 0",
      fontWeight: 400
    }
  }, "Answered plainly")), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      q: "How is my seed phrase stored?",
      a: "Encrypted and split across geographically separated vaults, so no single location — and no single person — ever holds a complete key."
    }, {
      q: "What happens to my heirs?",
      a: "Access is released only after a verified inactivity window, following the instructions you set out in advance. You remain in full control until then."
    }, {
      q: "Is my portfolio large enough?",
      a: "We work with investors holding digital portfolios of €10,000 and above, including entrepreneurs, high-net-worth individuals and family offices."
    }, {
      q: "Can I change my plan later?",
      a: "Yes. Every arrangement is reviewable and revocable at any time by you or your appointed steward, with quarterly reviews as standard."
    }]
  })));
}

/* ————————————————————— CTA + Footer ————————————————————— */
function CtaFooter({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--wf-forest-900)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: CONTENT,
      margin: "0 auto",
      padding: "96px 0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 64,
      alignItems: "center",
      paddingBottom: 72,
      borderBottom: "1px solid var(--border-inverse)"
    },
    className: "wf-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48,
      letterSpacing: "-0.025em",
      margin: 0,
      fontWeight: 400,
      color: "var(--wf-off-white)"
    }
  }, "Begin a private", /*#__PURE__*/React.createElement("br", null), "conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 300,
      color: "var(--wf-sage-400)",
      marginTop: 20,
      maxWidth: "40ch"
    }
  }, "Request access and an advisor will be in touch within four hours \u2014 discreetly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@family-office.com",
    style: {
      ["--x"]: 0
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    block: true,
    onClick: onRequest
  }, "Request access"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--wf-sage-600)",
      textAlign: "center"
    }
  }, "Confidential. No obligation."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 36,
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "light",
    markSrc: MARK_LIGHT,
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30
    }
  }, ["Protection", "Inheritance", "Insight", "Legal", "Contact"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--wf-sage-400)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--wf-sage-600)"
    }
  }, "\xA9 2026 White Forest \xB7 Zug"))));
}

/* ————————————————————— Root ————————————————————— */
function Site() {
  const [dialog, setDialog] = React.useState(false);
  const open = () => setDialog(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, `
        .wf-hero-grid { }
        @media (max-width: 900px) {
          .wf-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wf-svc-grid { grid-template-columns: 1fr !important; }
          .wf-nav-links, .wf-signin { display: none !important; }
        }
        a:hover { color: var(--wf-forest-800); }
      `), /*#__PURE__*/React.createElement(Nav, {
    onRequest: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onRequest: open
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Assurance, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CtaFooter, {
    onRequest: open
  }), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: () => setDialog(false),
    eyebrow: "Request access",
    title: "Begin a private conversation",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialog(false)
    }, "Not now"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setDialog(false)
    }, "Submit request"))
  }, "Share your details and a White Forest advisor will respond within four hours, in complete confidence."));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
