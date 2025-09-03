// Extended color system from the Him app
export const Colors = {
  // Him app brand colors
  himPurpleDark: "rgb(113 69 116)",
  himPurpleDark40: "rgba(113, 69, 116, 0.4)",
  himPurpleDark60: "rgba(113, 69, 116, 0.6)",
  himPurpleDark67: "rgba(113, 69, 116, 0.67)",
  
  himPurpleMedium: "rgb(250 207 253)",
  himPurpleLight: "rgb(252 230 255)",
  himPurpleActive: "rgb(71 46 79)",
  himPurpleInactive: "rgb(168 120 172)",
  himOrangeLight: "#FFE0D3",
  
  // Landing page specific
  landingPeach: "rgb(253 236 229)",
  landingPurpleCard: "rgb(228 197 238)",
  landingDarkBg: "rgb(38 25 42)",
  landingBrown: "#D4A574",
  
  // Core colors
  primary: "rgb(255 236 230)",
  primaryDark: "rgb(200 133 116)",
  primaryLight: "rgb(253 245 242)",
  primaryMedium: "rgb(248 223 215)",
  primaryAlpha20: "rgba(255, 236, 230, 0.2)",
  
  secondary: "#F5F1ED",
  border: "#E5DDD4",
  
  // Status colors
  success: "#7FB069",
  error: "#E63946",
  warning: "#F59E0B",
  
  // Text colors
  text: {
    primary: "#2F251D",
    secondary: "#6B5F53",
    tertiary: "#8B7F73",
    inverse: "#FFFFFF",
  },
  
  // Background colors
  background: {
    primary: "rgb(255 236 230)",
    secondary: "#F8F5F1",
    tertiary: "#F0EBE5",
    overlay: "rgba(47, 37, 29, 0.8)",
    elevated: "#FFFFFF",
    muted: "#F3F4F6",
  },
  
  // Neutral palette
  neutral: {
    100: "#F8F5F1",
    200: "#F0EBE5",
    300: "#E5DDD4",
    400: "#B8AFA3",
    500: "#8B7F73",
    600: "#6B5F53",
    800: "#2F251D",
  },
  
  // Icon colors
  icons: {
    primary: "#6B5F53",
  },
  
  // Border colors
  borderColors: {
    default: "#E5DDD4",
    subtle: "#F0EBE5",
  },
} as const;