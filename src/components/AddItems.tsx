import React from 'react';
import {Menu} from "../App";

interface AddItemsProps {
    menuItems: Menu[];
    addItemToOrder: (menuItem: Menu) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ menuItems, addItemToOrder }) => {
    return (
        <div className="card p-2">
        <h2> Add items</h2>
        <div className="add-items card-body">
            {menuItems.map((menuItem, index) => (
                <button key={index} onClick={() => addItemToOrder(menuItem)} className="d-flex justify-content-between
                btn btn-outline align-items-center">
                    <img src={menuItem.img}/>
                    <p className="me-3">{menuItem.name}</p>
                    <p>{menuItem.price}KGS</p>
                </button>
            ))}
        </div>
        </div>
    );
};

export default AddItems;