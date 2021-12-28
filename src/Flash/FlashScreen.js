import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const navigation = useNavigation();

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }, [fadeAnim])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("OnBoardScreen")

        }, 5000);
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (

        <FadeInView style={{ width: "100%", height: "100%", backgroundColor: 'powderblue' }}>
            <ImageBackground style={{ width: "100%", height: "100%", resizwMode: "stretch" }} source={require('../Images/image3.jpg')} />
        </FadeInView>

    )
}