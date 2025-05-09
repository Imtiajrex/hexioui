import { Text, View, StyleSheet } from 'react-native';
import { multiply } from '@hexio/ui';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl font-bold text-center">Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
