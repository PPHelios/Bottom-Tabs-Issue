import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import {useFocusEffect} from '@react-navigation/native';
const Home = () => {
  const onFocusEffect = React.useCallback(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(onFocusEffect);
  return (
    <ScrollView>
      <Text>Home</Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1,width:"90%"}}/>
    </ScrollView>
  )
}

export default Home