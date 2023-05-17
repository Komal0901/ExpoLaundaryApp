import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuatityCart,
  incrementQuatityCart,
} from "../redux/CartReducer";
import { decreamentQty, incrementQty } from "../redux/ProductReducer";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#e4ecf6",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>
        <View>
          <Text
            style={{
              width: 83,
              fontSize: 17,
              fontWeight: "500",
              marginBottom: 7,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              width: 60,
              color: "gray",
              fontSize: 15,
            }}
          >
            $ {item.price}
          </Text>
        </View>
        {cart.some((c) => c.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: "row",
              paddingVertical: 5,
              paddingHorizontal: 10,
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
        ) : (
          <TouchableOpacity
            style={{ width: 80, borderRadius: 6 }}
            onPress={addItemToCart}
          >
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088F8F",
                textAlign: "center",
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DressItem;

const styles = StyleSheet.create({});
