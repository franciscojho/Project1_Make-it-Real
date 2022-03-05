import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Layout, TextInput } from '../../../components'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { useAuthContext } from '../../../context/auth'
import AuthHeader from '../../../components/compound/AuthHeader'

const LoginPage = () => {
    const { handleLogin } = useAuthContext()
    return (
        <Layout className="flex flex-col md:flex-row">
            <AuthHeader>
                <Logo className="w-32 h-auto md:mb-2 md:fill-tertiary" />
                <h1 className="text-2xl font-bold w-100 self-center hidden md:block">
                    Encuentra personas de confianza para organizar tu hogar
                </h1>
            </AuthHeader>
            <section className="flex h-full w-full md:min-w-[450px] md:overflow-auto">
                <main className="flex justify-center items-baseline h-full w-full md:items-center">
                    <div className="flex flex-col justify-center w-full max-w-xl px-12 pt-8">
                        <h2 className="text-2xl font-bold mb-10">Inicia sesión en Clerax</h2>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                userType: 'CLIENT',
                            }}
                            onSubmit={(values) => {
                                handleLogin(values)
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email('The format is incorrect')
                                    .required('Requerido'),
                                password: Yup.string()
                                    .matches(
                                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        'Mínimo ocho carácteres, al menos una letra y un número'
                                    )
                                    .required('Requerido'),
                            })}>
                            {() => (
                                <Form className="flex flex-col gap-y-8">
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
                                        label="Contraseña"
                                        type="password"
                                        name="password"
                                        placeholder="ElonMusk1"
                                    />
                                    <Button
                                        className="bg-secondary w-full md:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                                        type="submit">
                                        Submit
                                    </Button>
                                    <div>
                                        <p>¿Aún no miembro? Regístrate aquí</p>
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

export default LoginPage
