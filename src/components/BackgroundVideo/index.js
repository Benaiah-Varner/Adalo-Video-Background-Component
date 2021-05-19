import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import ReactPlayer from 'react-player';
import axiosWithAuth from '../../utilities/axiosWithAuth';
import Youtube from 'react-native-youtube';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class BackgroundVideo extends Component {
  state = {
    url: [],
    dimensions: {
      window,
      screen,
    },
  };

  onChange = ({ window, screen }) => {
    this.setState({ ...this.state, dimensions: { window, screen } });
    console.log('dimensions ', this.state.dimensions);
  };

  componentDidMount() {
    axiosWithAuth()
      .get()
      .then((res) => {
        this.setState({
          ...this.state,
          url: res.data.records,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    Dimensions.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onChange);
  }

  handlePress() {
    console.log('test button pressed');
  }

  render() {
    const { color, text } = this.props;
    const { dimensions } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Youtube
            url={this.state.url[this.state.url.length - 1]?.Name}
            playing={true}
            loop={true}
            muted={true}
            width={dimensions.window.width}
            height={dimensions.window.height}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: -1,
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={this.handlePress} title="Sign Up" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  buttonWrapper: {
    width: '25%',
    flex: 1,
    justifyContent: 'center',
    marginLeft: '38%',
    marginTop: '50%',
  },
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default BackgroundVideo;
