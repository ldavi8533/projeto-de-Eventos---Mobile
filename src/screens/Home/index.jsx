import { View, Text, StyleSheet} from 'react-native';

import Search from '../../components/search';
import Card from '../../components/Card';

const Home = () => {
    return (
        <View style={styles.container}>
            <Search />
            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    }
})

export default Home;