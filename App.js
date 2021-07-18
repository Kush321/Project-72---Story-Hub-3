import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReadScreen from './screens/readScreen';
import CreateScreen from './screens/createScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const switchNavigator = createBottomTabNavigator({ 
  Create: { screen: CreateScreen },
  Read: { screen: ReadScreen },
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () => {
      const routeName = navigation.state.routeName;
      if (routeName === "Create") {
        return (
          <Image source={require('./write.png')}
            style={{
              width: 30,
              height: 30
            }} />
        );
      }
      else if (routeName === "Read") {
        return (
          <Image source={require('./read.png')}
            style={{
              width: 30,
              height: 30
            }} />
        );
      }
    }
  })
}) 

const AppContainer = createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff'
  },
});
