import React from 'react';

const CardEdit = () => {
    const { editTopicFunc, getTopicDetails, topicDetails } = useContext(topicsContext)

    const { id } = useParams()

    const [ editTitle, setEditedTitle ] = useState(topicDetails.topicTitle)
    const [ editDesc, setEditedDesc ] = useState(topicDetails.topicDesc)
    const [ editImg, setEditedImg ] = useState(topicDetails.topicImg)
    const [ editLib, setEditedLib ] = useState(topicDetails.topicLib)

    useEffect(() => {
        getTopicDetails(id)
    }, [])

    const handleClick = () => {
        let editedTopic = {
            topicTitle: editTitle,
            topicDesc: editDesc,
            topicImg: editImg,
            topicLib: editLib,
        }
        editTopicFunc(editedTopic, id)
    }

    return (
        <div>
            <input 
                type="text" 
                value={editTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder='Название топика'
            />
            <input 
                type="text" 
                value={editDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
                placeholder='Описание топика'
            />
            <input 
                type="text" 
                value={editLib}
                onChange={(e) => setEditedLib(e.target.value)}
                placeholder='Ссылка на источник'
            />
            <input 
                type="text" 
                value={editImg}
                onChange={(e) => setEditedImg(e.target.value)}
                placeholder='URL изображения'
            />

            <button onClick={handleClick}>Edit</button>
        </div>
    );
};

export default CardEdit;