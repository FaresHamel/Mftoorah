import {MFError} from 'myfatoorah-reactnative';
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const onEventReturn = (callbackResult: string) => {
  console.log('result : ' + callbackResult);
};

export const onSuccess = (callbackResult: any) => {
  const result = JSON.stringify(callbackResult, null, 2);
  Alert.alert('Result', result);
  console.log('result : ' + result);
};

export const onError = (mfError: MFError) => {
  const error = mfError.message;
  Alert.alert('Error', error?.toString() ?? '');
  console.log('error : ' + error);
};

export function button(title: String, onPress: () => void, style?: any) {
  return (
    <TouchableOpacity style={style ? style : styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#0495ca',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});
