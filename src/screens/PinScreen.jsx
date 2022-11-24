import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NumberPad from '../components/NumberPad';

export default PinScreen = ({navigation}) => {
  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  useEffect(() => {
    if (pinCount === totalPins) {
      navigation.navigate('Tabs');
    }
  }, [pinCount]);

  const renderPins = () => {
    const pins = [];

    for (let i = 1; i <= totalPins; i++) {
      pins.push(
        i <= pinCount ? (
          <View key={i} style={styles.pinContainer}>
            <View style={styles.pin}></View>
          </View>
        ) : (
          <View key={i} style={styles.pinContainer}></View>
        ),
      );
    }
    return pins;
  };

  const pressKey = (item, index) => {
    setPinCount(prev => {
      return item !== 'X' ? prev + 1 : prev - 1;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StormBank</Text>
      <Text style={styles.subTitle}>Enter Your PIN code.</Text>

      <View style={styles.AccessPin}>{renderPins()}</View>

      <Text style={styles.secondSubTitle}>Forgot PIN?</Text>

      <TouchableOpacity
        style={styles.useTouch}
        onPress={() => navigation.navigate('Touch')}>
        <Icon name="phone-locked" size={16} color="#964ff0" />
        <Text style={styles.useTouchTitle}>Use Touch ID</Text>
      </TouchableOpacity>

      <NumberPad onPress={pressKey} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#964ff0',
    marginTop: 25,
  },
  subTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    marginTop: 25,
  },
  secondSubTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'grey',
    marginTop: 8,
  },
  AccessPin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginRight: 64,
    marginBottom: 16,
    marginLeft: 64,
  },
  useTouch: {
    marginTop: 15,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  useTouchTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'grey',
    marginLeft: 8,
  },
  pinContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#964ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#964ff0',
  },
});
