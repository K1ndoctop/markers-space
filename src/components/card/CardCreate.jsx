import React, { useState } from 'react';

const CardCreate = ({ CardCreate }) => {
    const [title, setTitle] = useState();
    const [number, setNumber] = useState();
    const [desc, setDesc] = useState();
    const [image, setImage] = useState();

    function handleAdd() {
        if(!title || !number || !desc || !image) {
            alert('Some inputs are empty!');
        return;
        }
        let newAdd = {
            title, 
            number, 
            desc, 
            image
        };

        CardCreate(newAdd);
        setTitle();
        setNumber();
        setDesc();
        setImage();
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder='Number' 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder='Description' 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder='Image' 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default CardCreate;