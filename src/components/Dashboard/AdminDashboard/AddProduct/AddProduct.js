import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('img', data.img[0]);
        console.log(formData);
        // use AXIOS for post into data base
        axios.post('https://agile-everglades-07523.herokuapp.com/products', formData)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <h1>Add A Product</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <input className="w-50 mb-3 p-2" {...register("name")} type="name" placeholder="Package Name" required />
                    <textarea className="w-50 mb-3 p-2"  {...register("description")} type="text" placeholder="Description" required />
                    <input className="w-50 mb-3 p-2"  {...register("price")} type="number" placeholder="Price" required />
                    <input className="w-50 mb-3 p-2"  {...register("img")} accept="image/*" type="file" required />
                    <input className="btn btn-success w-50 mb-3 p-2" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;