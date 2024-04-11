import * as yup from "yup";

export const SingupSchema=yup.object({
    name:yup.string().min(2).max(30).required("please enter your name"),
    email:yup.string().email().required("please enter your email"),
    password:yup.string().min(6).required("password require atleast One Uppercase ,lowercase, Integer and Special charecter"),
    conform_password:yup.string().required().oneOf([yup.ref("password"),null],"password must match")
})
// matches(/^(?=.*[A-Z])(?=.*[a-z])(?.=*\\d)"+"(?.=*[_-+!@$%&*,.?]).+$/)