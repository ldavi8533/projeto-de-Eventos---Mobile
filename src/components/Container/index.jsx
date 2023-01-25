import { SafeAreaView, Platform, StatusBar} from "react-native";

import Colors from "../../style/colors";

const Container = ({children}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colors.whiteColor,
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }}
        >
            {children}
        </SafeAreaView>
    );
}
export default Container;