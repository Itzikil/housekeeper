import { useState } from "react"
import { saveItems } from '../store/actions/item.actions'
import { saveGroups } from '../store/actions/group.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"


export const AddItems = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({name:'' , number:''})
    const params = useLocation ()

    const GroupForm = params.pathname.split('/').pop() === 'myGroups'

    const onSaveForm = (ev)=>{
        ev.preventDefault()
        console.log(form);
        GroupForm ? dispatch(saveGroups(form)) :  dispatch(saveItems(form))
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
           <form onSubmit={onSaveForm} className="flex gap10 align-center">
            <input type="text" name="name" value={form.name} placeholder="name" onChange={handleChange}/>
            <input type="number" name="number" value={form.number} placeholder="importance" onChange={handleChange}/>
            <button data-trans="add">Add</button>
           </form>
        </section>
    )
}