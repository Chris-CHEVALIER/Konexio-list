import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map({ lat, lng, countryName }) {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 10,
                longitudeDelta: 10,
            }}
        >
            <Marker
                //key={index}
                coordinate={{ latitude : lat , longitude : lng }}
                title={countryName}
                pinColor="red"
                //description={marker.description}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
