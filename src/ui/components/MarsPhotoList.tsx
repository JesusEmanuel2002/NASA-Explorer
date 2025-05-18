import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { MarsPhoto } from '../../domain/models/MarsPhoto';

interface Props {
    photos: MarsPhoto[];
    loading: boolean;
    error: string | null;
}

const MarsPhotoList: React.FC<Props> = ({ photos, loading, error }) => {
    if (loading) return <Text>Cargando...</Text>;
    if (error) return <Text>{error}</Text>;
    return (
    <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View>
            <Image source={{ uri: item.img_src }} style={{ width: 300, height: 300 }} />
            <Text>{item.rover.name}</Text>
            <Text>{item.earth_date}</Text>
        </View>
            )}
    />
    );
};

export default MarsPhotoList;