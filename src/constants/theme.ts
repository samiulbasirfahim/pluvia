import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationLightTheme,
    type Theme,
} from '@react-navigation/native';

const lightColors = {
    ...NavigationLightTheme.colors,

    background: '#F7F7F5',
    surface: '#FFFFFF',
    surfaceSecondary: '#EEEEEC',

    text: '#171717',
    textSecondary: '#6B6B6B',

    border: '#DEDEDC',

    primary: '#1A1A1A',
    onPrimary: '#FFFFFF',

    accent: '#4A7C59',

    overlay: 'rgba(0, 0, 0, 0.45)',
};

const darkColors = {
    ...NavigationDarkTheme.colors,

    background: '#111111',
    surface: '#1B1B1B',
    surfaceSecondary: '#242424',

    text: '#F2F2F0',
    textSecondary: '#A6A6A4',

    border: '#303030',

    primary: '#F2F2F0',
    onPrimary: '#111111',

    accent: '#78A982',

    overlay: 'rgba(0, 0, 0, 0.65)',
};

export const LightTheme = {
    ...NavigationLightTheme,
    colors: lightColors,
} satisfies Theme & {
    colors: typeof lightColors;
};

export const DarkTheme = {
    ...NavigationDarkTheme,
    colors: darkColors,
} satisfies Theme & {
    colors: typeof darkColors;
};

export type ThemeType = typeof LightTheme;
