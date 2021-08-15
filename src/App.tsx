import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './screens/Home';
import BottomTabBar from './components/BottomTabBar';
import { CategoryProvider } from './context/CategoryContext';

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <CategoryProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Home />
        </SafeAreaView>
        <BottomTabBar />
      </QueryClientProvider>
    </CategoryProvider>
  );
};

export default App;
