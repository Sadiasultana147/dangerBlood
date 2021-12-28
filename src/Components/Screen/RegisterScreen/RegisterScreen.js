import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { auth } from '../../firebase'




const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')
    const handleRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email)
                console.log(user.password)

            })
            .catch(error => alert(error.message))

    }


    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>



            <View style={styles.main}>
                {/* <Input
                    placeholder="Enter your name"
                    leftIcon={{ type: 'Fontisto', name: 'person' }}

                />  */}
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
                    secureTextEntry
                />
                {/* <Input
                    placeholder="Enter your role"
                    value={role}
                    onChangeText={text => setRole(text)}
                /> */}
                {/* <Input
                    placeholder="Enter your contact no"
                    leftIcon={{ type: 'entypo', name: 'mobile' }}
                    onChangeText={value => this.setState({ comment: value })}
                /> */}

                <Button onPress={handleRegister}
                    buttonStyle={{ backgroundColor: "blue" }}
                    title="Register"
                />
            </View>






        </View>
    );
};
const styles = {
    main: {
        top: 50
    }
}


export default RegisterScreen;