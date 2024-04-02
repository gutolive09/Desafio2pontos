import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Membros() {
  return (
    <SafeAreaView>
        <Text style={styles.title}>Desenvolvedores</Text>
        <View style={styles.container}>
            <View>
                <Text style={styles.membro}>Gustavo de Oliveira Azevedo</Text>
                <Text style={styles.membro}>RM: 550548</Text>
            </View>
            <View>
                <Text style={styles.membro}>Mateus Mantovani Araújo</Text>
                <Text style={styles.membro}>RM: 98524</Text>
            </View>
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
        margin:30
    },
    membro:{
        fontSize:20,
        textAlign:'center'
    }
})