import React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import axios from "axios";

export default function TopProduct() {
  const DATA = "https://61bc10c1d8542f0017824535.mockapi.io/Products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPosts = async () => {
    setLoading(true);
    await axios(DATA)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);
  

  const Item = ({ name, img }) => (
    <View style={styles.item}>
      <Image style={styles.productImage} source={{ uri: img, }} />
      <Text style={styles.productName}>{name}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item name={item.name} img={item.img} />;
  return (
    <View style={styles.topPro}>
      <Text style={styles.title3}>Diabetic Diet</Text>
      <SafeAreaView>
        <FlatList 
          data={data}
          keyExtractor={(item, index) => item.id + index.toString()}
          refreshing={loading}
          onRefresh={getPosts}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  topPro: {
    flex: 2,
  },
  title3: {
    position: "relative",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  imgTopProduct: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 100,
    height: 100,
  },
  nameTopProduct: {
    width: 100,
    textAlign: "center",
    padding: 10,
  },
});