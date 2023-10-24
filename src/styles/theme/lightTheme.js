import { createTheme } from '@mui/material/styles';

export const colors = {
  red: '#DA2128',
  blue: '#0D2AC1',
  black_light: '#333333',
  dark_blue: '#00008C',
  black: '#000000',
  white: '#FFFFFF',
  grey: '#F5F5F5',
};
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    colors,
    fonts: {
      primary: 'Montserrat',
      secondary: 'Open Sans',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '44px',
      fontFamily: 'Montserrat',
    },
    h2: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '44px',
      fontFamily: 'Montserrat',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Open Sans',
      display: 'flex',
      alignItems: 'center',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '25px',
      fontFamily: 'Open Sans',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '27px',
      fontFamily: 'Open Sans',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'blue' },
          style: {
            background: colors.dark_blue + '!important',
            borderRadius: '4px',
            height: '46px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            color: '#FFFFFF',
          },
        },
        {
          props: { variant: 'blueBorder' },
          style: {
            background: 'white',
            borderRadius: '4px',
            height: '46px',
            textTransform: 'none',
            color: colors.dark_blue,
            border: `1px solid ${colors.dark_blue}`,
          },
        },
        {
          props: { variant: 'red' },
          style: {
            background: colors.red + '!important',
            borderRadius: '4px',
            height: '54px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            color: '#FFFFFF',
          },
        },
        {
          props: { variant: 'redBorder' },
          style: {
            background: 'white',
            borderRadius: '4px',
            height: '54px',
            textTransform: 'none',

            color: colors.red,
            border: `1px solid ${colors.red}`,
          },
        },
        {
          props: { variant: 'white' },
          style: {
            background: colors.white + '!important',
            borderRadius: '4px',
            height: '54px',
            textTransform: 'none',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19px',
            color: colors.dark_blue,
          },
        },
      ],
    },
  },
});

export default lightTheme;
