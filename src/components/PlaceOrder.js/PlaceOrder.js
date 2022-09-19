import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data));
    }, [productId]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.productId = productId;
        data.productName = product.name;
        data.price = product.price;

        console.log(data);

        // use AXIOS for post into data base
        axios.post('http://localhost:5000/placeOrder', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    swal("Good job!", "Product purchase successfully", "success");
                    reset();
                }
            })
    }
    const { user } = useAuth();
    return (
        <div className="">
            <Header></Header>
            <div className="container text-start py-5">
                <div className="row">
                    <div className="col-md-6 border-end border-2">
                        <img src={product?.img} className="img-fluid img-height mb-5" alt="" />
                        <h5 className="card-title text-color">{product?.name}</h5>
                        <h5 className="text-color"> Price: {product?.price} BDT</h5>
                        <p className="card-text">{product?.description}</p>
                    </div>
                    <div className="col-md-6 border border-success p-3">
                        <h1 className="text-center mb-5 text-color">Fill up the Form to Place Oder</h1>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                                <input className="w-50 mb-3 p-2"  {...register("name")} type="text" value={user.displayName} required />
                                <input className="w-50 mb-3 p-2" {...register("email")} type="email" value={user.email} required />
                                <textarea className="w-50 mb-3 p-2"  {...register("address")} type="text" placeholder="Address" required />
                                <input className="w-50 mb-3 p-2"  {...register("phone")} type="number" placeholder="Phone Number" required />
                                <input className="btn btn-color3 w-50 mb-3" type="submit" value="Place Order" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;