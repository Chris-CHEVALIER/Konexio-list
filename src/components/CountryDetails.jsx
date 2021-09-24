import React from 'react'
import { Text, Button } from 'react-native'
import { Card } from 'react-native-elements';
import Map from './Map';

export default function CountryDetails({ location, history }) {
    const country = location.state.country;

    return (
        <>
            <Card>
                <Card.Title>{country.name}</Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: country.flags[1]}} />
                <Text>{country.capital} - {country.region}</Text>
            </Card>
            <Map
                lat={country.latlng[0]}
                lng={country.latlng[1]}
                countryName={country.name}
            />
            <Button title="Go back" onPress={() => history.goBack()} />
        </>
    )
}
