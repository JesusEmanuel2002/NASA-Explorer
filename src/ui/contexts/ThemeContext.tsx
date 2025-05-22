import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { fetchEpicData } from '../../application/usecases/fetchEpic';
import { fetchSolarStorms } from '../../application/usecases/fetchEonet';

// Interfaz del contexto de tema
interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Contexto inicial
export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

// Proveedor del contexto de tema
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Estado del tema
  const [loading, setLoading] = useState<boolean>(true);         // Estado de carga

  // Alternar entre temas claro y oscuro
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Lógica para definir el tema inicial
    const evaluateTheme = async () => {
      try {
        const epicData = await fetchEpicData(); // Carga datos del satélite EPIC
        const imageName = epicData[0]?.image || '';
        
        // Si el nombre de la imagen incluye "night", activar modo oscuro
        const isNight = imageName.toLowerCase().includes('night');
        if (isNight) {
          setTheme('dark');
          return;
        }

        // Si no es de noche, revisar si hay tormentas solares recientes
        const solarStorms = await fetchSolarStorms();
        if (solarStorms.length > 0) {
          setTheme('dark'); // Tormenta solar => activar modo oscuro
        } else {
          setTheme('light');
        }
      } catch (err) {
        console.log('Error evaluating theme:', err);
        setTheme('light'); // En caso de error, usar modo claro por defecto
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    evaluateTheme();
  }, []);

  // Mientras carga, no renderiza nada (puedes agregar un spinner)
  if (loading) {
    return <></>;
  }

  // Proveedor del contexto con el estado del tema y la función de toggle
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useThemeContext = () => React.useContext(ThemeContext);