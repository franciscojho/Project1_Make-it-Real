import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useAlert } from 'react-alert'
import { updateUser } from '../../api'
import { Button, TextField, LoadingOverlay } from '../../components'
import { useAuthContext } from '../../context/auth'
import { USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from '../../reducer/auth'

const Account = () => {
    const { state, dispatch } = useAuthContext()
    const alert = useAlert()

    const { user, token, isLoading } = state

    const handleUserUpdate = async (args) => {
        try {
            dispatch({ type: USER_UPDATE_REQUEST })
            const response = await updateUser(args)
            if (response.user) dispatch({ type: USER_UPDATE_SUCCESS, payload: response.user })
            alert.success('Usuario actualizado correctamente')
        } catch (error) {
            alert.error('Ocurrió un error')
        }
    }

    return (
        <section className="bg-quaternary p-6 row-span-full col-span-8">
            {isLoading && <LoadingOverlay />}
            <div className="flex flex-col bg-tertiary p-6 w-full h-full rounded-md">
                <h2 className="font-bold text-2xl">Configuración de la cuenta</h2>
                <hr className="my-2" />
                <Formik
                    initialValues={{
                        fullName: user?.fullName,
                        email: user?.email,
                        dni: user?.dni,
                        mobile: user?.mobile,
                    }}
                    onSubmit={(values) => {
                        handleUserUpdate({ token, values })
                    }}
                    validationSchema={Yup.object({
                        fullName: Yup.string()
                            .min(3, 'El nombre no puede tener menos de 3 letras')
                            .required('El nombre es requerido'),
                        email: Yup.string().email().required('El correo es requerido'),
                        dni: Yup.string()
                            .matches(/^[0-9]\d{7}$/)
                            .required('El DNI es requerido'),
                        mobile: Yup.string()
                            .matches(/^9\d{8}$/)
                            .required('El DNI es requerido'),
                    })}>
                    {() => (
                        <Form className="flex flex-col gap-y-6 w-2/5">
                            <TextField
                                className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                                label="Nombre"
                                name="fullName"
                            />
                            <TextField
                                className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                                label="Correo"
                                name="email"
                            />
                            <TextField
                                className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                                label="Celular"
                                name="mobile"
                            />
                            <TextField
                                className="py-1 px-2 border-gray-400 border-[1px] rounded-md"
                                label="DNI"
                                name="dni"
                            />
                            <Button
                                className="bg-primary w-full md:max-w-[200px] px-4 py-2 text-tertiary font-bold rounded"
                                type="submit">
                                Guardar
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Account
