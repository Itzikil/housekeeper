import { useState } from "react"
import { itemService } from "../service/item-service.js"
import { saveItems } from '../store/actions/item.actions'
import { useDispatch, useSelector } from 'react-redux'


export const AddItems = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({name:'' , number:''})

    const onSaveForm = (ev)=>{
        ev.preventDefault()
        dispatch(saveItems(form))
        setForm({name:'' , number:''})
    }
    
    const handleChange = ({target})=>{
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
        setForm(form => ({...form , [field]: value}))
    }


    return (
        <section>
           <form onSubmit={onSaveForm}>
            <input type="text" name="name" value={form.name} placeholder="name" onChange={handleChange}/>
            <input type="number" name="number" value={form.number} placeholder="importance" onChange={handleChange}/>
            <button >Add</button>
           </form>
        </section>
    )
}