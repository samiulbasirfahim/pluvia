import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigations/root_navigation';
import { DarkTheme, LightTheme } from './constants/theme';
import { useColorScheme } from 'react-native';

const App = () => {
    const dark = useColorScheme();

    return (
        <NavigationContainer theme={dark === 'dark' ? DarkTheme : LightTheme}>
            <Navigation />
        </NavigationContainer>
    );
};

export default App;
