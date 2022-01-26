import { Form } from 'formik'
import LoginField from '../LoginField/LoginField'
import styles from './LoginForm.module.css'

const { flex, width, mAuto } = styles

const LoginForm = () => {
    return (
        <Form className={`${flex} ${width} ${mAuto}`}>
            <LoginField name="firstName" labelName="First Name" />
            <LoginField name="lastName" labelName="Last Name" />
            <LoginField name="email" labelName="Email" />

            <button type="submit">Submit</button>
        </Form>
    )
}

export default LoginForm
