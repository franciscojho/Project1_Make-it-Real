import { Form } from 'formik'
import LoginField from './LoginField'

const LoginForm = () => {
    return (
        <Form>
            <LoginField name="firstName" labelName="First Name" />
            <LoginField name="lastName" labelName="Last Name" />
            <LoginField name="email" labelName="Email" />

            <button type="submit">Submit</button>
        </Form>
    )
}

export default LoginForm
