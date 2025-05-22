import React, { useState } from 'react';
import { FlatList, Text, View, Image, Button, StyleSheet, Modal, Pressable } from 'react-native';
import { MarsPhoto } from '../../domain/models/MarsPhoto';

// Props del componente: fotos, estado de carga, errores y función para cargar más
interface Props {
  photos: MarsPhoto[];
  loading: boolean;
  error: string | null;
  loadMore: () => void;
}

const MarsPhotoList: React.FC<Props> = ({ photos, loading, error, loadMore }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto | null>(null); // Foto seleccionada para mostrar en modal

  // Mostrar mensaje de carga
  if (loading) return <Text>Cargando...</Text>;

  // Mostrar mensaje de error
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      {/* Lista de fotos */}
      <FlatList
        data={photos} // Datos recibidos
        keyExtractor={(item) => item.id.toString()} // Clave única por cada foto
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelectedPhoto(item)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.img_src }} style={styles.image} />
              <Text style={styles.roverName}>{item.rover.name}</Text>
              <Text style={styles.earthDate}>{item.earth_date}</Text>
            </View>
          </Pressable>
        )}
      />

      {/* Botón para cargar más fotos */}
      <Button title="Cargar más fotos" onPress={loadMore} color="#FF7F50" />

      {/* Modal para mostrar imagen completa */}
      <Modal visible={!!selectedPhoto} transparent>
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setSelectedPhoto(null)}>
            <Image source={{ uri: selectedPhoto?.img_src }} style={styles.fullImage} />
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

// Estilos para la vista
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    paddingTop: 20,
  },
  
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#B87333',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FF4500',
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
    color: '#FFD700',
    fontSize: 14,
    textAlign: 'center',
  },
  
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000dd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  fullImage: {
    width: 350,
    height: 350,
  },
});

export default MarsPhotoList;