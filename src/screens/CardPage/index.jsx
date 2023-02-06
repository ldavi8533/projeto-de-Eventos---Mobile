import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import Button from '../../components/Button';

import Colors from '../../style/colors';

const CardPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>CardPage</Text>

            <View >
                <Pressable onPress={() => setModalVisible(true)}>
                    <Ionicons name='location' size={30} />
                    <Text>Visualizar local</Text>
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

            <Button title='Comprar ingresso'
                colorBorder={Colors.primaryColor}
                colorButton={Colors.primaryColor}
                colorText={Colors.whiteColor}
                onPress={() => navigation.navigate('TicketPage')}
            />

        </View>
    );
}
export default CardPage;

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
});