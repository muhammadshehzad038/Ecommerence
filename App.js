import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './Navigation/StackNavigation';
import { Provider } from 'react-redux';
import Store from './Store';
import { ModalPortal } from 'react-native-modals';
import { UserContext } from './UserContext';

export default function App() {
  return (
   <>
   <Provider store={Store}>
    <UserContext>
   <StackNavigation/>
   <ModalPortal/>
   </UserContext>
   </Provider>
   </>
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
