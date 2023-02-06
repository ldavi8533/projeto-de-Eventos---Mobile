import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';
import Colors from '../../style/colors';

const initialValues = {
    email: "",
};

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido!").required("Obrigatório!"),
});

const ForgotPassword = ({ navigation }) => {
    return (

        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={ForgotPasswordSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => (

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                        <View style={{ alignItems: 'center', marginBottom: 57 }}>
                            <Image source={Logo} />
                        </View>
                        <Text style={{ textAlign: 'center', marginBottom: 8, fontSize: 19, color: Colors.primaryColor }}>Digite seu email de recuperação</Text>
                        <Input placeholder="Email" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                            <Button title="Enviar"
                                colorBorder={Colors.primaryColor}
                                colorButton={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                onPress={() => navigation.navigate('EmailSubmit')}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </Container>
    );
}
export default ForgotPassword;