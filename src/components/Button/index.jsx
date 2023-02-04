import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ title, link, colorButton,colorBorder, colorText, ...rest }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container, 
        backgroundColor: link ? "transparent" : colorButton,
        borderColor: colorBorder
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color: link ? colorButton : colorText,
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
      borderWidth: 1
    },
    titleButton: {
      fontSize: 16,
      fontWeight: "bold",
      paddingHorizontal: 4,
      lineHeight: 18
    }
  });

export default Button;