import React from "react";
import { View, Text, StyleSheet} from 'react-native'

const RowText = (props) => {
    const {
        messageOne, 
        messageTwo, 
        messageOneStyles ,
        messageTwoStyles
    } = props
    return (            
    <View >
        <Text style={messageOneStyles}>{messageOne}</Text>
        <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>)
} 



export default RowText
