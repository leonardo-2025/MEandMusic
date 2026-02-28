import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        {isReady ? <AppNavigator /> : <SplashScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
