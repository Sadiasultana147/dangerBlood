
import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { DataTable } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';

const AllRequest = () => {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://192.168.0.103:5000/donerRequestStore')
            const donrequesters = await response.json();
            setRequest(donrequesters);
        }
        fetchData();
    }, [])
    const renderRequestItem = ({ item, index }) => {
        const { information, _id } = item;
        return (
            <View >

                <DataTable>


                    <DataTable.Row>
                        <DataTable.Cell>Information: {item.information}</DataTable.Cell>




                    </DataTable.Row>




                </DataTable>

            </View>
        )
    }
    return (
        <View>
            <View>
                <Text h1 style={{ marginTop: 50, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>UserRequestList</Text>
                <FlatList style={{ marginTop: 20 }}
                    data={request}
                    renderItem={renderRequestItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

        </View>
    );
};

export default AllRequest;