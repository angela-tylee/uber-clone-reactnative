import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-lg overflow-hidden"
      mapType="terrain"
      showsPointsOfInterest={false}
      showsTraffic={true}
      showsMyLocationButton={true}
      loadingEnabled={true}
      showsUserLocation={true}
      initialRegion={{
        latitude: 25.033964,
        longitude: 121.564468,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    ></MapView>
  );
};

export default Map;
