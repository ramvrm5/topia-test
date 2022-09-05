import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height" }
        keyboardVerticalOffset={Platform.OS === 'ios'? -64:0}
        style={{flex: 1}}
        >
        <HomeScreen />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
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
