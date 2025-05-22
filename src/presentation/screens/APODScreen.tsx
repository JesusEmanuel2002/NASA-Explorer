import React, { useEffect, useState } from 'react'; // Hooks para ciclo de vida y estado
import { View, Text, Image, StyleSheet } from 'react-native'; // Componentes base
import { fetchApodData } from '../../application/usecases/fetchApod'; // Caso de uso de capa Application

const APODScreen = () => {
    const [apodData, setApodData] = useState<any | null>(null); // Estado para almacenar datos APOD
    const [loading, setLoading] = useState<boolean>(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado de error

    useEffect(() => {
        const loadApod = async () => {
            setLoading(true);
            try {
                const data = await fetchApodData(); // Llama al caso de uso (separación de lógica)
                setApodData(data); // Actualiza el estado con los datos
            } catch (err) {
                setError('No se pudo cargar la imagen de APOD'); // Maneja errores
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        loadApod(); // Ejecuta al montar el componente
    }, []);

    if (loading) return <Text style={styles.loadingText}>Cargando...</Text>; // Renderiza mientras carga
    if (error) return <Text style={styles.errorText}>{error}</Text>; // Renderiza si hay error

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{apodData?.title}</Text> {/* Título de la imagen */}
            <Image source={{ uri: apodData?.url }} style={styles.image} /> {/* Imagen del día */}
            <Text style={styles.explanation}>{apodData?.explanation}</Text> {/* Explicación */}
        </View>
    );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    
    title: {
        color: '#FFD700',
        fontSize: 20,
        marginBottom: 10,
    },
    
    image: {
        width: 300,
        height: 300,
        borderRadius: 8,
        marginBottom: 10,
    },
    
    explanation: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    
    loadingText: {
        color: '#FFD700',
        fontSize: 18,
    },
    
    errorText: {
        color: '#FF4500',
        fontSize: 18,
    },
});

export default APODScreen;