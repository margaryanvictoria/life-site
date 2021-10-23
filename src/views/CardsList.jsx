import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal'

export default function CardsList() {
    const [uri, setURI] = useState('http://localhost:3004/cards');
    const [cards, setCards] = useState([""]);
    const [modalVisible, setModalVisible] = useState(false);

    const opts = {
        title: 'Add Card',
        description: 'Enter a URL to attempt scraping, or go straight to manual input.'
    }

    useEffect(() => {
        const fetchPosts = async () => {
            // setLoading(true);
            await fetch(uri)
                .then(response => response.json())
                .then(json => setCards(json));
            // setLoading(false);
        };

        fetchPosts();
    }, [uri]);

    return (
        <div>
            <h1 className="text-black text-3xl">Card List</h1>
            <div className="flex flex-row justify-between items-end pb-2 mb-6 border-b-2">
                <p>eventual filter here + add/remove card, option list</p>
                <button className="bg-blue-400 p-2 rounded-sm text-white" onClick={()=>setModalVisible(true)}>Add Card</button>
            </div>
            {modalVisible ?
                <Modal visible={modalVisible} onClose={()=>setModalVisible(false)} opts={opts}/>
                : <></>}
            <div className="flex flex-wrap gap-4 justify-center">
                {cards.map(card => {
                    return <Card data={card} />;
                })}
            </div>
        </div>
    )
}

export function Card({ data }) {
    return (
        <div className="bg-white p-3 rounded-md shadow-sm">
            {/* <div id="picturePlaceholder" className="bg-gray-500 w-24 h-24">pic</div> */}
            <img src={data?.imageUrl} className="w-48 h-48 mb-2" />
            <h2 className="text-2xl">{data.name}</h2>
        </div>
    );
}