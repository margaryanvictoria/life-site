import React, { useState, useEffect } from 'react';
import CardsList from './CardsList';
import Budget from './Budget';
// import Modal from '../components/Modal';

export default function Content() {
    const [page, setPage] = useState('cards')
    
    // const [modalVisible, setModalVisible] = useState(false); move this one up and use React Context

    // create a modal class that you can just import and send options to and it will handle corresponding logic

    function contentPicker(p) {
        switch(p) {
            case 'cards':
                return <CardsList />
            case 'budget':
                return <Budget />
            default:
                return <></>
        }
    }

    return (
        <div className="flex-grow bg-gray-100 p-4 px-8">
            <button 
                className="border-2 border-blue-300 px-2"
                onClick={()=>{page==='cards' ? setPage('budget') : setPage('cards')}}>Swap Views</button>
            {contentPicker(page)}
        </div>
    );
}