import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../style/colors';

export default function OtherButton(Props){
    return(
        <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: Props.color}]}>
            <Text style={{color: colors.whiteColor}}>
              {Props.title}
            </Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
  button: {
    width: 215,
    height: 36,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
