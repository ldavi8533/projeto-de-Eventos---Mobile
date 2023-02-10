import { View, ScrollView, FlatList} from 'react-native';

import Button from '../../components/Button';

import Colors from '../../style/colors';

import InfoCardPage from '../../components/InfoCardPage'
import { StackNavigatorFavorites } from '../../navigations/stackNavigator';

const InfoCard = [
    {
        name: 'Night club',
        event:'Presencial',
        eventDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        schedule: 'Programação',
        scheduleDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        organizers: 'Organizadores',
        organizers1: 'Maria Silva',
        organizers2: 'João Silva',
        organizers3: 'Jose Silva',
        organizers4: 'Ana Silva',
        price:'R$ 125,00',
        image: require('../../assets/image03.png'),
        id: 1,
    },
    {
        name: 'Music Festival',
        event:'Presencial',
        eventDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        schedule: 'Programação',
        scheduleDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        organizers: 'Organizadores',
        organizers1: 'Maria Silva',
        organizers2: 'João Silva',
        organizers3: 'Jose Silva',
        organizers4: 'Ana Silva',
        price:'R$ 50,00',
        image: require('../../assets/image02.png'),
        id: 2,
    },
    {
        name: 'Stop Gender Violence',
        event:'Presencial',
        eventDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        schedule: 'Programação',
        scheduleDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        organizers: 'Organizadores',
        organizers1: 'Maria Silva',
        organizers2: 'João Silva',
        organizers3: 'Jose Silva',
        organizers4: 'Ana Silva',
        price:'R$ 100,00',
        image: require('../../assets/image01.png'),
        id: 3,
    }
];

const CardPage = ({ navigation }) => {

    return (
        <View >
        
            <ScrollView maximumZoomScale={true}>

                {/* <InfoCardPage /> */}

                <FlatList data={InfoCard}
                    renderItem={({ item }) => {
                        return <InfoCardPage info={item} navigation={navigation}/>
                    }}
                    keyExtractor={(InfoCard) => InfoCard.id.toString()}
                />

                <View style={{ paddingLeft:30, paddingRight:30, paddingBottom:10 }}>
                    <Button title='Comprar ingresso'
                    colorBorder={Colors.primaryColor}
                    colorButton={Colors.primaryColor}
                    colorText={Colors.whiteColor}
                    onPress={() => navigation.navigate('TicketPage')} 
                    />
                </View>
            
            </ScrollView>
        </View>

    );
}
export default CardPage;
