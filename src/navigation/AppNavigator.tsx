import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps, BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useTheme } from '../theme';

type GlassTabBarProps = BottomTabBarProps;

const GlassTabBar: React.FC<GlassTabBarProps> = (props) => {
  const { theme } = useTheme();
  return (
    <View style={styles.tabWrapper}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType={theme.name === 'dark' ? 'dark' : 'light'}
        blurAmount={20}
        reducedTransparencyFallbackColor={theme.colors.surface}
      >
        <BottomTabBar {...props} />
      </BlurView>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const iconMap: Record<string, string> = {
    Home: 'home',
    Search: 'search',
    Library: 'library',
    Profile: 'person',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={iconMap[route.name]} color={color} size={size} />
        ),
        headerShown: false,
        tabBarShowLabel: false,
      })}
      tabBar={(props) => <GlassTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    elevation: 8,
    alignItems: 'center',
  },
});
