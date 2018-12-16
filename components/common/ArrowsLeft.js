import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const stylesArrowLeft = StyleSheet.create({
  arrowTouch: {
    padding: 10,
  },
});

export default class ArrowsLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementId: "arrow_left",
    };
  }

  render() {
    return (
      <TouchableOpacity
        style     = { stylesArrowLeft.arrowTouch }
        hitSlop   = {{ left: 20, right: 20, top: 20, bottom: 20 }}
        elementId = { this.state.titleText }
      >
        <Image
          source  = { require('../../asserts/icons/previous.png') }
        />
      </TouchableOpacity>
    );
  }
};