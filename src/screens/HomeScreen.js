import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
    });
  }, [props.navigation]);
  return (
    <View style={{height, width, backgroundColor: '#e65c53'}}>
      <View
        style={{
          width,
          height: height * 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: height * 0.05, fontWeight: 'bold', color: '#fff'}}>
          MEDIMAINTAA
        </Text>
      </View>
      <View style={{width, height: height * 0.4, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('RemaindersList')}
          style={{
            height: height * 0.06,
            width: width * 0.5,
            alignItems: 'center',
            borderRadius: 5,
            borderBottomWidth: 3,
            borderWidth: 1,
            marginBottom: height * 0.03,
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: '500',
              color: '#e65c53',
            }}>
            Remainders list
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: height * 0.06,
            width: width * 0.5,
            alignItems: 'center',
            borderRadius: 5,
            borderBottomWidth: 3,
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: '500',
              color: '#e65c53',
            }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
