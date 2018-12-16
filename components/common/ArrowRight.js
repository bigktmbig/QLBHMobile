import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const stylesArrowRight = StyleSheet.create({
  arrowTouch: {
    padding: 10,
  },
});

export default class ArrowRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementId: "arrow_right",
    };
  }

  render() {
    return (
      <TouchableOpacity
        style     = { stylesArrowRight.arrowTouch }
        hitSlop   = {{ left: 20, right: 20, top: 20, bottom: 20 }}
        elementId = { this.state.titleText }
      >
        <Image
          source  = { require('../../asserts/icons/next.png') }
        />
      </TouchableOpacity>
    );
  }
};