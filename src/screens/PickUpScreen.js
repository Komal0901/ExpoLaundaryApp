import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [delivery, setDelivery] = useState("");
  //   console.log(typeof selectedDate, typeof selectedTime, typeof delivery);

  const navigation = useNavigation();
  const DeliveryTime = [
    {
      id: "0",
      name: "2-3 days",
    },
    { id: "1", name: "3-4 days" },
    {
      id: "2",
      name: "4-5 days",
    },
    {
      id: "3",
      name: "5-6 days",
    },
    { id: "4", name: "Tommorrow" },
  ];
  const times = [
    {
      id: "0",
      time: "12:00 PM",
    },
    {
      id: "1",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "3",
      time: "3:00 PM",
    },
    {
      id: "4",
      time: "4:00 PM",
    },
    {
      id: "5",
      time: "5:00 PM",
    },
  ];
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        "Empty or Invalid ",
        "Please select all the feilds",
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
    if (selectedDate && selectedTime && delivery) {
      navigation.navigate("CartScreen", {
        selectedTime: selectedTime,
        no_of_days: delivery,
      });
    }
  };
  return (
    <>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Enter Address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          PickUp Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-05-17")}
          endDate={new Date("2023-05-24")}
          initialSelectedDate={new Date("2023-05-17")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          // selectedItemWidth={170}
          // unselectedItemWidth={38}
          // itemHeight={38}
          // itemRadius={10}
          // selectedItemTextStyle={styles.selectedItemTextStyle}
          // unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          // flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text style={{ fontSize: 15, fontWeight: "500", marginHorizontal: 10 }}>
          SelectTime
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime === item.time
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 1,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 1,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 15, fontWeight: "500", marginHorizontal: 10 }}>
          Delivery Date
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DeliveryTime.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setDelivery(item.name)}
              style={
                delivery === item.name
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 1,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 1,
                    }
              }
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      {total === 0 ? null : (
        <Pressable
          style={{
            marginTop: "auto",
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
          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;
const styles = StyleSheet.create({});
