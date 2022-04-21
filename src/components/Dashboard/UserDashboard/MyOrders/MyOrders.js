import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://agile-everglades-07523.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);

    let Id = 1;
    const handleDelete = id => {
        const areUsure = window.confirm('Are You Sure, Want To Delete?');
        if (areUsure) {
            fetch(`https://agile-everglades-07523.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert('Delete Successful');
                        const remaining = orders.filter(product => product._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h1>Your Orders</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(product => <tr>
                                <th scope="row">{Id++}</th>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.phone}</td>
                                <td>{product.address}</td>
                                <td>{product.payment ? "Paid" : <Link to={`/dashboard/payment/${product._id}`}><button className="btn btn-secondary">Pay Now</button></Link>}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Cancel Order</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;