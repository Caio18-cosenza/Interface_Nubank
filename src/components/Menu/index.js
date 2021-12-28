import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import QRCode from 'react-native-qrcode';

import { style } from './style';

export default function Menu() {
  return (
    <ScrollView contentContainerStyle={style.Container}>
      <View style={style.Code}>
        <QRCode
          value='https://rocketseat.com.br'
          size={80}
          bgColor='#fff'
          fgColor='#8610ae'
        />
      </View>
    </ScrollView>
  );
}
