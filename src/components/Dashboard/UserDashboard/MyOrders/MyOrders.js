import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email]);

    let Id = 1;
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Order has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = orders.filter(product => product._id !== id);
                                setOrders(remaining);
                            }
                        })

                }
                else {
                    swal("Order is safe!");
                }
            });

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