import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/minha-perfil.jpg')}
                    style={styles.image}
                />
                <View paddingVertical={10}>
                    <Text style={styles.name}>Charlan</Text>
                    <Text style={styles.username}>@charlanmttr</Text>
                </View>
                <View flexDirection="row">
                    <Text style={styles.number}>400</Text>
                    <Text style={styles.text}>Following</Text>
                    <Text style={[styles.number, { marginLeft: 15 }]}>400</Text>
                    <Text style={styles.text}>Followers</Text>
                </View>
            </View>

            <View style={styles.hr} />
            <DrawerItemList {...props} />
            <View style={styles.hr} />
            
            <DrawerItem
                label="Settings and privacy"
                labelStyle={{ color: '#FFF' }}
            />
            <DrawerItem
                label="Help center"
                labelStyle={{ color: '#FFF' }}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    image: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    username: {
        color: '#6b6b6b',
        fontSize: 12
    },
    number: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    text: {
        color: '#6b6b6b',
        marginLeft: 5,
        fontSize: 12
    },
    hr: {
        borderColor: '#525252',
        borderWidth: 0.2,
        margin: 5
    }
})