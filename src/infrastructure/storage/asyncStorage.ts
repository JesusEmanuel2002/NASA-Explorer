import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para guardar datos localmente en formato JSON
export const storeData = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);  // Convertimos el valor a JSON
        await AsyncStorage.setItem(key, jsonValue);  // Lo almacenamos bajo la clave indicada
    } catch (e) {
        console.error('Error storing data', e);  // Manejamos errores en consola
    }
};

// Función para recuperar datos almacenados localmente
export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);  // Obtenemos el valor desde AsyncStorage
        return jsonValue != null ? JSON.parse(jsonValue) : null;  // Parseamos si existe
    } catch (e) {
        console.error('Error retrieving data', e);
    }
};