/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Dimensions, StatusBar, View, useWindowDimensions} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/Home';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const {height, width} = useWindowDimensions();
  const [screenHeight, setScreenHeight] = useState(height);
  useEffect(() => {
    const extras =
      Dimensions.get('screen').height - Dimensions.get('window').height;
    let newHeight =
      Dimensions.get('screen').height - extras - (StatusBar.currentHeight || 0);
    // console.log({newHeight});
    if (Dimensions.get('screen').height !== Dimensions.get('window').height) {
      newHeight = Dimensions.get('screen').height - extras;
    }
    if (newHeight !== screenHeight) {
      setScreenHeight(newHeight);
    }
  }, [width, height]);
  return (
    <NavigationContainer>
      {/* <View style={{height: screenHeight, width}}> */}
        <Tab.Navigator
          screenOptions={{
            tabBarHideOnKeyboard: true,
            // tabBarStyle: { position: 'absolute', borderRadius: 30,marginBottom:20}
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}

export default App;
