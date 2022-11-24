import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default NumberPad = ({onPress}) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'X'];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.Number}
            onPress={() => {
              onPress(item, index);
            }}
            delayPressIn={0}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  text: {color: 'white'},

  Number: {
    width: 55,
    height: 55,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
