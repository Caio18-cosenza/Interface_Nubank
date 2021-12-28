import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import { style } from './style';

export default function Main() {
  return (
    <SafeAreaView style={style.Container}>
      <Header />
      <View style={style.Content}>
        <Menu />
        <View style={style.Card}>
          <View style={style.CardHeader}>
            <MaterialIcons name='attach-money' size={28} color='#666' />
            <MaterialIcons name='visibility-off' size={28} color='#666' />
          </View>
          <View style={style.CardContent}>
            <Text style={style.Title}> Saldo disponível </Text>
            <Text style={style.Description}> R$ 200.500,58 </Text>
          </View>
          <View style={style.CardFooter}>
            <Text style={style.Annotation}>
              {' '}
              Trasferência de R$ 20,00 recebida de Icode Mobile hoje às 06:00h{' '}
            </Text>
          </View>
        </View>
      </View>
      <Tabs />
    </SafeAreaView>
  );
}
