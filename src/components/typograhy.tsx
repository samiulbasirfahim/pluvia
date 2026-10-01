import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type TypographyVariant = 'logo' | 'title' | 'subtitle' | 'body' | 'caption';

type TypographyProps = TextProps & {
    variant: TypographyVariant;
};

const typographyStyles = StyleSheet.create({
    logo: {
        fontFamily: 'Praise-Regular',
        fontSize: 32,
    },

    title: {
        fontSize: 24,
        fontWeight: '600',
    },

    subtitle: {
        fontSize: 18,
        fontWeight: '500',
    },

    body: {
        fontSize: 16,
        fontFamily: 'F5.6-Regular',
    },

    caption: {
        fontSize: 12,
        fontWeight: '400',
    },
} satisfies Record<TypographyVariant, TextStyle>);

const Typography = ({
    children,
    variant,
    style,
    ...props
}: TypographyProps) => {
    const { colors } = useTheme();

    return (
        <Text
            {...props}
            style={[typographyStyles[variant], { color: colors.text }, style]}
        >
            {children}
        </Text>
    );
};

export default Typography;
