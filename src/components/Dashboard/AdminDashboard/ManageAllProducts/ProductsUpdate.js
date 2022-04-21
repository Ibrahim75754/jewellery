import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductsUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [img, setImg] = useState(null);
    useEffect(() => {
        fetch(`https://agile-everglades-07523.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data));
    }, [id]);

    //Update part

    const chaneName = e => {
        const updateName = e.target.value;
        const update = { name: updateName, description: product.description, price: product.price };
        setProduct(update);

    }
    const chaneDes = e => {
        const updatedes = e.target.value;
        const update = { name: product.name, description: updatedes, price: product.price };
        setProduct(update);
    }
    const chanePrice = e => {
        const updatePrice = e.target.value;
        const update = { name: product.name, description: product.description, price: updatePrice };
        setProduct(update);
    }

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('img', img);

    // console.log(formData);
    const handleUpdate = e => {
        fetch(`http://localhost:5000/products/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update successful')
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <h1>Update Product</h1>
            <div>
                <form onSubmit={handleUpdate} className="d-flex flex-column justify-content-center align-items-center">

                    <input className="w-50 mb-3" type="name" onChange={chaneName} value={product?.name || ''} />
                    <textarea className="w-50 mb-3" onChange={chaneDes} type="text" value={product?.description || ''} />
                    <input className="w-50 mb-3" onChange={chanePrice} type="number" value={product?.price || ''} />
                    <input
                        accept="image/*"
                        type="file"
                        onChange={e => setImg(e.target.files[0])}
                    />
                    <input className="w-50 mb-3" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default ProductsUpdate;