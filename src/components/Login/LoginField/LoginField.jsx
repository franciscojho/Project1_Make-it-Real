import { Field, ErrorMessage } from 'formik'

const LoginField = ({ name, labelName }) => {
    return (
        <div>
            <label htmlFor={name}>{labelName}</label>
            <Field name={name} type="text" />
            <ErrorMessage name={name} component="span" />
        </div>
    )
}

export default LoginField
