import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Prosucts.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
                setProducts(data));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="">Our Popular Products</h1>
            <p className="pb-3">Jewellery is one of the oldest types of archaeological artefact – with 100,000-year-old beads made from Nassarius shells thought to be the oldest.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.slice(0, 6).map(product => <div className="col text-start">
                        <div className="card h-100 border-0 card-custom">
                            <div className="card-img">
                                <img src={product.img} className="card-img-top img-height p-3" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}...</p>
                                <div className="d-flex justify-content-between">
                                    <h4 className='text-color'>{product.price} BDT</h4>
                                    {/* <button className='btn btn-color3'>Add To Cart</button> */}
                                    <Link to={`/home/${product._id}`}><button className='btn btn-color3'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Products;