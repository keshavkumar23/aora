import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className="w-full h-12 px-4 bg-black-100 border-2 border-black-200 focus:border-secondary-200 items-center rounded-lg flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base w-full"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChange={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                {
                    title === "Password" && (
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Image 
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            resizeMode='contain'
                            className="h-6 w-6"
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default FormField