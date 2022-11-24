import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import purchasesData from './purchasesData';
import {LineChart} from 'react-native-chart-kit';

export default HomeScreen = () => {
  const renderPurchase = ({item}) => (
    <View style={styles.purchase}>
      <View style={styles.purchaseInfo}>
        <Text style={styles.purchaseText}>{item.product}</Text>
        <Text style={styles.purchaseTextStore}>{item.store}</Text>
        <Text style={styles.purchaseTextSmall}>{item.address}</Text>
      </View>
      <Text style={styles.purchaseText}>
        <Text
          style={
            item.signal === '+'
              ? styles.purchaseTextPlus
              : styles.purchaseTextLess
          }>
          {item.signal}
        </Text>

        {item.price}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/474x/e0/28/af/e028af3027c5db1172a2084379726c16.jpg',
            }}
          />
          <View style={styles.welcome}>
            <Text style={styles.text}>Welcome,</Text>
            <Text style={styles.text}>Will</Text>
          </View>
          <Icon name="settings" size={24} color="white" />
        </View>

        <Text style={styles.balance}>$9,875,45</Text>
        <Text style={styles.currentBalance}>Current Balance</Text>

        <View style={styles.chart}>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width}
            height={250}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundGradientFrom: '#1e1e1e',
              backgroundGradientTo: '#1e1e1e',
              color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
              labelColor: () => `rgba(255,255,255, 0.2)`,
              strokeWidth: 3,
            }}
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
          />
        </View>

        <FlatList
          style={styles.purchases}
          ListHeaderComponent={
            <>
              <View style={styles.transactions}>
                <Text style={styles.lastPurchases}>Last Purchases</Text>
                <Icon name="sort" size={24} color="#8a43f2" />
              </View>

              <View style={styles.search}>
                <Icon
                  name="search"
                  size={24}
                  color="#8a43f2"
                  style={styles.searchIcon}
                />
                <TextInput style={styles.searchInput} />
              </View>
            </>
          }
          data={purchasesData}
          renderItem={renderPurchase}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
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
  chart: {
    marginTop: 32,
  },
  purchases: {
    backgroundColor: '#2c2c2c',
    padding: 16,
    marginTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  transactions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastPurchases: {
    color: 'grey',
  },
  searchIcon: {
    paddingLeft: 10,
  },
  search: {
    backgroundColor: '#3d3d3d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRadius: 6,
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    paddingTop: -8,
    paddingRight: 16,
    color: '#dbdbdb',
  },

  purchase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#393939',
    paddingBottom: 12,
    marginTop: 10,
  },
  purchaseText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  purchaseTextStore: {
    color: 'white',
    fontSize: 12,
    marginBottom: 2,
  },
  purchaseTextPlus: {
    color: '#b8ff46',
    fontSize: 15,
  },
  purchaseTextLess: {
    color: '#a50121',
    fontSize: 15,
  },
  purchaseTextSmall: {
    color: 'grey',
    fontSize: 10,
  },

  purchaseInfo: {},
});
