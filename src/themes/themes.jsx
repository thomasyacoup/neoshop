const theme = {
  // almost all the borders in the project will be sharp
  // so there's no need for radii object or variable
  
  colors: {
    bg: "#ACA89B",
    secondaryBg: "#1D1C11",
    surface: "#FFFFFF",
    
    foreground: "#1D1C11",
    textMuted: "#4C4634",

    primary: "#F4D03F",
    onPrimary: "#000000",
    secondary: "#3498DB",
    onSecondary: "#000000",
    accent: "#FF007F",
    onAccent: "#ffffff",
    neutral: "#FEF9E7",
    onNeutral: "#000000",
    
    border: "#1D1C11",
    shadow: "#1D1C11",

    error: "#BA1A1A",
    warning: "#ffbe2e",
    success: "#00a91c",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    laptop: "992px",
    desktop: "1200px",
  },

  shadow: {
    sm: "2px 2px 0px",
    md: "4px 4px 0px",
    lg: "8px 8px 0px",
  },

  fonts: {
    // No need for sans and serif fonts 
    // All fonts on the project will be snas
    
    size: {
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "28px",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default theme;
