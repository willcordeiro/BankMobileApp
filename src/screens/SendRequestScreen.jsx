import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import NumberPad from '../components/NumberPad';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default SendRequestScreen = () => {
  const [amount, setAmount] = useState('0');

  const convertToDollar = currentAmount => {
    const newAmount = currentAmount / 100;

    return newAmount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const pressKey = (item, index) => {
    setAmount(prev => {
      return item !== 'X' ? prev + item : prev.slice(0, prev.length - 1);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>Send Request</Text>

        <View style={styles.Amount}>
          <Text style={styles.Title}>{convertToDollar(amount)}</Text>
          <Text style={styles.Text}>Choose amount to send</Text>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/474x/e0/28/af/e028af3027c5db1172a2084379726c16.jpg',
            }}
          />
          <View style={styles.userDetails}>
            <Text style={styles.Text}>Will</Text>
            <Text style={styles.Text}>Code</Text>
          </View>

          <Icon name="edit" size={16} color="white" style={{marginRight: 20}} />
        </View>

        <TouchableOpacity style={styles.send}>
          <Text style={styles.Text}>
            send {convertToDollar(amount)} to Code
          </Text>
        </TouchableOpacity>

        <NumberPad onPress={pressKey} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  Title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  Text: {
    fontSize: 14,
    color: '#b6b4b6',
  },
  Amount: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  user: {
    marginTop: 32,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    flex: 1,
    marginRight: 20,
  },
  send: {
    margin: 16,
    backgroundColor: '#964ff0',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 32,
    alignItems: 'center',
    borderRadius: 5,
  },
});
