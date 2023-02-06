import * as yup from "yup";


const usersSchema = yup.object().shape({
    email: yup.string().email().required('Required'),
    company: yup.string(),
    totalEmployee: yup.number().positive(),
    zipcode: yup.string().required('Required'),
    password: yup.string().min(6).max(32).required('Required'),
    confirmpassword: yup.string().oneOf('password').required('required'),
})


export default usersSchema;