import React, { useState } from 'react';
import './App.css';
import Order from './components/Order';
import AddItems from './components/AddItems';
import cheeseburgerImg from './assets/cheeseburger.jpg';
import teaImg from './assets/tea.jpg';
import hamburgerImg from './assets/hamburger.jpg';
import colaImg from './assets/cola.jpg';
import friesImg from './assets/fries.jpg';
import coffeeImg from './assets/coffee.jpg';

export interface Menu {
    name: string;
    price: number;
    img: string;
}

export interface OrderItem {
    item: Menu;
    count: number;
}

const menuItems: Menu[] = [
    { name: 'Hamburger', price: 80, img: hamburgerImg },
    { name: 'Cheeseburger', price: 90, img: cheeseburgerImg },
    { name: 'Fries', price: 45, img: friesImg },
    { name: 'Coffee', price: 70, img: coffeeImg },
    { name: 'Tea', price: 50, img: teaImg },
    { name: 'Cola', price: 40, img: colaImg },
];

const App: React.FC = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    const addItemToOrder = (Menu : Menu) => {
        let currItem;
        for (let i = 0; i < orderItems.length; i++) {
            if (orderItems[i].item.name === Menu.name) {
                currItem = orderItems[i];
                break;
            }
        }

        if (currItem) {
            setOrderItems(
                orderItems.map(item =>
                    item.item.name === Menu.name ? { ...item, count: item.count + 1 } : item
                )
            );
        } else {
            setOrderItems([...orderItems, { item: Menu, count: 1 }]);
        }
    };

    const removeItem = (Menu : Menu) => {
        let currIndex = -1;
        for (let i = 0; i < orderItems.length; i++) {
            if (orderItems[i].item.name === Menu.name) {
                currIndex = i;
                break;
            }
        }

        if (currIndex !== -1) {
            const orderItemsCopy = [...orderItems];
            if (orderItems[currIndex].count === 1) {
                orderItemsCopy.splice(currIndex, 1);
            } else {
                orderItemsCopy[currIndex] = {
                    ...orderItems[currIndex],
                    count: orderItems[currIndex].count - 1,
                };
            }
            setOrderItems(orderItemsCopy);
        }
    };
    const totalPrice = () => {
        return orderItems.reduce((total, item) => total + item.item.price * item.count, 0);
    };

    return (
        <div className="menu-order">
            <Order orderItems={orderItems} removeItem={removeItem} totalPrice={totalPrice} />
            <AddItems menuItems={menuItems} addItemToOrder={addItemToOrder} />
        </div>
    );
};

export default App;