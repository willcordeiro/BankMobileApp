import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default TouchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StormBank</Text>

      <TouchableOpacity
        style={styles.touch}
        onLongPress={() => navigation.navigate('Tabs')}
        delayPressIn={0}>
        <View style={styles.circle}>
          <View style={styles.outterCircle}>
            <View style={styles.innerCircle}>
              <TouchableOpacity style={styles.touchButton}>
                <Icon name="fingerprint" size={64} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Touch ID sensor for access to{'\n'} your bank account
      </Text>
      <Text style={styles.subFooter}>
        Please verify your identity{'\n'} suing Touch ID
      </Text>

      <TouchableOpacity
        style={styles.pinAccess}
        onPress={() => navigation.navigate('Pin')}
        delayPressIn={0}>
        <Icon name="phone-locked" size={16} color="#964ff0" />
        <Text style={styles.pinText}>Enter Access PIN</Text>
      </TouchableOpacity>
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
  touch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#5196f405',
    padding: 25,
    borderRadius: 999,
  },
  outterCircle: {
    backgroundColor: '#5196f410',
    padding: 25,
    borderRadius: 999,
  },
  innerCircle: {
    backgroundColor: '#5196f430',
    padding: 25,
    borderRadius: 999,
  },
  touchButton: {
    backgroundColor: '#5196f4',
    padding: 8,
    borderRadius: 100,
  },

  footerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginTop: 32,
  },
  subFooter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    color: '#9c9c9f',
    marginTop: 10,
    marginBottom: 10,
  },
  pinAccess: {
    marginTop: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#964ff0',
  },
});
