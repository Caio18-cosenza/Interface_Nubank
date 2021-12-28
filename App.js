import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/main';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#8b10ae' />
      <Main />
    </>
  );
}
