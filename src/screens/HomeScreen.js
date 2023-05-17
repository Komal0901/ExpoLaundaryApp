import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Carousel from "../Components/Carousel";
import Services from "../Components/Services";
import DressItem from "../Components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductReducer";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log("car reducer", cart);
  const navigation = useNavigation();
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  console.log("total", total);
  const [displayCurrentAdderess, setdisplayCurrentAdderess] = useState(
    "We are loading Location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync(); //return location enabled or not
    if (!enabled) {
      Alert.alert(
        "Location Services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel Pressed"),
            style: "cancel",
          },
          {
            text: "ok",
            onPress: () => console.log("ok Pressed"),
            style: "ok",
          },
        ],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "aloow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("cancel Pressed"),
            style: "cancel",
          },
          {
            text: "ok",
            onPress: () => console.log("ok Pressed"),
            style: "ok",
          },
        ],
        { cancelable: false }
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAdderess(address);
      }
    }
  };
  const product = useSelector((state) => state.product.product);
  // console.log("productreducer", product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      dress.map((dresses) => dispatch(getProducts(dresses)));
    };
    fetchProducts();
  }, []);
  const dress = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {/* location ans profile */}

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Entypo name="location-pin" size={30} color="#fd5c63" />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
            <Text>{displayCurrentAdderess}</Text>
          </View>
          <Pressable>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{
                uri: "https://lh3.googleusercontent.com/ogw/AOLn63FOgtg76WJ5sSIa2jViV3pNduLQdnhLbv-jFu8T=s32-c-mo",
              }}
            />
          </Pressable>
        </View>
        {/* search bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search for items or more" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>
        {/* Image carousel */}
        <Carousel />
        {/* Services Components */}
        <Services />
        {/* DressItems render all products */}
        {product.map((item, index) => {
          return <DressItem item={item} key={index} />;
        })}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#0BBF8F",
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | ${total}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              extra charges night apply
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("PickUp")}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to pickUp
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
