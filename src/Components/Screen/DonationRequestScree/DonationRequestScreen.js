import React from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView, Text } from 'react-native';
import { TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AllRequest from '../AllRequest/AllRequest';

const DonationRequestScreen = () => {
    const [text, onChangeText] = React.useState("");


    const handleDonationRequest = (e) => {

        // console.log(text)



        const DonationRequest = { information: text }
        console.log(DonationRequest)
        fetch('http://192.168.0.103:5000/donerRequestStore', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(DonationRequest)


        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully send the request.');


                }



            })



    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>Send Your Information</Text>
                <Text h3 style={{ marginTop: 10, fontSize: 30, marginLeft: 12, color: "indigo" }}>We will contact with you as soon as possible</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    multiline={true}
                    numberOfLines={15}
                    value={text}
                    placeholder='Enter Your Name, Emailaddress,ContactNo, Needed BloodGroup'


                />


                <Button
                    onPress={handleDonationRequest}
                    buttonStyle={{ backgroundColor: "blue" }}
                    title="SEND"
                />



                <AllRequest></AllRequest>


            </ScrollView>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        marginTop: 100,
        height: 100,
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

export default DonationRequestScreen;