import * as yup from "yup";

const categoriesSchema = yup.object().shape({
    cname: yup.string().required('Required'),
    cdescription: yup.string()
})

export default categoriesSchema;