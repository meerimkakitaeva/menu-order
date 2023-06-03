import React from 'react';
import {Menu} from "../App";
import {OrderItem} from "../App";

interface IOrder {
    orderItems: OrderItem[];
    removeItem: (menuItem: Menu) => void;
    totalPrice: () => number;
}

const Order: React.FC<IOrder> = ({ orderItems, removeItem, totalPrice }) => {
    return (
        <div className="order-details card p-3">
            <h2>Order Details</h2>
            {orderItems.length === 0 ? (
                <p>Order is empty! Please add some items!</p>
            ) : (
                <>
                    <ul className="list-group">
                        {orderItems.map((orderItem, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                <div>
                                    <span className="me-2">{orderItem.item.name}</span>
                                    <span className="me-2">{orderItem.count}x</span>
                                    <span>{orderItem.item.price * orderItem.count} KGS</span>
                                </div>
                                <button onClick={() => removeItem(orderItem.item)} className="btn btn-outline-danger">x</button>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2">Total price: {totalPrice()} KGS</p>
                </>
            )}
        </div>
    );
};

export default Order;