import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AMLnZu-7dGcV5M87oiHhwi6NYfde_BUgoFxuQGylsThS=s88-c-k-c0x00ffffff-no-rj-mo',
          }}
        />
        <View style={styles.welcome}>
          <Text style={styles.text}>Welcome,</Text>
          <Text style={styles.text}>User</Text>
        </View>
        <Icon name="settings" size={34} color="grey" />
      </View>

      <Text style={styles.balance}>$9,875,45</Text>
      <Text style={styles.currentBalance}>Current Balance</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginRight: 16,
    marginBottom: 32,
    marginLeft: 16,
  },
  welcome: {
    flex: 1,
    paddingTop: 0,
    paddingRight: 16,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  balance: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  currentBalance: {
    textAlign: 'center',
    color: 'grey',
  },
});
