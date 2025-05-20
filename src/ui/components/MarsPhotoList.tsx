import React from 'react';
import { FlatList, Text, View, Image, Button, StyleSheet } from 'react-native';
import { MarsPhoto } from '../../domain/models/MarsPhoto';

interface Props {
    photos: MarsPhoto[];
    loading: boolean;
    error: string | null;
    loadMore: () => void;
}

const MarsPhotoList: React.FC<Props> = ({ photos, loading, error, loadMore }) => {
    if (loading) return <Text>Cargando...</Text>;
    if (error) return <Text>{error}</Text>;
    return (
    <View style={styles.container}>
        <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.img_src }}
            style={styles.image}/>
            <Text style={styles.roverName}>{item.rover.name}</Text>
            <Text style={styles.earthDate}>{item.earth_date}</Text>
        </View>
        )}
        />
        <Button title="Cargar más fotos" onPress={loadMore} color="#FF7F50"/> 
        {/* Color relacionado con Marte */}
    </View>
    );
};

// Estilos con colores inspirados en el sistema solar
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d1d', // Fondo oscuro como el espacio
        // paddingTop: 20,
    },
    
    itemContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#B87333', // Color similar al de Marte
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#FF4500', // Color cálido inspirado en Marte
    },

    image: {
        width: 300,
        height: 300,
        borderRadius: 8,
    },
 
    roverName: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
 
    earthDate: {
        color: '#FFD700', // Color dorado, inspirado en el sol
        fontSize: 14,
        textAlign: 'center',
    },
});

export default MarsPhotoList;