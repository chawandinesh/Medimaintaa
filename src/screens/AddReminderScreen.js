import React from 'react';
import {View, Text, TextInput, ImageBackground, Dimensions, Button} from 'react-native';
// import {DatePicker} from 'native-base'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {height, width} = Dimensions.get('window');
export default function AddRemainderScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View style={{backgroundColor: '#e65c53', flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: height * 0.07,
              // alignSelf: 'center',
              width: width * 0.7,
              borderBottomLeftRadius: height * 0.03,
              borderBottomWidth: 5,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput style={{width: width * 0.7}} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.2,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Name of pill
              </Text>
            </View>
          </View>
          <View style={{width: width * 0.05, backgroundColor: '#000'}}></View>
        </View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: height * 0.07,
              // alignSelf: 'center',
              width: width * 0.7,
              borderBottomLeftRadius: height * 0.03,
              borderBottomWidth: 5,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput style={{width: width * 0.7}} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.2,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                pill per time
              </Text>
            </View>
          </View>
          <View style={{width: width * 0.05, backgroundColor: '#000'}}></View>
        </View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: height * 0.07,
              // alignSelf: 'center',
              width: width * 0.7,
              borderBottomLeftRadius: height * 0.03,
              borderBottomWidth: 5,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput style={{width: width * 0.7}} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.2,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                pills per day
              </Text>
            </View>
          </View>
          <View style={{width: width * 0.05, backgroundColor: '#000'}}></View>
        </View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: height * 0.07,
              // alignSelf: 'center',
              width: width * 0.7,
              borderBottomLeftRadius: height * 0.03,
              borderBottomWidth: 5,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <TextInput style={{width: width * 0.7}} /> */}
            <Button title="Show Date Picker" onPress={showDatePicker} />
           
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.2,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Name of pill
              </Text>
            </View>
          </View>
          <View style={{width: width * 0.05, backgroundColor: '#000'}}></View>
        </View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: height * 0.07,
              // alignSelf: 'center',
              width: width * 0.7,
              borderBottomLeftRadius: height * 0.03,
              borderBottomWidth: 5,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput style={{width: width * 0.7}} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.2,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Name of pill
              </Text>
            </View>
          </View>
          <View style={{width: width * 0.05, backgroundColor: '#000'}}></View>
        </View>
        <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
      </KeyboardAwareScrollView>
    </View>
  );
}
