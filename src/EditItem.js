import {useState} from "react";

function EditItem(props) {

    const [name, setName] = useState(props.item.name)
    const [description, setDescription] = useState(props.item.description)
    const [price, setPrice] = useState(props.item.price)

    const [openInput, setOpenInput] = useState(false)

    const toggle = () => {
        setOpenInput(!openInput)
    }

    const saveButtonHandler = () => {
        props.editItem(props.item._id, {
            name,
            description,
            price
    })
        toggle()
    }

    return (
        <div>
            {!openInput &&
            <div color="primary" onClick={toggle}>
                ● ● ●
            </div>}

            {openInput &&
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>


                <button color="primary" variant="outlined" onClick={saveButtonHandler}>Save</button>
            </div>
            }
        </div>
    )
}

export default EditItem