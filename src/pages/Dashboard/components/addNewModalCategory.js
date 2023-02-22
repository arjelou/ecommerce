import React from 'react';
import { useFormik } from 'formik';
import CategoriesSchema from '../../../schemas/categoriesSchema';
import axios from 'axios';
import { Store } from 'react-notifications-component';

const onSubmit =(values, actions) => {
    axios.post('http://localhost:4002/add-new-category', {
    cname: values.cname,
    cdescription: values.cdescription,
    },
    addCategory()
    )
    .then(res => {
    console.log(res);
    console.log(res.data);
})         
}
const addCategory = () =>{
    Store.addNotification({
        title: "New category was added",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    });
}
const AddNewCategory = () => {
const {values, handleBlur, handleChange,handleSubmit,touched,errors} = useFormik({
    initialValues:{
        cname: '',
        cdescription: ''
    },
    validationSchema: CategoriesSchema,
    onSubmit,
});

return (
<>
<div className="modal fade" id="addNewModalCategory" tabindex="-1" aria-labelledby="addNewModalCategoryLabel" aria-hidden="true">
    <form onSubmit={handleSubmit}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="addNewModalCategoryLabel">Add New Category</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                    <label htmlFor='cname'>Category Name</label>
                    <input 
                    type="text"  
                    name='cname' 
                    id='cname' 
                    placeholder="Category Name"
                    value={values.cname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.cname  && touched.cname ? 'input-error inpuInactive' : 'inpuInactive'}
                    />
                    {/* {errors.cname && touched.cname && <span className='error' htmlFor='cname'>{errors.cname}</span>} */}
                    <br />
                    <label htmlFor='cdescription'>Description</label>
                    <textarea 
                    alue={values.cdescription}
                    type="text" 
                    className="inpuInactive" 
                    name='cdescription' 
                    id='cdescription' 
                    placeholder="Description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
            </div>
            <div className="modal-footer">
                <button type="submit" className="btnDefault" >ADD NEW CATEGORY</button>
            </div>
            </div>
        </div>
    </form>
    </div>
</>
)}

    export default AddNewCategory;
