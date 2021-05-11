import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import testVid from '-!file-loader!../../../testVid.mp4';

class BackgroundVideo extends Component {
  render() {
    const { color, text } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Its up</Text>
        <Text style={styles.text}>Mobile component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
	  color: 'red',
	  fontSize: 20
  },
  wrapper: {
    height: 300,
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderColor: 'red',
    borderWidth: '100%',
  },
});

export default BackgroundVideo;
