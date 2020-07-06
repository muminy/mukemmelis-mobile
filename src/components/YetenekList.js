import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import Container from './Container';

export default function({yetenek}){
    return (
        <Container style={style.mb} flex="row">
            <Container style={style.container}></Container>
            <Text style={style.yetenek_text}>{yetenek}</Text>
        </Container>
    )
}

const style = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: '#327af3',
        borderRadius: 40,
        marginRight: 18,
        marginTop: 7,
        flex: .1,
        maxWidth: 10
    },
    yetenek_text: {
       fontSize: 15,
       flex: 1
    },
    mb: {
        marginBottom: 10,
        borderTopColor: '#111',
    }
})