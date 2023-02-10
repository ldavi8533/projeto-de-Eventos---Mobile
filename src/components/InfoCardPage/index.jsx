import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Text, Modal, Pressable, Dimensions, StyleSheet, ScrollView} from 'react-native';
import MapView from 'react-native-maps';
import Unorderedlist from 'react-native-unordered-list';

import colors from '../../style/colors';

const InfoCardPage = ({info}) => {
    const {name, event, eventDescription, schedule, scheduleDescription, organizers, organizers1, organizers2, organizers3, organizers4, image, price} = info;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>

            <ScrollView>
            
            <Text  style={styles.textTitle}>{name}</Text>
            <Image style={styles.img} source={image}/>
            <Text  style={styles.textTitle}>{event}</Text>

            <View >

                <Pressable style={styles.textMap} onPress={() => setModalVisible(true)}>
                    <Ionicons color={colors.primaryColor} name='location' size={30} />
                    <Text style={{color:colors.primaryColor}}>Visualizar local</Text>
                </Pressable>

                <Modal
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={[styles.centeredView, { backgroundColor: 'rgba(255,255,255,0.75)' }]} >
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name='close' />
                            </Pressable>

                            <MapView
                                style={[styles.map, { width: 300, height: 450 }]}
                            />

                            <Text style={styles.modalText}>Local</Text>
                        </View>
                    </View>
                </Modal>

            </View>
            
            <Text style={styles.texDescription}>{eventDescription}</Text>
            <Text style={styles.textTitle}>{schedule}</Text>
            <Text style={styles.texDescription}>{scheduleDescription}</Text>
            <Text style={styles.textTitle}>{organizers}</Text>

            <View style={styles.listStyle}>
                <Unorderedlist>
                    <Text>{organizers1}</Text>
                </Unorderedlist>
                <Unorderedlist>
                    <Text>{organizers2}</Text>
                </Unorderedlist>
                <Unorderedlist>
                    <Text>{organizers3}</Text>
                </Unorderedlist>
                <Unorderedlist>
                    <Text>{organizers4}</Text>
                </Unorderedlist>
            </View>
            
            <Text style={styles.priceStyle}>{price}</Text>
            </ScrollView>
        </View>

    );
}
export default InfoCardPage;

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        marginBottom: 10,
        backgroundColor: '#2196F3',
    },
    modalText: {
        padding: 10,
        textAlign: 'justify',
    },
    map: {
        padding: 10,
    },
    img:{
        height: 150,
        width: deviceWidth - 60,
        left: 30,
    },
    textTitle:{
        fontSize:20,
        paddingTop: 20,
        paddingBottom:20,
        paddingLeft: 30,
    },
    textMap:{
        flexDirection: 'row',
        paddingBottom:20,
        paddingLeft: 25,
        alignItems:'center',
    },
    texDescription:{
        paddingLeft: 30,
        paddingRight:30,
        textAlign:'justify'
    },
    listStyle:{
        marginLeft:30,
    },
    priceStyle:{
        paddingRight:30,
        paddingBottom:20,
        fontSize:30,
        textAlign: 'right',
    }
});