import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Dimensions, Image, Button} from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';
import {FlatList} from 'react-native';

const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  const [isEnabled, setIsEnabled] = React.useState(true);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerRight: () => {
        return (
          <Icon
            name="add"
            type="Ionicons"
            style={{marginRight: 10}}
            onPress={() => props.navigation.navigate('AddReminderScreen')}
          />
        );
      },
    });
  }, [props.navigation]);
  const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../assets/bg1.jpg'),
    },

    {
      text: 'Card One',
      name: 'One',
      image: require('../assets/bg2.jpg'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{height: height * 0.05, width: width}}>
        <Text> {item.text} </Text>
      </View>
    );
  };
  return (
    <View style={{height, width, backgroundColor: '#e65c53'}}>
      <View>
        {isEnabled ? (
          <Button
            onPress={() => setIsEnabled(false)}
            title="List View"
            color="#e65c53"
          />
        ) : (
          <Button
            onPress={() => setIsEnabled(true)}
            title="Swipe View"
            color="gray"
          />
        )}
      </View>
      {isEnabled ? (
        <View style={{height: height * 0.2, width, justifyContent: 'center'}}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{elevation: 3}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{height: 300, flex: 1}} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{color: '#ED4A6A'}} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={cards}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
}
