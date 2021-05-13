import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';


import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const { width } = Dimensions.get('screen');

import { Header, Icon, Badge } from 'react-native-elements';


export default class NotificationScreen extends React.Component {


  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#1B2E0F',
          marginTop: 50,
        }}>
          <ScrollView>
            

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              For Partners
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Community Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Market Place
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Report Tree Cuttting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              FAQ
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginBottom:40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
 
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
 

});
