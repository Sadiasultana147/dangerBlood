
import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { DataTable } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Doners = () => {

    const [doners, setDoners] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://192.168.0.103:5000/doners')
            const doners = await response.json();
            setDoners(doners);
        }
        fetchData();
    }, [])
    //Delete Purchases

    const handleDelete = (id) => {


        const url = `http://192.168.0.103:5000/doners/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = doners.filter(doner => doner._id !== id);
                    setDoners(remaining);
                }
            })

    }
    const renderDonerItem = ({ item, index }) => {
        const { donerName, _id } = item;
        return (
            <View >

                <DataTable>


                    <DataTable.Row>
                        <DataTable.Cell>{item.donerName}</DataTable.Cell>
                        <DataTable.Cell>{item.bloodGroup}</DataTable.Cell>
                        <DataTable.Cell>{item.email}</DataTable.Cell>
                        <DataTable.Cell >{item.contactNo}</DataTable.Cell>

                        <DataTable.Cell>  <Button
                            onPress={() => handleDelete(_id)}
                            buttonStyle={{ backgroundColor: "blue" }}

                            title="Delete"

                        /></DataTable.Cell>

                    </DataTable.Row>




                </DataTable>

            </View>
        )
    }
    return (
        <View>
            <View>
                <Text h1 style={{ marginTop: 50, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>Doners List</Text>
                <FlatList style={{ marginTop: 50 }}
                    data={doners}
                    renderItem={renderDonerItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

        </View>
    );
};

export default Doners;