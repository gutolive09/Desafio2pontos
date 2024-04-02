import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'

import Home from '../screens/Home';
import Login from '../screens/Login';
import React from 'react';
import Membros from '../screens/Membros';

const {Screen,Navigator} = createBottomTabNavigator();

export function TabRotas(){

    return(
        <Navigator 
            screenOptions={{
                tabBarActiveTintColor:'green',
                
        }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon:()=> <MaterialIcons name="home" size={30}/>
                }}

            />
            <Screen
                name='Login'
                component={Login}
                options={{
                    tabBarIcon:()=> <MaterialIcons name="login" size={30}/>
                }}

            />
            <Screen
                name='Membros'
                component={Membros}
                options={{
                    tabBarIcon:()=> <MaterialIcons name="person" size={30}/>
                }}

            />
        </Navigator>
    )
}