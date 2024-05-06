import { useState, useCallback } from 'react';
import ItemList from '../components/ItemList';

export default function Home() {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');

    const onHandler = useCallback(() => {

        setItems((prevItem) => [...prevItem, `Item ${prevItem.length + 1}`]);

        setMessage("Item added successfully!");
        setTimeout(() => {
            setMessage("");
        }, 3000);

    }, [])

    return (
        <div>
            <button onClick={onHandler}>Add Item</button>
            <ItemList items={items} />
            {message && <p id='message'>{message}</p>}
        </div>
    );
}
