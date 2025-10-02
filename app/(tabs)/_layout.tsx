import { Tabs } from 'expo-router'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

const TabIcon = () => {
  return (
    <ImageBackground
       className='w-7 h-7'
        source={require('@/assets/icons/home.png')}
    />
  )
}

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
        name="index" 
         options={{
           headerShown: false, 
           title: 'Home',
           tabBarIcon : ({focused}) => 
            <TabIcon />
           }} />
        <Tabs.Screen name="addEvent" options={{ headerShown: false, title: 'Add'}} />
        <Tabs.Screen name="profile" options={{ headerShown: false, title: 'Profile'}} />
    </Tabs>
  )
}

export default _layout
 
const styles = StyleSheet.create({})