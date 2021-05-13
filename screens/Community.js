import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
//import { Card } from 'react-native-paper';
//import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
//import products from '../constants/products.js';
//import * as SMS from 'expo-sms';
//import MyHeader from '../components/MyHeader';

import { Header, Icon, Badge } from 'react-native-elements';
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1B2E0F' }}>
        <Header
          centerComponent={{
            text: 'GreenPin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />
        <Text style={{color:'white', marginTop:10, fontSize:22}}>
          Community News and Updates
        </Text>
        <ScrollView>
          <TouchableOpacity>
            <Card
              style={{
                padding: 10,
                marginTop: -30,
                backgroundColor: '#1B2E0F',
                color: '#82152b',
              }}
              isDark>
              <CardImage
                style={{ fontSize: 20, color: 'red', marginTop: 40 }}
                source={require('../assets/plant.jpg')}
              />
            </Card>
          </TouchableOpacity>
          <Text style={{color:'white', marginTop:20, fontSize:22}}>
          Top Performers
        </Text>
          <View style={styles.modalBackButton}>
              <View style={{ marginRight:30, marginTop:10}}>
              <Image
                source={require('../assets/profile1.jpeg')}
                  fadeDuration={0}
                  style={{ width: 83, height: 83, marginRight:30, marginTop:10 }}
              />
              </View>
              <View style={{ flex:1,marginRight:-10, marginTop:-90, justifyContent:'center', alignItems:'center'}}> 
              <Image
                source={require('../assets/profile2.png')} 
                  fadeDuration={0}
                  style={{ width: 80, height: 80, marginRight:15, marginTop:10 }}
              />
              </View>
              <View style={{ flex:1,marginRight:-35, marginTop:-90, justifyContent:'flex-end', alignItems:'flex-end'}}>
              <Image 
                source={require('../assets/profile3.jpeg')}
                  fadeDuration={0}
                  style={{ width: 80, height: 80, marginRight:40, marginTop:10 }}
              />
              </View>
              </View>
              <Text style={{color:'white', marginTop:20, fontSize:22}}>
          Top Communities
        </Text>
          
          <View style={styles.modalBackButton}>
              <View style={{ flex:1,marginRight:30, marginTop:0}}>
              <Image
                source={require('../assets/community2.jpeg')}
                  fadeDuration={0}
                  style={{ width: 83, height: 83, marginRight:30, marginTop:10 }}
              />
              </View>
              <View style={{flex:1, marginRight:-10, marginTop:-90, justifyContent:'center', alignItems:'center'}}> 
              <Image
                source={require('../assets/community2.png')} 
                  fadeDuration={0}
                  style={{ width: 80, height: 80, marginRight:15, marginTop:10 }}
              />
              </View>
              <View style={{ flex:1,marginRight:-35, marginTop:-90, justifyContent:'flex-end', alignItems:'flex-end'}}>
              <Image 
                source={require('../assets/community.png')}
                  fadeDuration={0}
                  style={{ width: 80, height: 80, marginRight:40, marginTop:10 }}
              />
              </View>
              </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 18,
   // fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },

 

  
  
});
