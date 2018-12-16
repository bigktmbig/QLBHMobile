import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Header from '../../components/common/Header';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
    <Header />
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#100000',
    },
    calendar: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
  });

  export default CalendarScreen;
