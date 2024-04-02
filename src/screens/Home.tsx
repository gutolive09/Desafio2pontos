import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {

    function navigateLogin(){
        navigation.navigate('Login')
    }

    function navigateMembros(){
        navigation.navigate('Membros')
    }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Bem vindo ao nosso portal</Text>
        <View style={styles.card}>
            <Text style={styles.cardTxt}>Realize Login para acessar todas as funcionalidades</Text>
            <Button title='Ir para Login' onPress={navigateLogin} color={'orange'}/>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardTxt}>Conheça a equipe por trás do projeto!</Text>
            <Button title='Ir para Membros' onPress={navigateMembros} color={'orange'}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        textAlign:'center'
    },
    container:{
        flex:1,
        alignItems:'center',
        gap: 40
    },
    card:{
        backgroundColor:'#fce9b8',
        width: 300,
        padding: 60,
        borderRadius:20 
    },
    cardTxt:{
        fontSize:20,
        textAlign:'center',
        marginBottom:10
    }
})
