import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // //console.log(data);
        // use AXIOS for post into data base
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                // //console.log(res);
                if (res.data.insertedId) {
                    swal("Good job!", "Product insert successfully", "success");
                    reset();
                }
            })
    };
    return (
        <div>
            <div className="container py-5">
                <h1 className="text-center mb-5">Add a New Package</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                        <input className="w-50 mb-3"  {...register("img")} type="text" placeholder="image URL" required />
                        <input className="w-50 mb-3" {...register("name")} type="name" placeholder="Package Name" required />
                        <textarea className="w-50 mb-3"  {...register("description")} type="text" placeholder="Description" required />
                        <input className="w-50 mb-3"  {...register("price")} type="number" placeholder="Price" required />
                        
                        <input className="w-50 mb-3" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;