import { useEffect, useState } from "react"
import { itemService } from "../service/item-service.js"
import { AddItems } from "../cmps/AddItems"
import { loadItems, removeItem , updateItem} from '../store/actions/item.actions'
import { useDispatch, useSelector } from 'react-redux'

export const MyItems = () => {
    const dispatch = useDispatch()
    const [form, setform] = useState(false)
    const [ItemEdit, setItemEdit] = useState('')
    const [editable, setEditable] = useState('false')
    const items = useSelector(state => state.itemModule.items)

    useEffect(() => {
        dispatch(loadItems())
    }, [])

    const openForm = () => {
        setform(!form)
    }

    const openEdit = (item) => {
        if (item._id === editable) setEditable('')
        else {
            setEditable(item._id)
            setItemEdit(item)
        }
    }

    const removeItems = (itemId) => {
        dispatch(removeItem(itemId))
    }

    const editItem = () => {
        dispatch(updateItem(ItemEdit))
    }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }
        setItemEdit(ItemEdit => ({ ...ItemEdit, [field]: value }))
        console.log(ItemEdit);
    }

    return (
        <section>
            <h2>group</h2>
            <button onClick={openForm}>{form ? 'Close inputs' : 'Add group'}</button>
            {form ? <AddItems /> : ''}
            <ul>
                {items?.map((item) =>
                    <li key={item?._id}>
                        <button>{item?.name}</button>
                        <button onClick={() => removeItems(item._id)}>Remove</button>
                        <button onClick={() => openEdit(item)}>{item._id === editable ? 'Close Edit' : 'Edit'}</button>
                        {editable === item?._id ? <div>
                            <input type="text" name="name" value={ItemEdit.name} onChange={handleChange} />
                            <input type="text" name="number" value={ItemEdit.number} onChange={handleChange} placeholder="number"/>
                            <button onClick={editItem}>Change</button>
                        </div>
                            : ''}
                    </li>
                )}
            </ul>
            {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
        </section>
    )
}