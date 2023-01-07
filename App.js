import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
     <FaBars style={styles.menuIcon} size={32} />
      <Text style={styles.title}>My App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

