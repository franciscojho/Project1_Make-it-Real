import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, PageWrapper, TextInput } from '../../components'

import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <PageWrapper className={styles.layout}>
            <h1 className={styles.title}>
                ¡Ingresa y encuentra la persona adecuada para tu organizar tu casa!
            </h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('The format is incorrect').required('Requerido'),
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
                                label="Correo"
                                name="email"
                                placeholder="elon@tesla.com"
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

export default LoginPage
