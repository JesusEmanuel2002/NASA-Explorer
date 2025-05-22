# 🚀 NASA Explorer

**NASA Explorer** es una aplicación móvil y web desarrollada con **React Native + Expo** que consume datos de múltiples APIs públicas de la NASA. 
Esta aplicación ha sido construida bajo una arquitectura profesional utilizando **CLEAN Architecture**, **MVVM**, principios **SOLID**, 
y patrones de diseño como **Observer**, **Strategy** y **Factory**. Se aplicaron buenas prácticas de desarrollo como **DRY**, **KISS** y **YAGNI**.

---

## 🌌 Funcionalidades principales

- 📡 Consumo de al menos **5 APIs públicas** de la NASA.
- ⚙️ Aplicación modular con arquitectura **CLEAN + MVVM**.
- 🧠 Manejo de estado global con **Redux Toolkit**.
- 🧳 Soporte para **modo offline** usando `AsyncStorage`.
- 🧭 Navegación avanzada con Stack, Drawer y Bottom Tabs personalizados.
- 🎞️ Animaciones avanzadas con **Reanimated 3**.
- 📝 Formularios complejos y validados usando **React Hook Form** y **Formik**.
- 🔄 Paginación progresiva si la API lo permite.
- 🧱 Aplicación de patrones de diseño: **Strategy**, **Observer** y **Factory**.

---

## 🛠️ Tecnologías utilizadas

- **React Native** `0.79.2`
- **Expo** `53.0.7`
- **TypeScript**
- **Redux Toolkit**
- **React Navigation** (Stack, Drawer, BottomTabs)
- **Axios**
- **AsyncStorage**
- **Reanimated 3**
- **React Hook Form** / **Formik**
- **Yup**

---

## 🧪 Dependencias principales

```json
"dependencies": {
  "@react-navigation/bottom-tabs": "^7.3.13",
  "@react-navigation/drawer": "^7.3.12",
  "@react-navigation/native": "^7.1.9",
  "@react-navigation/native-stack": "^7.3.13",
  "@react-navigation/stack": "^7.3.2",
  "@reduxjs/toolkit": "^2.8.2",
  "axios": "^1.9.0",
  "expo": "~53.0.7",
  "expo-status-bar": "~2.2.3",
  "formik": "^2.4.6",
  "react": "19.0.0",
  "react-hook-form": "^7.56.3",
  "react-native": "0.79.2",
  "react-native-dotenv": "^3.4.11",
  "react-native-safe-area-context": "5.4.0",
  "react-native-screens": "~4.10.0",
  "react-native-svg": "15.11.2",
  "react-redux": "^9.2.0",
  "yup": "^1.6.1"
},
"devDependencies": {
  "@babel/core": "^7.25.2",
  "@types/react": "~19.0.10",
  "typescript": "~5.8.3"
},
"private": true
