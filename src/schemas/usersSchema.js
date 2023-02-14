import * as yup from "yup";


const usersSchema = yup.object().shape({
    fullname: yup.string().required('Required'),
    email: yup.string().email('Please enter a valid email!').required('Required'),
    company: yup.string(),
    totalEmployee: yup.number().positive().integer().min(0),
    zipcode: yup.string('This is not a valid number!').required('Required'),
    password: yup.string().min(5).max(32).required('Required'),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null],'Password did not match!').required('required'),
})


export default usersSchema;