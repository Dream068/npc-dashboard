import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E417F",
    },
    secondary: {
      main: "#A0ACC3",
    },
    default: {
      main: "#FFFFFF",
    },
    type: "light",
    newPaletteHeight: 120,
    deletePaletteDialogWidth: 350,
    deletePaletteDialogHeight: 120,
    editPaleteHeight: 120,
    text: {
      primary: "#FFF",
      secondary: "red",
      disabled: "#ededed",
    },
    background: {
      default: "#FFF",
      paper: "#fff",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: ["Futura-Book", "sans-serif"].join(),
    h1: {
      fontSize: "4.5rem",
      lineHeight: 1,
    },
    h2: {
      fontSize: "2.4rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.2rem",
    },
    h5: {
      fontSize: "0.95rem",
    },
    h6: {
      fontSize: "0.5rem",
    },
    subtitle1: {
      fontSize: "1.7rem",
    },
    subtitle2: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "0.8.rem",
    },
    body2: {
      fontSize: "0.66rem",
      letterSpacing: "-0.2px",
      lineHeight: 1.3,
    },
    caption: {
      fontSize: "0.5rem",
      letterSpacing: "0.01571em",
      lineHeight: 1.2,
    },
  },
  tabs: {
    indicatorHeight: 4,
  },
  notification: {
    listMaxWidth: 360,
    iconMaxWidth: 32,
    notificationsBarWidth: 480,
    notificationItemWidth: 82,
    notificationItemWidthSmall: 50,
    notificationImageWidth: 40,
    notificationImageWidthSmall: 30,
  },
  colorSearchBackgroundCard: {
    width: 340,
    height: 80,
    heightSmall: 60,
  },
  icon: {
    width: 30,
    height: 30,
    fontSize: 20,
    badgeHeight: 15,
    emptyIcon: {
      width: 80,
      height: 80,
    },
    small: {
      width: 20,
      height: 20,
    },
  },
  zIndex: {
    maxZ: 9999,
    minZ: -100,
    draggingZ: 1500,
  },
  collaborators: {
    dialogPaperMinWidth: 520,
  },
  colorCard: {
    logo: {
      xxsHeight: 5,
      xsHeight: 6,
      sHeight: 8,
      lHeight: 24,
      main: 10,
    },
    actionMenuIcon: {
      width: 20,
      height: 20,
      xxsWidth: 14,
      xxsHeight: 14,
    },
    chipSmallHeight: 18,
  },
  fullScreen: {
    pantoneLogoHeight: 17,
    gridTemplateColumns: "90px 180px",
  },
  colorPicker: {
    contentMinHeight: 100,
  },
  colorSearch: {
    paperMaxHeight: 300,
    colorBar: {
      width: 20,
      height: 20,
      minWidth: 20,
    },
    listIconMinWidth: 40,
  },
  formControl: {
    formControlWidth: 100,
    formControlMinWidth: 90,
    formControlMaxWidth: 320,
  },
  convert: {
    containerMinWidth: 36,
    containerMinHeight: 36,
    iconHeight: 18,
    hueBarHeight: 11,
    colorBarHeight: 80,
    textFieldNumberWidth: 40,
    textFieldNumberMinWidth: 20,
    textFieldHexWidth: 100,
    saturationBox: {
      width: 200,
      height: 200,
    },
  },
  extract: {
    containerMaxWidth: 640,
    dropZoneHeight: 350,
    dropZoneSmallHeight: 60,
    uploadedImageHeight: 350,
  },
  harmony: {
    containerWidth: 340,
    colorSearchedHeight: 80,
    colorSearchedMinHeight: 65,
  },
  appBar: {
    pantoneLogo: 24,
    pantoneLogoSmall: 16,
    pantoneLogoSmallest: 12,
    searchBarWidth: 600,
    loginHeight: 30,
    loginHeightSmall: 25,
    languagesMenuWidth: 160,
  },
  measure: {
    platformImageWidth: 100,
    platformImageWidthSmall: 80,
  },
  rateUs: {
    contentWidth: 400,
  },
  share: {
    generatedImageWidth: "100%",
    dialogPaddingThemeSpacing: 1,
    templateMarginThemeSpacing: 0.5,
  },
  trendingPalettes: {
    logoHeight: 18,
    logoHeightSmall: 14,
  },
  popUp: {
    contentWidth: 400,
  },
  auth: {
    headerLogoHeight: 120,
  },
  landingPage: {
    logoHeightLarge: 24,
    logoHeight: 16,
    logoHeightSmall: 12,
    downloadMobileWidth: 200,
    downloadMobileWidthSmall: 400,
    playStoreHeight: 80,
    mediaHeight: 110,
    mediaHeightSmall: 90,
    platformCardHeight: 180,
    platformCardHeightSmall: 130,
    platformCardWidth: 110,
    platformCardWidthSmall: 90,
    signUpFormWidth: 700,
    signUpDividerHeight: 28,
    premiumContentWidth: 960,
  },
  dialogs: {
    gerneralWidth: 350,
    generalHeight: 120,
    generalHeightSmall: 140,
    changeNameHeight: 160,
  },
  personalInfo: {
    width: 250,
    emailCaptionWidth: 200,
    darkThemeModeTitleWidth: 50,
  },
  shareTemplate: {
    compactColorCodeHeight: 20,
    pantoneConnectLogoWidth: 195,
  },
  UI: {
    avatarWidth: 60,
    avatarHeight: 60,
  },
  overrides: {
    MuiDialog: {
      paperFullScreen: {
        alignItems: "flex-start",
      },
    },
    MuiDialogContent: {
      root: {
        overflowY: "hidden",
        padding: 0,
        "&:first-child": {
          paddingTop: 0,
        },
      },
    },
  },
});

theme.toolbarSmallHeight = 35;
theme.overlapMargin = -50;
theme.cardTrademarkImg = 30;
theme.breakpoints.keys.unshift("xxs");
theme.breakpoints.values.xs = 340;
theme.breakpoints.values.xxs = 0;

export default theme;
