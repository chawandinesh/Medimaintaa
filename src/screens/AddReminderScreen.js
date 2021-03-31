import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  Button,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Context, MediMaintaaContext} from '../context/context';
import moment from 'moment';
const {height, width} = Dimensions.get('window');
export default function AddRemainderScreen(props) {
  const {state, setState} = React.useContext(MediMaintaaContext);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState({
    nameOfPill: '',
    pillPerTime: '',
    pillsPerDay: '',
    endDate: '',
    notes: '',
  });
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.route.params ? 'Update Remainder' : 'Add Remainder',
      headerTitleAlign: 'center',
    });
  }, [props.navigation]);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  React.useEffect(() => {
    if (props.route.params) {
      const {idx} = props.route.params;
      console.log(idx, 'idx');
      setFormState(state[idx]);
    }
    // console.log(idx)
  }, [props.navigation]);

  const handleSubmit = () => {
    if(formState.nameOfPill && formState.pillPerTime && formState.pillsPerDay && formState.endDate && formState.notes ){

      setLoading(true);
      setTimeout(() => {
        if (props.route.params) {
          const {idx} = props.route.params;
          state.splice(idx, 1, formState);
          setState(state);
          props.navigation.goBack();
        } else {
          setState([...state, formState]);
          props.navigation.goBack();
        }
        setFormState({
          endDate: '',
          nameOfPill: '',
          notes: '',
          pillPerTime: '',
          pillsPerDay: '',
        });
        setLoading(false);
      }, 2000);
    }else{
      alert('please fill all details')
    }
  };
  const handleConfirm = date => {
    setFormState({
      ...formState,
      endDate: moment(date).format('YYYY-MM-DD'),
    });
    hideDatePicker();
    setDatePickerVisibility(false);
  };

  return (
    <View
      style={{
        backgroundColor: loading ? 'rgba(230, 92, 83, 0.5)' : '#e65c53',
        flex: 1,
      }}>
      {loading ? (
        <View
          style={{
            position: 'absolute',
            top: height * 0.3,
            right: width * 0.15,
            left: width * 0.15,
            zIndex: 2,
            // backgroundColor: 'green',
            height: height * 0.3,
            width: width * 0.7,
          }}>
          <ActivityIndicator size={height * 0.2} color="#000" />
        </View>
      ) : null}
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
            <TextInput
              style={{width: width * 0.7}}
              value={formState.nameOfPill}
              onChangeText={text =>
                setFormState({...formState, nameOfPill: text})
              }
            />
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
            <TextInput
              style={{width: width * 0.7}}
              value={formState.pillPerTime}
              onChangeText={text =>
                setFormState({...formState, pillPerTime: text})
              }
            />
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
            <TextInput
              style={{width: width * 0.7}}
              value={formState.pillsPerDay}
              onChangeText={text =>
                setFormState({...formState, pillsPerDay: text})
              }
            />
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
            <TextInput
              style={{width: width * 0.7}}
              value={formState.endDate}
              editable={false}
              placeholder="Interval between doses"
            />
          </View>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              width: width * 0.23,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="calendar"
              type="entypo"
              color="#fff"
              style={{color: '#fff'}}
            />
          </TouchableOpacity>
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
            <TextInput
              style={{width: width * 0.7}}
              value={formState.notes}
              onChangeText={text => setFormState({...formState, notes: text})}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width * 0.2,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Notes</Text>
            </View>
          </View>
          <View style={{width: width * 0.05, backgroundColor: '#000'}}></View>
        </View>
        <View
          style={{
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
            // flexDirection: 'row',
            // justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              height: height * 0.06,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: height * 0.04,
              borderBottomWidth: 4,
              width: width * 0.4,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#e65c53',
                fontSize: height * 0.03,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
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
