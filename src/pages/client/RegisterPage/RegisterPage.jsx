import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, PageWrapper, TextInput } from '../../../components'
import useAuth from '../../../hooks/useAuth'
import styles from './RegisterPage.module.css'

const RegisterPage = () => {
    const { handleRegister } = useAuth()
    return (
        <PageWrapper className={styles.layout}>
            <h1 className={styles.title}>
                ¡Registrate para encontrar los mejores colaboradores de limpieza!
            </h1>
            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    dni: '',
                    address: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    handleRegister(values)
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string().min(3).required('Requerido'),
                    email: Yup.string().email('The format is incorrect').required('Requerido'),
                    dni: Yup.string()
                        .matches(/^[1-9][0-9]*$/, 'Formato incorrecto')
                        .min(8)
                        .max(8)
                        .required('Requerido'),
                    address: Yup.string().min(5).required('Requerido'),
                    password: Yup.string()
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            'Mínimo ocho carácteres, al menos una letra y un número'
                        )
                        .required('Requerido'),
                })}>
                {() => (
                    <Form className={styles.container}>
                        <div className={styles.formControl}>
                            <TextInput
                                className={styles.input}
                                label="Nombre"
                                name="fullName"
                                placeholder="Elon Musk"
                            />
                        </div>
                        <div className={styles.formControl}>
                            <TextInput
                                className={styles.input}
                                label="Correo"
                                name="email"
                                placeholder="elon@tesla.com"
                            />
                        </div>
                        <div className={styles.formControl}>
                            <TextInput
                                className={styles.input}
                                label="DNI"
                                name="dni"
                                placeholder="47898661"
                            />
                        </div>
                        <div className={styles.formControl}>
                            <TextInput
                                className={styles.input}
                                label="Dirección"
                                name="address"
                                placeholder="Av. Los Tilos 167, Surco"
                            />
                        </div>
                        <div className={styles.formControl}>
                            <TextInput
                                className={styles.input}
                                label="Contraseña"
                                type="password"
                                name="password"
                                placeholder="ElonMusk1"
                            />
                        </div>
                        <Button className={styles.button} name="Submit" type="submit" />
                        <div
                            style={{
                                textAlign: 'center',
                            }}>
                            <p>¿No tienes una cuenta? Regístrate aquí</p>
                            <p>¿Eres colaborador? Click aquí</p>
                        </div>
                    </Form>
                )}
            </Formik>
        </PageWrapper>
    )
}

export default RegisterPage
