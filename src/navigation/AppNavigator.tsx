import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Crea una pila de navegación
import { NavigationContainer } from '@react-navigation/native'; // Contenedor de navegación principal
import { APODSScreen, MarsPhotosScreen } from '../presentation/screens'; // Importa pantallas registradas
import { Easing } from 'react-native-reanimated'; // Importa Easing para animaciones personalizadas

const Stack = createStackNavigator(); // Inicializa el stack navigator

const AppNavigator = () => {
  return (
    <NavigationContainer> {/* Componente raíz para navegación */}
      <Stack.Navigator
        initialRouteName="Home" // Define la pantalla inicial
        screenOptions={{
          gestureEnabled: true, // Habilita gestos de navegación
          gestureDirection: 'horizontal', // Define la dirección de gesto
          transitionSpec: { // Configura las animaciones de transición
            open: {
              animation: 'timing',
              config: {
                duration: 500,
                easing: Easing.out(Easing.exp), // Easing de apertura
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
                easing: Easing.in(Easing.exp), // Easing de cierre
              },
            },
          },
        }}
      >
        {/* Pantallas disponibles en el stack */}
        <Stack.Screen name="APOD" component={APODSScreen} />
        <Stack.Screen name="MarsPhotos" component={MarsPhotosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;