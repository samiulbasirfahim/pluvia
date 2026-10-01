import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/root_navigation_type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={require('../screens/home.tsx').default}
            />
        </Stack.Navigator>
    );
};

export default RootNavigation;
