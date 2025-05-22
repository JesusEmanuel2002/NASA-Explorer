import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useMarsPhotosViewModel } from '../../presentation/viewmodels/marsPhotosViewModel'; // Hook ViewModel
import MarsPhotoList from '../../ui/components/MarsPhotoList'; // Componente de lista de fotos

const MarsPhotosScreen = () => {
    const { photos, loading, error } = useMarsPhotosViewModel(1000, 'curiosity', 1); // Hook que encapsula la lógica de negocio

    return (
        <SafeAreaView style={styles.container}>
            <MarsPhotoList
                photos={photos} // Propiedad con fotos de Marte
                loading={loading} // Muestra loading si aplica
                error={error} // Muestra mensaje de error si ocurre
                loadMore={() => {}} // Placeholder para paginación
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d1d', // Fondo oscuro para modo noche
    },
});

export default MarsPhotosScreen;