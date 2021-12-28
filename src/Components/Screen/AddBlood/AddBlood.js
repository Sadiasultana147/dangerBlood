import React from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView, Text } from 'react-native';
import { TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const AddBlood = () => {

    const [text, onChangeText] = React.useState("Enter BloodGroup");

    const handlebloodGroup = () => {

        console.log(text)



        const blood = { bloodGroup: text }
        fetch('http://192.168.0.103:5000/bloodGroupList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blood)

        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the new bloodGroup.');


                }



            })



    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>ADD NEW BLOODGROUP </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />

                <Button
                    onPress={handlebloodGroup}
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
});

export default AddBlood;