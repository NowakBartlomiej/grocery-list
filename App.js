import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyNavigation from './src/navigation/MyNavigation';

// Popup Menu Provider
import { MenuProvider } from 'react-native-popup-menu';

// NativeBase Provider
import { NativeBaseProvider } from 'native-base'

// Context API
import { ContextProvider } from './src/contexts/ContextProvider';

export default function App() {
  return (
    <ContextProvider>
      <MenuProvider>
        <NativeBaseProvider>
            <MyNavigation/>
        </NativeBaseProvider> 
      </MenuProvider>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
