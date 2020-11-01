import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import default class App extends React.Component {
    construtor(props) {
        super(props);
        this.state = {date: New Date() };
    }

    relogio(){
    this.setState({
        date: New Date()
    })
    }

    componentDidMount() {
        this.TimeID = setInterval(()=> this.relogio() 1000);
    }

    componentWillUnmount() {
        clearInterval(this.TimeID);
    }
    render() {
        return (
         <View style={styles.container>
         <Text style={styles.texto}>{this.state.date.toLocaleTimeString()}</Text>
         </View>
         )
       }
     }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            width:'100%',
            backgroundColor: 'black'},

        texto: {
            fontSize: 60,
            color: 'ffffff',
            width: '100%',
            marginTop: 75
        }
    });