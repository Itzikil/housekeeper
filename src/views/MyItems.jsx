import { useEffect, useState } from "react"
import { AddItems } from "../cmps/AddItems"
import { loadItems, removeItem, updateItem } from '../store/actions/item.actions'
import { loadGroups} from '../store/actions/group.actions'
import { loadSubgroups} from '../store/actions/subgroup.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"
import { i18Service } from '../services/i18n-service';

export const MyItems = () => {
    const dispatch = useDispatch()
    const [form, setform] = useState(false)
    const [ItemEdit, setItemEdit] = useState('')
    const [editable, setEditable] = useState('false')
    const params = useLocation()

    const items = useSelector(state => state.itemModule.items)
    const subgroups = useSelector(state => state.subgroupModule.subgroups)
    const groups = useSelector(state => state.groupModule.groups)

    useEffect(() => {
        sortItems()
    }, [])
    
    const sortItems = async() => {
        if (!groups) await dispatch(loadGroups())
        if (!subgroups)await dispatch(loadSubgroups())
        await dispatch(loadItems())
        i18Service.setLang()
        i18Service.doTrans()
    }
    
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
        console.log('working but too dangerous');
        // dispatch(removeItem(itemId))
    }

    const editItem = () => {
        console.log('working but too dangerous');
        // dispatch(updateItem(ItemEdit))
        // setEditable('')
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
    }

    return (
        <section className="myItems-container">
            <h2>items</h2>
            <h4>הערה5: כרגע מוצגים כל הילדים, אין פונקציות מעניינות בדף הזה</h4>
            <button onClick={openForm}>{form ? 'Close inputs' : 'Add items'}</button>
            {form ? <div className="add-form">
                <AddItems />
            </div>
                : ''}
            <ul className="items-ul">
                {items?.map((item) =>
                    <li key={item?._id} className="item-li">
                        <button className="main-item" data-trans={item?.name}>{item?.name}</button>
                        <div className="btn-container">
                            <button onClick={() => openEdit(item)} data-trans="add" className="add-btn btn">add</button>
                            <button onClick={() => openEdit(item)} data-trans="update" className="update-btn btn">{item._id === editable ? 'Close Edit' : 'update'}</button>
                            <button onClick={() => removeItems(item._id)} data-trans="delete" className="delete-btn btn">delete</button>
                            {editable === item?._id ? <div className="edit-container">
                                <input type="text" name="name" value={ItemEdit.name} onChange={handleChange} placeholder="name" />
                                <input type="text" name="number" value={ItemEdit.number} onChange={handleChange} placeholder="number" />
                                <button onClick={editItem} className="change-btn">Change</button>
                            </div>
                                : ''}
                        </div>
                    </li>
                )}
            </ul>
            {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
        </section>
    )
}