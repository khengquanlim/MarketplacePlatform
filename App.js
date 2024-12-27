import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeExploreScreen from './screens/HomeExploreScreen';
import MeProfileScreen from './screens/MeProfileScreen';
import ExploreHeader from './components/Header/ExploreHeader'; // Import header

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Me') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: route.name === 'Explore', // Show custom header only for Explore
          header: () => (route.name === 'Explore' ? <ExploreHeader /> : null),
        })}
      >
        <Tab.Screen name="Explore" component={HomeExploreScreen} />
        <Tab.Screen name="Me" component={MeProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
