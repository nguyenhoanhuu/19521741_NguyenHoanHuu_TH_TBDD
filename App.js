import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [text,setText] = useState('');
    const [result,setResult] = useState('');
    return (
        
        <View style={styles.container}>
        <Text>Guiline</Text>
           
           <TextInput style={styles.textInput} placeholder="Email"
           
             onChangeText={(text) => setText(text)}
            value={text}
            ></TextInput>
            <Button title="Submit" onPress={toggleModal} />
          
          <Text>kết quả : {result}</Text>
           
        </View>
    );
    function toggleModal () {
        setResult(text)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        border: '1px solid #fff',
        height:100, 
        borderColor: "red",
    }
});
