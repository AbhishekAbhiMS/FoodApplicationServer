import * as yup from "yup"

export const SinginSchema= yup.object({
        email:yup.string().email().required("please enter valid email"),
        password:yup.string().min(6).required("please enter valid password")
    })
