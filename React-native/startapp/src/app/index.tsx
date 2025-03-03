import {View, Text, StyleSheet, Alert} from "react-native"

import { useState } from 'react'

import { Button } from "@/components/button"

import { Input} from "@/components/input"

export default function Index() {
  const [name, setName] = useState("")

  function handleMessage() {
    const name = "Francisco"
    Alert.alert(`Olá, ${name}`)
  }
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {name}!</Text>

      <Input onChangeText={setName}/>

      <Button title="Entrar" onPress={handleMessage} activeOpacity={0.3}/>
      
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "red",
    fontSize: 24,
  }
})