import { View, Text, SafeAreaView, Button, Pressable } from 'react-native'
import React from 'react'
import Styles from './Styles';

export default function LoginScreen() {
  return (
   
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.heading}> LoginScreen1</Text>
      {/*   <Button style={Styles.buttonLogIn} title="Submit" /> */}
        <Pressable style={Styles.buttonLogIn}>
          <Text style={Styles.buttonText}> Submit</Text>
        </Pressable>
      </View>
  </SafeAreaView>

  );
}

// jomåikumpi nappi, joko pressable tai button käyttöön