import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ArrowsLeft from './ArrowsLeft';
import ArrowRight from './ArrowRight';

const stylesArrowRight = StyleSheet.create({
  arrowTouch: {
    padding: 10,
  },
});

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "2018/11",
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}>
          <ArrowsLeft/>
        </View>
        <View style={{ width: 150, height: 50, backgroundColor: 'skyblue' }} >
          <Text>
            { this.state.titleText }
          </Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}>
          <ArrowRight />
        </View>
      </View>
    );
  }
};