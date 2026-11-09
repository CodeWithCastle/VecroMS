/**
 * VecroMS Design System — Tailwind preset
 * Generated from tokens.json. Do not edit by hand.
 *
 * Usage (tailwind.config.js):
 *   module.exports = {
 *     presets: [require("./design-system/tokens/tailwind.preset.js")],
 *     content: ["./index.html", "./src"], // point at your template files
 *   };
 */
const tokens = require("./tokens.json");

/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          green: tokens.color.brand.green,
          yellow: tokens.color.brand.yellow,
        },
        neutral: tokens.color.neutral,
        navy: tokens.color.navy,
        primary: {
          DEFAULT: "var(--vms-primary)",
          hover: "var(--vms-primary-hover)",
          active: "var(--vms-primary-active)",
          subtle: "var(--vms-primary-subtle)",
          "subtle-hover": "var(--vms-primary-subtle-hover)",
          fg: "var(--vms-primary-fg)",
          "fg-subtle": "var(--vms-primary-fg-subtle)",
        },
        success: {
                "DEFAULT": "var(--vms-success-solid)",
                "solid": "var(--vms-success-solid)",
                "bg": "var(--vms-success-bg)",
                "border": "var(--vms-success-border)",
                "fg": "var(--vms-success-fg)"
        },
        warning: {
                "DEFAULT": "var(--vms-warning-solid)",
                "solid": "var(--vms-warning-solid)",
                "bg": "var(--vms-warning-bg)",
                "border": "var(--vms-warning-border)",
                "fg": "var(--vms-warning-fg)"
        },
        danger: {
                "DEFAULT": "var(--vms-danger-solid-strong)",
                "solid": "var(--vms-danger-solid)",
                "bg": "var(--vms-danger-bg)",
                "border": "var(--vms-danger-border)",
                "fg": "var(--vms-danger-fg)",
                "solid-strong": "var(--vms-danger-solid-strong)"
        },
        info: {
                "DEFAULT": "var(--vms-info-solid)",
                "solid": "var(--vms-info-solid)",
                "bg": "var(--vms-info-bg)",
                "border": "var(--vms-info-border)",
                "fg": "var(--vms-info-fg)"
        },
        accent: {
                "DEFAULT": "var(--vms-accent-solid)",
                "solid": "var(--vms-accent-solid)",
                "bg": "var(--vms-accent-bg)",
                "border": "var(--vms-accent-border)",
                "fg": "var(--vms-accent-fg)"
        },
        canvas: "var(--vms-bg-canvas)",
        surface: {
          DEFAULT: "var(--vms-bg-surface)",
          subtle: "var(--vms-bg-surface-subtle)",
          sunken: "var(--vms-bg-surface-sunken)",
          hover: "var(--vms-bg-surface-hover)",
          raised: "var(--vms-bg-surface-raised)",
          inverse: "var(--vms-bg-inverse)",
        },
        ink: {
          DEFAULT: "var(--vms-text-primary)",
          secondary: "var(--vms-text-secondary)",
          tertiary: "var(--vms-text-tertiary)",
          disabled: "var(--vms-text-disabled)",
          inverse: "var(--vms-text-inverse)",
        },
        line: {
          DEFAULT: "var(--vms-border-default)",
          subtle: "var(--vms-border-subtle)",
          strong: "var(--vms-border-strong)",
          focus: "var(--vms-border-focus)",
        },
      },
      fontFamily: {
        sans: [
                "Inter",
                "\"Open Sans\"",
                "-apple-system",
                "BlinkMacSystemFont",
                "\"Segoe UI\"",
                "Roboto",
                "\"Helvetica Neue\"",
                "Arial",
                "sans-serif"
        ],
        mono: [
                "\"JetBrains Mono\"",
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "monospace"
        ],
      },
      fontWeight: tokens.typography.weight,
      fontSize: {
            "display-xl": [
                  "48px",
                  {
                        "lineHeight": "56px",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "700"
                  }
            ],
            "display-lg": [
                  "40px",
                  {
                        "lineHeight": "48px",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "700"
                  }
            ],
            "display-md": [
                  "36px",
                  {
                        "lineHeight": "44px",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "700"
                  }
            ],
            "h1": [
                  "30px",
                  {
                        "lineHeight": "38px",
                        "letterSpacing": "-0.01em",
                        "fontWeight": "700"
                  }
            ],
            "h2": [
                  "24px",
                  {
                        "lineHeight": "32px",
                        "letterSpacing": "-0.01em",
                        "fontWeight": "700"
                  }
            ],
            "h3": [
                  "20px",
                  {
                        "lineHeight": "28px",
                        "letterSpacing": "-0.01em",
                        "fontWeight": "600"
                  }
            ],
            "h4": [
                  "18px",
                  {
                        "lineHeight": "26px",
                        "letterSpacing": "-0.01em",
                        "fontWeight": "600"
                  }
            ],
            "body-lg": [
                  "16px",
                  {
                        "lineHeight": "24px",
                        "letterSpacing": "0",
                        "fontWeight": "400"
                  }
            ],
            "body": [
                  "14px",
                  {
                        "lineHeight": "22px",
                        "letterSpacing": "0",
                        "fontWeight": "400"
                  }
            ],
            "body-sm": [
                  "13px",
                  {
                        "lineHeight": "20px",
                        "letterSpacing": "0",
                        "fontWeight": "400"
                  }
            ],
            "caption": [
                  "12px",
                  {
                        "lineHeight": "16px",
                        "letterSpacing": "0.01em",
                        "fontWeight": "500"
                  }
            ],
            "overline": [
                  "11px",
                  {
                        "lineHeight": "16px",
                        "letterSpacing": "0.08em",
                        "fontWeight": "600"
                  }
            ],
            "metric": [
                  "30px",
                  {
                        "lineHeight": "36px",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "700"
                  }
            ],
            "metric-lg": [
                  "40px",
                  {
                        "lineHeight": "48px",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "700"
                  }
            ]
      },
      spacing: tokens.space,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow,
      borderWidth: tokens.borderWidth,
      screens: tokens.breakpoint,
      zIndex: tokens.z,
      transitionDuration: tokens.motion.duration,
      transitionTimingFunction: tokens.motion.easing,
      height: {
            "control-xs": "28px",
            "control-sm": "32px",
            "control-md": "40px",
            "control-lg": "48px",
            "control-xl": "56px"
      },
      width: {
            "sidebar-expanded": "264px",
            "sidebar-collapsed": "76px",
            "topbar": "64px"
      },
      maxWidth: {
        content: tokens.size["content-max"],
        prose: tokens.size["prose-max"],
      },
    },
  },
};
