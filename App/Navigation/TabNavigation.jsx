import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='search-outline'
            size={size} color={color} />
          )
        }}
        />

        <Tab.Screen
        name='Favourite'
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='heart-outline'
            size={size} color={color} />
          )
        }}
        />

        <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({color, size}) => (
            <Ionicons name='person-circle-outline'
            size={size} color={color} />
          )
        }}
        />
    </Tab.Navigator>
  )
}