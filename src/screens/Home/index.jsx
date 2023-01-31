import { View, Text, StyleSheet, FlatList} from 'react-native';

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
        name: 'Stop Gender Violence',
        data: '10/10',
        place: 'Praça Central',
        image: require('../../assets/image02.png'),
        id: 2,
    },
    {
        name: 'Music Festival',
        data: '01/12',
        place: 'Mix Show',
        image: require('../../assets/image01.png'),
        id: 3,
    }
];

const Home = () => {
    return (
        <View style={styles.container}>
            <Search />
            {/* <Card /> */}

            <FlatList data={Events} renderItem={({item}) => {return <Card info={item}/>}} keyExtractor={(Events) => Events.id.toString()} />
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