import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyNavigation from './src/navigation/MyNavigation';

// Context API
import { ContextProvider } from './src/contexts/ContextProvider';

export default function App() {
  return (
    <ContextProvider>
      <MyNavigation/>
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
