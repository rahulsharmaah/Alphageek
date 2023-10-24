// import FONTS from 'constants';
const FONTS = {
  PRIMARY: '"Poppins", Arial',
  SECONDARY: '"Montserrat", Arial',
  THIRD: '"CasualDe", Arial',
};

const { createTheme } = require("@mui/material");

const defaultTheme = createTheme();

const typographyVariants = {
  subtitle1: {
    // Display 1
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      //   lineHeight: "4rem",
    },
    fontFamily: FONTS?.THIRD,
    fontSize: "6.875rem",
    // lineHeight: "6.875rem",
  },
  subtitle2: {
    // Display 2
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "2.625rem",
    },
    fontFamily: FONTS?.THIRD,
    fontSize: "5.625rem",
    color: "#90BAE2",
  },
  h1: {
    // Title (h1)
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
      // lineHeight: '125%',
    },
    color: "#4d4d4d",
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px !important",
    LetterSpacing: "-0.48px",
    // lineHeight: "150%",
  },
  h2: {
    // h2
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2.125rem !important",
    // lineHeight: "125%",
  },
  h3: {
    // h3
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "1.125rem!important",
    },
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5rem !important",

    color: "#4d4d4d",
    // lineHeight: "125%",
  },
  h4: {
    // h4
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "0.875rem !important",
    },
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.125rem !important",
    // lineHeight: "125%",
  },
  h5: {
    // h5
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
    fontFamily: FONTS?.PRIMARY,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1rem !important",
    // lineHeight: "125%",
    color: "#838A9F",
  },
  h6: {}, // ?
  body1: {
    // Paragraph
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
    },
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1.125rem !important",

    color: "#4d4d4d",
    // lineHeight: "158%",
  },
  caption: {
    // Caption
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.75rem",
    // lineHeight: "158%",
  },
  body2: {
    // small link
    fontFamily: `${FONTS?.PRIMARY} !important`,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.75rem",
    // lineHeight: "158%",
  },
  button: {
    // Button Text 1
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
      //   lineHeight: "125%",
    },
    fontFamily: FONTS?.SECONDARY,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1rem",
    // lineHeight: "158%",
    textTransform: "uppercase",
  },
  overline: {
    // Button Text 2
    [defaultTheme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
      //   lineHeight: "125%",
    },
    fontFamily: FONTS?.PRIMARY,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.125rem !important",
    // lineHeight: "158%",
    textTransform: "uppercase",
    color: "#00833E",
  },
};

export default typographyVariants;
