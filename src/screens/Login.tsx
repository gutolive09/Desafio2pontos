import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useState} from 'react'

export default function Login() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    async function salvar(){
        let user = {user:usuario, pass: senha}

        await AsyncStorage.setItem('usuario', JSON.stringify(user))
        alert("Login efetuado com sucesso")
        buscarUsuario()
    }

    async function buscarUsuario(){
        let userJson = await AsyncStorage.getItem('usuario')
        let user = JSON.parse(userJson)

        alert(`usuario: ${user.user}\n senha: ${user.pass}`)
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.title}>Login</Text>
            <View>
                <TextInput 
                    placeholder='Digite o usuario'
                    style={styles.inputs}
                    value={usuario}
                    onChangeText={(value)=>setUsuario(value)}
                />
                <TextInput 
                    placeholder='Digite a senha'
                    style={styles.inputs}
                    value={senha}
                    onChangeText={(value)=>setSenha(value)}
                    secureTextEntry={true}
                />
                <Button title='Login' color={'orange'} onPress={salvar}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        marginBottom:15
    },
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100
    },
    card:{
        backgroundColor:'#fce9b8',
        width: 350,
        padding: 60,
        borderRadius:20,

    },
    inputs:{
        marginBottom:15,
        opacity:0.7
    }
})