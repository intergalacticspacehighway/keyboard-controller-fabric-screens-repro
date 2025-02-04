import { View, Text, TextInput } from "react-native";
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import {
    useReanimatedKeyboardAnimation,
  } from 'react-native-keyboard-controller'

export default function KeyboardTest() {
    const { height } = useReanimatedKeyboardAnimation()
    useAnimatedStyle(() => {
        console.log('height', height.value)
        return {
            transform: [{ translateY: height.value / 2 }],
        }
    })

  return (
    <View>
        <TextInput
            style={{
                backgroundColor: 'grey',
                borderWidth: 1,
                height: 64,
                marginTop: 100
            }}
            keyboardType="phone-pad"
            placeholder="Phone number"
            textContentType="telephoneNumber"
            placeholderTextColor="#888"
            keyboardAppearance="dark"
            cursorColor="#fff"
            clearButtonMode="while-editing"
        />
    </View>
  );
}