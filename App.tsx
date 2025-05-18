import React from 'react';
import { SafeAreaView } from 'react-native';
import { useMarsPhotosViewModel } from './src/presentation/viewmodels/marsPhotosViewModel';
import MarsPhotoList from './src/ui/components/MarsPhotoList';

const App = () => {
  const { photos, loading, error } = useMarsPhotosViewModel(1000, 'curiosity');
    return (
    <SafeAreaView>
      <MarsPhotoList photos={photos} loading={loading} error={error}/>
      </SafeAreaView>
      );
};

export default App;