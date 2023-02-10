import { View, Text, StyleSheet, FlatList } from 'react-native';

import Search from '../../components/search';
import Card from '../../components/Card';

const Events = [
    {
        name: 'Night club',
        data: '11/09',
        place: 'Club',
        image: require('../../assets/image03.png'),
        id: 1,
    },
    {
        name: 'Music Festival ',
        data: '10/10',
        place: 'Praça Central',
        image: require('../../assets/image02.png'),
        id: 2,
    },
    {
        name: 'Stop Gender Violence',
        data: '01/12',
        place: 'Mix Show',
        image: require('../../assets/image01.png'),
        id: 3,
    }
];

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Search />
            <FlatList data={Events}
                renderItem={({ item }) => {
                    return <Card info={item} navigation={navigation}/>
                }}
                keyExtractor={(Events) => Events.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Home;