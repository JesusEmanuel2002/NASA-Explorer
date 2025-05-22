import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { useMarsPhotosViewModel } from './src/presentation/viewmodels/marsPhotosViewModel';
import MarsPhotoList from './src/ui/components/MarsPhotoList';
import { ThemeProvider, useThemeContext } from '@contexts/ThemeContext'; // Contexto de tema

// Componente principal de UI
const MainApp = ({ photos, loading, error, loadMore }: any) => {
  const { theme, toggleTheme } = useThemeContext(); // Usa el contexto de tema
  const isDarkMode = theme === 'dark';

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000' }]}>
        Mars Photos
      </Text>
      <Button title="Cambiar Tema" onPress={toggleTheme} />
      <MarsPhotoList
        photos={photos}
        loading={loading}
        error={error}
        loadMore={loadMore}
      />
    </SafeAreaView>
  );
};

// Envoltura del provider con el ViewModel
const App = () => {
  const { photos, loading, error, loadMore } = useMarsPhotosViewModel(1000, 'curiosity');

  return (
    <ThemeProvider>
      <MainApp
        photos={photos}
        loading={loading}
        error={error}
        loadMore={loadMore}
      />
    </ThemeProvider>
  );
};

// Estilos globales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  
  lightMode: {
    backgroundColor: '#FFFFFF',
  },
  
  darkMode: {
    backgroundColor: '#1d1d1d',
  },
  
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default App;