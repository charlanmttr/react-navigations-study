import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Contato() {
    const navigation = useNavigation(); 
    
    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            <Button title="Sobre" onPress={()=> navigation.navigate("Sobre")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
})