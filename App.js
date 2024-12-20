import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { CartProvider } from './src/pages/Cart/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#1E90FF" barStyle="light-content" />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}
