import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AntDesign  } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

import Home from './src/views/Home'
import Contato from './src/views/Contato'
import Sobre from './src/views/Sobre'
import CustomDrawer from './src/components/CustomDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        drawerStyle={{
          backgroundColor: '#000',
          width: 310,
        }}
        drawerContentOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: '#FFF',
          labelStyle: {
            padding: 0,
            margin: 0
          }
        }}
      >
        <Drawer.Screen name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <AntDesign
                name="home"
                color="#6b6b6b"
                size={20}
              />
            )
          }} />
        <Drawer.Screen name="Contato" component={Contato}  options={{
            drawerIcon: () => (
              <AntDesign
                name="contacts"
                color="#6b6b6b"
                size={20}
              />
            )
          }}/>
        <Drawer.Screen name="Sobre" component={Sobre} options={{
            drawerIcon: () => (
              <AntDesign
                name="infocirlceo"
                color="#6b6b6b"
                size={20}
              />
            )
          }}/>
      </Drawer.Navigator>
    </NavigationContainer >
  )
}

