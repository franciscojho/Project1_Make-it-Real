import { Formik } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-modal'
import AdForm from './AdForm'

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

const CustomModal = ({ handleSave, selectedAd, setSelectedAd, setOpen, open }) => {
    const handleCloseModal = () => {
        setOpen(false)
        setSelectedAd({})
    }
    return (
        <Modal isOpen={open} style={customStyles}>
            <Formik
                initialValues={{
                    name: selectedAd.name || '',
                    expirationDate: selectedAd.expirationDate || '',
                    rate: selectedAd.rate || 0,
                    frequency: selectedAd.frequency || '',
                    lunchIncluded: selectedAd.lunchIncluded || false,
                    fareIncluded: selectedAd.fareIncluded || false,
                    description: selectedAd.description || '',
                    region: selectedAd.region || '',
                    province: selectedAd.province || '',
                    city: selectedAd.city || '',
                    addressReference: selectedAd.addressReference || '',
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
            <button className="absolute top-0 right-4" onClick={handleCloseModal}>
                x
            </button>
        </Modal>
    )
}

export default CustomModal
