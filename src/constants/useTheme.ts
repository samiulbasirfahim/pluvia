import { useTheme } from '@react-navigation/native';
import { ThemeType } from './theme';

export const useThemeColors = (): ThemeType => {
    const theme = useTheme();
    return theme as ThemeType;
};
