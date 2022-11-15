import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Profile({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../assets/icon/profileImg.png")}
        />
        <View style={styles.inf}>
          <Text style={styles.text1}>Hi, Ben Cline</Text>
          <Text style={styles.text2}>Welcome to Medtech</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.block}>
          <FontAwesome5 name="file-alt" size={20} style={styles.iconHome} />
          <View style={styles.item}>
            <Text style={styles.text3}>Private Account</Text>
            <FontAwesome5
              name="chevron-right"
              size={15}
              color="black"
              style={styles.iconChevron}
            />
          </View>
        </View>
        <View style={styles.block}>
          <FontAwesome5 name="stethoscope" size={20} style={styles.iconHome} />
          <View style={styles.item}>
            <Text style={styles.text3}>My Consults</Text>
            <FontAwesome5
              name="chevron-right"
              size={15}
              color="black"
              style={styles.iconChevron1}
            />
          </View>
        </View>
        <View style={styles.block}>
          <FontAwesome5 name="file-invoice" size={20} style={styles.iconHome} />
          <View style={styles.item}>
            <Text style={styles.text3}>My orders</Text>
            <FontAwesome5
              name="chevron-right"
              size={15}
              color="black"
              style={styles.iconChevron2}
            />
          </View>
        </View>
        <View style={styles.block}>
          <FontAwesome5 name="clock" size={20} style={styles.iconHome} />
          <View style={styles.item}>
            <Text style={styles.text3}>Billing</Text>
            <FontAwesome5
              name="chevron-right"
              size={15}
              color="black"
              style={styles.iconChevron3}
            />
          </View>
        </View>
        <View style={styles.block}>
          <FontAwesome5
            name="question-circle"
            size={20}
            style={styles.iconHome}
          />
          <View style={styles.item}>
            <Text style={styles.text3}>Faq</Text>
            <FontAwesome5
              name="chevron-right"
              size={15}
              color="black"
              style={styles.iconChevron4}
            />
          </View>
        </View>
        <View style={styles.block}>
          <FontAwesome5 name="cog" size={20} style={styles.iconHome} />
          <View style={styles.item}>
            <Text style={styles.text3}>Settings</Text>
            <FontAwesome5
              name="chevron-right"
              size={15}
              color="black"
              style={styles.iconChevron5}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 0,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  inf: {
    marginLeft: 15,
  },
  image: {
    width:60,
    height:60,
    borderRadius:50
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {
    fontWeight: "light",
    fontSize: 14,
    color: "#b9bfc8",
  },
  main: {},
  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#091C3F14",
    marginLeft: 25,
    alignItems: "center",
    paddingRight: 45,
    paddingBottom: 20,
  },
  text3: {
    color: "#091C3FBF",
    fontWeight: "light",
    fontSize: 15,
  },
  iconChevron: {
    paddingLeft: 140,
  },
  iconChevron1: {
    paddingLeft: 165,
  },
  iconChevron2: {
    paddingLeft: 180,
  },
  iconChevron3: {
    paddingLeft: 205,
  },
  iconChevron4: {
    paddingLeft: 220,
  },
  iconChevron5: {
    paddingLeft: 190,
  },
  iconHome: {
    marginLeft: 30,
    paddingBottom: 20,
  },
});
