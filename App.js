import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: "a"},
        { key: "b"},
        { key: "c"},
        { key: "d"},
        { key: "e"},
        { key: "f"},
        { key: "g"},
        { key: "HHHHHH"},
        { key: "u"},
        { key: "a longer example"},
        { key: "a"},
      ]
    }
  }

  _renderItem = data=> {
    return <Text style={styles.row}>{data.item.key}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  row: { fontSize:24, padding:42, borderWidth:1, borderColor: "#112233"}
});
