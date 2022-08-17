import { settings } from "@/config";
import { Button, Icon, Text, Toast, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const { mainColor } = settings.styles;

const TabButton = (props) => {
  const { options, navigation, route, isFocused } = props;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <Button
      onPress={
        // Tính năng còn đang phát triển
        route.name === "Home" || route.name === "Notification" ||route.name === "Contact"|| route.name ==="Advise"||route.name ==="Chat"||route.name ==="Profile"||route.name ==="Taikhoan"
          ? onPress
          : () => Toast.show({ text: "Phunghieudong" })
      }
      style={styles.button}
    >
      <Icon
        type={options.type}
        name={options.icon}
        style={[styles.icon, isFocused && { color: mainColor }]}
      />
      <Text style={[styles.text, isFocused && { color: mainColor }]}>
        {options.label}
      </Text>
      {isFocused && <View style={styles.active} />}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: "100%",
    flexDirection:"column" , 
    justifyContent:"space-around", 
    alignItems:'center'
    
  },
  icon: {
    fontSize: 20,
    color: "#898FB6",
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: "SFProDisplay-Bold",
    color: "#898FB6",
    textAlign:'center' 
    
 
  
  },
  active: {
    position: "absolute",
    top: 0,
    left: "22%",
    right: "22%",
    height: 3,
    backgroundColor: mainColor,
  },
});

export default TabButton;
