import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

import { upload } from '../../../services/AzureService';

import styles from './styles';

const dirs = RNFetchBlob.fs.dirs;

export default class Home extends Component {
  state = {};

  componentDidMount() {
    const fs = RNFetchBlob.fs;
    fs.createFile(`${dirs.DocumentDir}/lala.txt`, 'foo', 'utf8').then(() => {
      RNFetchBlob.fs.lstat(dirs.DocumentDir).then(stats => {
        this.setState({ stats });
        upload(stats[0].path).then(() => {
          Alert.alert('upload');
        });
      });
    });
  }

  render() {
    if (this.state.stats) {
      return (
        <View style={styles.container}>
          {this.state.stats.map(st =>
            <Text key={st.filename}>
              {st.path}
            </Text>
          )}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.mainButton}>
          {dirs.DocumentDir}
        </Text>
        <Text style={styles.mainButton}>
          {dirs.CacheDir}
        </Text>
        <Text style={styles.mainButton}>
          {dirs.DCIMDir}
        </Text>
        <Text style={styles.mainButton}>
          {dirs.DownloadDir}
        </Text>
      </View>
    );
  }
}
