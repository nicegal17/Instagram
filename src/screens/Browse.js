import {useIsFocused} from '@react-navigation/core';
import React, {createRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Platform,
} from 'react-native';

// import {RNCamera} from 'react-native-camera';
// import {useCamera} from 'react-native-camera-hooks';
// import QRCodeScanner from 'react-native-qrcode-scanner';

const BrowseScreen = () => {
  // const isFocused = useIsFocused();
  // const [
  //   {cameraRef, type, ratio, autoFocus, autoFocusPoint},
  //   {toggleFacing, touchToFocus},
  // ] = useCamera();
  // const [hasCameraPermission, setHasCameraPermission] = useState(false);
  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'Cool Photo App Camera Permission',
  //         message:
  //           'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //       setHasCameraPermission(true);
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  // const onBardcodeRead = e => {
  //   console.log('onBardcodeRead: ', e);
  // };
  // const renderCameraView = () => {
  //   if (!hasCameraPermission) {
  //     return <Text>No access to camera</Text>;
  //   } else if (hasCameraPermission && isFocused) {
  //     return (
  //       <QRCodeScanner
  //         onRead={onBardcodeRead}
  //         flashMode={RNCamera.Constants.FlashMode.torch}
  //         topContent={
  //           <Text style={styles.centerText}>
  //             Go to{' '}
  //             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
  //             your computer and scan the QR code.
  //           </Text>
  //         }
  //         bottomContent={
  //           <TouchableOpacity style={styles.buttonTouchable}>
  //             <Text style={styles.buttonText}>OK. Got it!</Text>
  //           </TouchableOpacity>
  //         }
  //         reactivate={true}
  //         reactivateTimeout={3000}
  //       />
  //     );
  //   }
  // };
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     requestCameraPermission();
  //   }
  // }, []);
  // return (
  // <SafeAreaView
  //   style={{
  //     flex: 1,
  //     backgroundColor: '#ffffff',
  //   }}>
  //   <View style={styles.container}>
  //     {renderCameraView()}
  //     <TouchableWithoutFeedback onPress={touchToFocus}>
  //       <View style={{flex: 1}} />
  //     </TouchableWithoutFeedback>
  //     <TouchableOpacity
  //       testID="button"
  //       onPress={toggleFacing}
  //       style={{width: '100%', height: 45}}>
  //       <Text style={styles.btnText}>{type}</Text>
  //     </TouchableOpacity>
  //   </View>
  // </SafeAreaView>
  // );
};

export default BrowseScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     width: '100%',
//     alignSelf: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
//   captureContainer: {
//     flex: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   captureText: {
//     fontSize: 14,
//   },
//   btnText: {
//     fontSize: 18,
//     color: '#ffffff',
//     textAlign: 'center',
//   },
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });
