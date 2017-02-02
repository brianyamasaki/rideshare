import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FullScreen extends Component {
  renderSubTitle() {
    if (this.props.subTitle) {
      return (
        <View style={styles.subtitleViewStyle}>
          <Text style={styles.textSubtitleStyleDft}>
            {this.props.subTitle}
          </Text>
        </View>
      );
    }
  }

  render() {
    const { containerStyleDft, textStyleDft } = styles;
    const { style } = this.props;

    return (
      <View style={[containerStyleDft, style]}>
        <Text style={textStyleDft}>
          {this.props.title}
        </Text>
        {this.renderSubTitle()}
      </View>
    );
  }
}

const styles = {
  containerStyleDft: {
    flex: 1,
    justifyContent: 'center'
  },
  textStyleDft: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#666'
  },
  subtitleViewStyle: {
    paddingTop: 10
  },
  textSubtitleStyleDft: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#888'
  }
};

export { FullScreen };
