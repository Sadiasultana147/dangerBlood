import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView } from 'react-native';
import { TextInput, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AddDoners = () => {


    const [name, setName] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");


    const handleDoner = (e) => {

        // console.log(text)



        const doner = { donerName: name, bloodGroup: bloodGroup, email: email, contactNo: contactNo }
        console.log(doner)
        fetch('http://192.168.0.103:5000/doners', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doner)


        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the new doner.');


                }



            })



    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>ADD NEW Doners </Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder='Name'


                />
                <TextInput
                    style={styles.input}
                    value={bloodGroup}
                    onChangeText={text => setBloodGroup(text)}
                    placeholder='BloodGroup'


                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder='Email'


                />
                <TextInput
                    style={styles.input}
                    value={contactNo}
                    onChangeText={text => setContactNo(text)}
                    keyboardType='numeric'
                    placeholder='ContactNo'


                />

                <Button
                    onPress={handleDoner}
                    buttonStyle={{ backgroundColor: "blue" }}
                    title="Add"
                />


            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    input: {
        marginTop: 100,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input1: {


        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddDoners;