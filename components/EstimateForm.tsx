// import React from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
//
// interface IFormInput {
//     firstName: string;
//     lastName: string;
//     email: string;
//     address: string;
//     city: string;
//     zipCode: string;
//     state: string;
//     phone: string;
//     contactMethod: string;
//     serviceType: string;
//     heardAboutUs: string;
//     promoCode?: string;
// }
//
// const EstimateForm: React.FC = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
//
//     const onSubmit: SubmitHandler<IFormInput> = data => {
//         // Submit form data
//         console.log(data)
//     }
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="form">
//             <input {...register("firstName", { required: true })} placeholder="First Name" />
//             {errors.firstName && <p className="error">First name is required</p>}
//
//             <select {...register("contactMethod", { required: "Please select a contact preference" })}>
//                 <option value="">How would you like us to contact you?</option>
//                 <option value="email">Email</option>
//                 <option value="phone">Phone</option>
//                 {/* Add other contact preferences if necessary */}
//             </select>
//             {errors.contactMethod && <p className="error">{errors.contactMethod.message}</p>}
//
//             <select {...register("serviceType", { required: "Please select a service type" })}>
//                 <option value="">Are you interested in Residential or Commercial services?</option>
//                 <option value="residential">Residential</option>
//                 <option value="commercial">Commercial</option>
//                 {/* Add other service types if necessary */}
//             </select>
//             {errors.serviceType && <p className="error">{errors.serviceType.message}</p>}
//
//             {/* ...repeat for other dropdown fields if necessary... */}
//
//             <button type="submit">Submit</button>
//         </form>
//     )
// }
//
// export default EstimateForm
