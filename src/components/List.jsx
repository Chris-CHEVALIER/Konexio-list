import React, { useEffect, useState } from 'react';
import { Text, FlatList, ActivityIndicator, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import LanguagesModal from './LanguagesModal';

export default function List({history}) {
    const [countries, setCountries] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(result => {
            setCountries(result);
            setLoading(false);
        });
    }, []);

    const renderCountry = ({item}) => {
        return (
            <>
                <Card>
                    <Pressable
                        onPress={() => {
                            setIsModalVisible(true);
                            setSelectedCountry(item);
                        }}
                        onLongPress={() => {
                            history.push(`/countries/${item.name}`, { country: item });
                        }}
                    >
                        <Card.Title>{item.name}</Card.Title> 
                    </Pressable>                   
                    <Card.Divider/>
                    <Card.Image source={{uri: item.flags[1]}} />
                    <Text>{item.capital} - {item.region}</Text>
                </Card>
            </>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {countries.length === 0 && loading && (
                <ActivityIndicator size="large" />
            )}
            <FlatList
                data={countries}
                renderItem={renderCountry}
                keyExtractor={(item) => item.name}
                // horizontal
            />
            {isModalVisible && selectedCountry && (
                <LanguagesModal
                    languages={selectedCountry.languages}
                    visible={isModalVisible}
                    onClose={() => setIsModalVisible(false)}
                    countries
                    setCountries
                />
            )} 
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});