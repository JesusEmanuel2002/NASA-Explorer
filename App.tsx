import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useMarsPhotosViewModel } from './src/presentation/viewmodels/marsPhotosViewModel';
import MarsPhotoList from './src/ui/components/MarsPhotoList';

const App = () => {
  const { photos, loading, error } = useMarsPhotosViewModel(1000, 'curiosity');
  return (
  <SafeAreaView style={styles.container}>
    <MarsPhotoList photos={photos} loading={loading} error={error}
    loadMore={() => {}} />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d', // Fondo oscuro como el espacio
  },
});

export default App;