import { Field, ErrorMessage } from 'formik'

const LoginField = ({ name, labelName }) => {
    return (
        <>
            <label htmlFor={name}>{labelName}</label>
            <Field name={name} type="text" />
            <ErrorMessage name={name} component="span" />
        </>
    )
}

export default LoginField
