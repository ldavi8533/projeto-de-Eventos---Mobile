import { View, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';
import Colors from '../../style/colors';

const initialValues = {
    email: "",
    password: "",
};

const SinginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido!").required("Obrigatório!"),
    password: Yup.string().min(8, "É necessário no mínimo 8 caracteres!").required("Obrigatório"),
});

const Login = ({ navigation }) => {
    return (

        <Container>

            <Formik
                initialValues={initialValues}
                validationSchema={SinginSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, }) => (

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 18 }}>
                        <View style={{ alignItems: 'center', marginBottom: 42 }}>
                            <Image source={Logo} />
                        </View>
                        <Input placeholder="Email" onChange={handleChange("email")} onBlur={handleBlur("email")} value={values.email}
                            error={errors.email && touched.email ? errors.email : undefined} />
                        <Input placeholder="Senha" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}
                            error={errors.password && touched.password ? errors.password : undefined} password />
                        <TouchableOpacity style={{ marginTop: 12 }} onPress={() => handleSubmit()} >
                            <Button title="Login"
                                colorBorder={Colors.primaryColor}
                                colorButton={Colors.primaryColor}
                                colorText={Colors.whiteColor}
                                onPress={() => {
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Home' }],
                                    })
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', marginBottom: 42 }}>
                            <Button title="Não tem conta? Cadastre-se" link
                                colorButton={Colors.primaryColor}
                                colorBorder={Colors.whiteColor}
                                onPress={() => navigation.navigate('Register')}
                            />
                            <Button title="Esqueci minha senha" link
                                colorButton={Colors.primaryColor}
                                colorBorder={''}
                                onPress={() => navigation.navigate('ForgotPassword')}
                                style={{ marginTop: -8 }}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </Container>
    );
}
export default Login;