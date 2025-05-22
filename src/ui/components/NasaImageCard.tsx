import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NasaImage } from '../../domain/models/NasaImage';

interface Props {
    image: NasaImage; // Recibe un objeto de imagen NASA
}

const NasaImageCard: React.FC<Props> = ({ image }) => {
    // Extraemos información útil de la imagen
    const { title, description, date_created } = image.data[0];
    const imageUrl = image.links?.[0]?.href; // URL de la imagen

    return (
        <View style={styles.card}>
            {/* Renderiza la imagen si existe */}
            {imageUrl && (
                <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
            )}
            {/* Información textual */}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.date}>{new Date(date_created).toDateString()}</Text>
        </View>
    );
};

// Estilos para la tarjeta de imagen
const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },
    
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
    },
    
    title: {
        color: '#FFD700',
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
    
    description: {
        color: '#fff',
        fontSize: 14,
        marginTop: 4,
    },
    
    date: {
        color: '#aaa',
        fontSize: 12,
        marginTop: 4,
        textAlign: 'right',
    },
});

export default NasaImageCard;