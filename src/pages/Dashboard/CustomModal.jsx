import { Formik } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-modal'
import AdForm from './AdForm'
import useForm from '../../hooks/useForm'
import { useModalContext } from '../../context/modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '50%',
        height: '80%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root')

const CustomModal = () => {
    const { handleCreateAd, handleUpdateAd } = useForm()
    const { selected, open, handleModal } = useModalContext()

    const handleSave = (values) => {
        if (values && !selected.id) {
            handleCreateAd(values)
        }

        if (values && selected.id) {
            handleUpdateAd(values, selected.id)
        }
    }

    return (
        <Modal isOpen={open} style={customStyles}>
            <Formik
                initialValues={{
                    name: selected.name || '',
                    expirationDate: selected.expirationDate || '',
                    rate: selected.rate || 0,
                    frequency: selected.frequency || '',
                    lunchIncluded: selected.lunchIncluded || false,
                    fareIncluded: selected.fareIncluded || false,
                    description: selected.description || '',
                    region: selected.region || '',
                    province: selected.province || '',
                    city: selected.city || '',
                    addressReference: selected.addressReference || '',
                }}
                onSubmit={(values) => {
                    handleSave(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('El nombre del anuncio es requerido'),
                    expirationDate: Yup.date()
                        .min(new Date(), 'La fecha debe ser mayor a la fecha actual')
                        .required('La fecha de expiración es requerida'),
                    rate: Yup.number()
                        .min(1, 'El monto mínimo debe ser mayor a 0')
                        .required('La tarifa del anuncio es requerido'),
                    frequency: Yup.string().required('La frecuencia del anuncio es requerido'),
                    lunchIncluded: Yup.boolean(),
                    fareIncluded: Yup.boolean(),
                    description: Yup.string().required('La descripción del anuncio es requerida'),
                    region: Yup.string().required('El departamento es requerido'),
                    province: Yup.string().required('La provincia es requerida'),
                    city: Yup.string().required('La ciudad es requerida'),
                    addressReference: Yup.string().required(
                        'La dirección de referencia es requerida'
                    ),
                })}>
                {() => <AdForm />}
            </Formik>
            <button className="absolute top-0 right-4" onClick={handleModal}>
                x
            </button>
        </Modal>
    )
}

export default CustomModal
