import MapView,{Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../enviroments';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 searchContainer:{
  position:"absolute",
  width:"90%",
  backgroundColor:"white",
  shadowColor:"black",
  shadowOpacity:0.25,
  shadowOffset:{width:2, height:2},
  shadowRadius:4,
  elevation:4,
  padding: 8,
  borderRadius:8,
  top: 0
 },
 input:{
  borderColor:"#888",
  borderWidth:1,
 }
});

export default () => (
   <View style={styles.container}>
     <MapView
      showsUserLocation={true}
      zoomControlEnabled={true}
      zoomEnabled={true}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 21.0506866,
         longitude: 105.8047464,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     ><Marker coordinate={{
      latitude: 21.0506866,
      longitude: 105.8047464,}}>
      </Marker>
     </MapView>
     <View style={styles.searchContainer}>
     <GooglePlacesAutocomplete
     styles={{textInput: styles.input}}
            placeholder='Search'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: {GOOGLE_API_KEY},
              language: 'en',
          }}
        />
     </View>
   </View>
);
