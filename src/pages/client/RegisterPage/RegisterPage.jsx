import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { AuthHeader, Button, Layout, TextInput } from '../../../components'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { useAuthContext } from '../../../context/auth'

const RegisterPage = () => {
    const { handleRegister } = useAuthContext()
    return (
        <Layout className="flex flex-col md:flex-row">
            <AuthHeader loginTheme={false}>
                <Logo className="w-32 h-auto md:mb-2 md:fill-tertiary" />
                <h1 className="text-2xl font-bold w-100 self-center hidden md:block">
                    Encuentra personas de confianza para organizar tu hogar
                </h1>
            </AuthHeader>
            <section className="flex flex-col h-full w-full md:min-w-[450px] md:overflow-auto">
                <main className="flex justify-center h-full w-full items-baseline">
                    <div className="flex flex-col justify-center w-full max-w-xl px-12 pt-8">
                        <h2 className="text-2xl font-bold mb-10">Registrate en Clerax</h2>
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
                                email: Yup.string()
                                    .email('The format is incorrect')
                                    .required('Requerido'),
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
                                <Form className="flex flex-col gap-y-6">
                                    <TextInput
                                        className="p-2 bg-quaternary rounded"
                                        wrapperStyles="flex flex-col gap-y-2"
                                        errorStyles="text-red-500 font-bold text-sm"
                                        label="Nombre"
                                        name="fullName"
                                        placeholder="Elon Musk"
                                    />
                                    <TextInput
                                        className="p-2 bg-quaternary rounded"
                                        wrapperStyles="flex flex-col gap-y-2"
                                        errorStyles="text-red-500 font-bold text-sm"
                                        label="Correo"
                                        name="email"
                                        placeholder="elon@tesla.com"
                                    />
                                    <TextInput
                                        className="p-2 bg-quaternary rounded"
                                        wrapperStyles="flex flex-col gap-y-2"
                                        errorStyles="text-red-500 font-bold text-sm"
                                        label="DNI"
                                        name="dni"
                                        placeholder="8 números"
                                    />
                                    <TextInput
                                        className="p-2 bg-quaternary rounded"
                                        wrapperStyles="flex flex-col gap-y-2"
                                        errorStyles="text-red-500 font-bold text-sm"
                                        label="Dirección"
                                        name="address"
                                        placeholder="Av. Los Rosales 167"
                                    />
                                    <TextInput
                                        className="p-2 bg-quaternary rounded"
                                        wrapperStyles="flex flex-col gap-y-2"
                                        errorStyles="text-red-500 font-bold text-sm"
                                        label="Contraseña"
                                        type="password"
                                        name="password"
                                        placeholder="ElonMusk1"
                                    />
                                    <Button
                                        className="bg-primary w-full md:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                                        type="submit">
                                        Submit
                                    </Button>
                                    <div
                                        style={{
                                            textAlign: 'center',
                                            height: '100px',
                                        }}>
                                        <p>¿No tienes una cuenta? Regístrate aquí</p>
                                        <p>¿Eres colaborador? Click aquí</p>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </main>
            </section>
        </Layout>
    )
}

export default RegisterPage
