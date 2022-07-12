import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{height:100,width:100,resizeMode:'contain'}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'}}  />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
