import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Restaurant extends Component {
  render() {
    const username = this.props.username;
    const rid = this.props.rid;
    return (
      <View>
          <Card title={this.props.name}>
          <Text> Hi welcome to {this.props.name} </Text>
          <Text>{this.props.username}</Text>
          <Button title="Get in line!" onPress={() => {this.props.navigation.navigate('MyModal',{ username : username, rid: rid})}}/>
          </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
