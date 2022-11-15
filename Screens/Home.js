
import axios from 'axios';
import { useEffect, useState } from "react";
import { 
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList, 
  
} from 'react-native';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = async () => {
      await axios.get('https://61bc10c1d8542f0017824535.mockapi.io/Products')
          .then((json) => setData(json.data))
          .finally(() => setLoading(false));
          console.log("Get data using simple get call");
  };
  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const renderItem = (itemData) => {
      return (
        <SafeAreaView>
          <ScrollView>
            <View>
              <Image source={{uri:itemData.item.productImage}} style={styles.imgPro}></Image>
              <Text>{itemData.item.productName}</Text>
              <Text>{itemData.item.productPrice}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
  }

  return (
    <View>
      <FlatList
          refreshing={isLoading}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id }
          numColumns={2}

      />
    </View>
  )
}
const styles = StyleSheet.create({
  imgPro:{
    width:200,
    height:200,
  }
})
export default Home