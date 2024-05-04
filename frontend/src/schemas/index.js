import * as yup from "yup"

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email:yup.string().email("Please enter a vaild email").required("Required")
    ,
    age: yup.number().positive().integer().required("Required"),
    password:yup.string().min(5).required("Required"),
    // password:yup.string().min(5).matches(passwordRules ,{message:"Please create a stronger password"}).required("Required"),

    // confirmPassword:yup.string("password must match").required("Required")
    // confirmPassword:yup.string().oneOf([yup.ref('password'),null],"password must match").required("Required")

})

export const signupSchema = yup.object().shape({
    username:yup.string().required("Required"),
    email:yup.string().email("Please enter a vaild email").required("Required"),
    password:yup.string().required("Required")


})

export const loginSchema = yup.object().shape({
    email:yup.string().email("Please enter a vaild email").required("Required"),
    password:yup.string().required("Required")

    
})

export const contactSchema = yup.object().shape({

    name:yup.string().required("Required"),
    email:yup.string().email("Please enter a vaild email").required("Required"),
    phone:yup.number().positive().integer().required("Required"),
    getInTouch:yup.string().required("Required"),
    message:yup.string().required("Required"),
    



})