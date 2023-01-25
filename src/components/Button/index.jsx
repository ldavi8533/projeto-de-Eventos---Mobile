import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../style/colors";

const Button = ({ title, link, ...rest }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container, 
        backgroundColor: link ? "transparent" : Colors.primaryColor,
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color: link ? Colors.primaryColor : Colors.whiteColor,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      marginBottom: 0,
    },
    titleButton: {
      fontSize: 16,
      fontWeight: "bold",
      paddingHorizontal: 4,
      lineHeight: 18
    }
  });

export default Button;