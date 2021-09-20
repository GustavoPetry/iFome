import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: -23.595022,
        longitude: -46.687062,
      }}
    >

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})


export default Map