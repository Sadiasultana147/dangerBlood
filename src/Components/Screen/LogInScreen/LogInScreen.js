import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import RegisterScreen from '../RegisterScreen/RegisterScreen';



const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("BottomNavigator")

            }
        })
        return unsubscribe

    }, [])
    const handleLogIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email)
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <Image style={{ width: "100%", top: 3 }} source={require('../../../Images/image4.jpg')} />


            <View style={styles.main}>
                <Input
                    placeholder='Enter your email'
                    leftIcon={{ type: 'ant-design', name: 'mail' }}
                    onChangeText={value => this.setState({ comment: value })}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />




                <Input
                    placeholder="Enter your password"
                    leftIcon={{ type: 'ant-design', name: 'lock' }}
                    onChangeText={value => this.setState({ comment: value })}
                    value={password}
                    onChangeText={text => setPassword(text)}

                />
                <Button
                    onPress={handleLogIn}

                    buttonStyle={{ backgroundColor: "blue" }}
                    title="LogIn"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("RegisterScreen")}
                >
                    <Button
                        buttonStyle={{ backgroundColor: "purple", top: 10, width: "50%", marginLeft: "25%" }}
                        title="Register"
                    />



                </TouchableOpacity>
            </View>






        </View>
    );
};
const styles = {
    main: {
        top: 50
    }
}

export default LogInScreen;