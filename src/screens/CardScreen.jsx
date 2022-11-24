import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

export default CardScreen = () => {
  const myCards = [
    {
      id: '1',
      color: '',
      number: '1234',
      exp: '10/2025',
      logo: {
        uri: 'https://icones.pro/wp-content/uploads/2021/08/icone-amazon-noir.png',
      },
    },
    {
      id: '2',
      color: '',
      number: '1234',
      exp: '02/2023',
      logo: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Y1qEEE59gfLcF2v3uy7wjBU6w1LdWHzJk7NUfg&s',
      },
    },
    {
      id: '3',
      color: '',
      number: '1234',
      exp: '07/2029',
      logo: {
        uri: 'https://seuladogeek.com.br/wp-content/uploads/2022/02/Logotipo-de-Mastercard.png',
      },
    },
    {
      id: '4',
      color: '',
      number: '1234',
      exp: '01/2025',
      logo: {
        uri: 'https://img2.gratispng.com/20180324/ice/kisspng-credit-card-visa-logo-mastercard-bank-mastercard-5ab6fe7d6dc528.9540152815219421414496.jpg',
      },
    },
  ];

  const renderCard = ({item}) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardInfo}>
        <View style={styles.cardLogoContainer}>
          <Image
            source={item.logo}
            resizeMode="contain"
            style={styles.cardLogo}
          />
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.Text}>
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
            &bull;&bull;&bull;&bull;
            <Text> {item.number}</Text>
          </Text>
          <Text style={styles.Text}>{item.exp}</Text>
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.remove}>
          <Text style={styles.Text}>Remove</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.update}>
          <Text style={styles.Text}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Title}>My Cards</Text>
      <FlatList
        data={myCards}
        renderItem={renderCard}
        style={styles.containerCards}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  containerCards: {
    padding: 8,
    marginTop: 15,
  },
  cardContainer: {
    backgroundColor: '#292929',
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
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
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#343334',
    paddingBottom: 12,
    marginBottom: 12,
  },
  cardLogoContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: 'white',
  },
  cardLogo: {
    width: 44,
    height: 44,
    borderRadius: 32,
  },
  cardDetails: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  remove: {
    marginRight: 32,
  },
  update: {
    backgroundColor: '#444345',
    borderRadius: 6,
    padding: 8,
  },
});
