import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

const Services = () => {
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        Services Available
      </Text>
      <FlatList
        data={services}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <View>
              <Pressable
                key={index}
                style={{
                  margin: 10,
                  backgroundColor: "#e4ecf6",
                  padding: 20,
                  borderRadius: 7,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 70, height: 70 }}
                />
                <Text style={{ textAlign: "center", marginTop: 10 }}>
                  {item.name}
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
