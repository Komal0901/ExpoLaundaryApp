import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  decrementQuatityCart,
  incrementQuatityCart,
} from "../redux/CartReducer";
import { decreamentQty, incrementQty } from "../redux/ProductReducer";
const CartScreen = () => {
  const route = useRoute();
  const { pickUpDate, selectedTime, no_of_days } = route.params;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginTop: 30 }}>
      {total === 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Cart is empty</Text>
        </View>
      ) : (
        <>
          <View
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <Text>Your Bucket</Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              marginLeft: 10,
              marginRight: 10,
              padding: 14,
            }}
          >
            {cart.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 12,
                }}
              >
                <Text>{item.name}</Text>
                <Text>$ {item.price * item.quantity}</Text>

                <Pressable
                  style={{
                    flexDirection: "row",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      dispatch(decreamentQty(item)); //product
                      dispatch(decrementQuatityCart(item)); //cart
                    }}
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      borderWidth: 1,
                      borderColor: "pink",
                      backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        paddingHorizontal: 6,
                        textAlign: "center",
                        color: "green",
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      width: 40,
                      height: 26,
                      borderRadius: 13,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        paddingHorizontal: 6,
                        textAlign: "center",
                        color: "green",
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      dispatch(incrementQty(item)); //product
                      dispatch(incrementQuatityCart(item)); //cart
                    }}
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      borderWidth: 1,
                      borderColor: "pink",
                      backgroundColor: "pink",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        color: "green",
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>
              </View>
            ))}
          </Pressable>
          <Pressable>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  marginHorizontal: 10,
                }}
              >
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 0,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Item Total
                  </Text>
                  <Text>$ {total}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text>Delivery Fee |1.2KM</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#08BF8F",
                    }}
                  >
                    Free
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    Free Delivery on your order
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    selected Time
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#08BF8F",
                    }}
                  >
                    {selectedTime}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    No. of Days
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#08BF8F",
                    }}
                  >
                    {no_of_days}
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    To Pay
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#08BF8F",
                    }}
                  >
                    {total + 95}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </>
      )}
      <Button
        title="Place Order"
        onPress={() => alert("Order Successfull🥳🥳🥳🥳🥳🥳")}
      />
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
