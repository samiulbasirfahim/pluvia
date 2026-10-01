import { StyleSheet, View } from 'react-native';
import Typography from '../components/typograhy';
import { useThemeColors } from '../constants/useTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/root_navigation_type';
import { useLayoutEffect } from 'react';

const HomeScreen = ({
    navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
    const theme = useThemeColors().colors;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            title: '',
            headerRight: () => (
                <View
                    style={[
                        sts.headerRightContainer,
                        { backgroundColor: theme.background },
                    ]}
                >
                    <Typography variant="body">SELECT</Typography>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <>
            <View style={{ ...sts.container, backgroundColor: theme.primary }}>
                <Typography variant="logo">Pluvia</Typography>
            </View>
        </>
    );
};

export default HomeScreen;

const sts = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerRightContainer: {
        marginRight: 16,
        padding: 8,
        borderRadius: 8,
    },
});
