import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required'),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email address is required'),
    password: yup
        .string()
        .required('Password address is required')
        .min(8, 'Password must be at least 8 characters long'),
    termsofservice: yup
        .boolean()
        .oneOf([true,'Must accept terms and conditions'])
});

export default formSchema;