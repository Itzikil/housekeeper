import { useEffect, useState } from "react"
import SearchBar from "../cmps/SearchBar"
import { itemService } from "../services/items-service"
import { supplierService } from "../services/supplier-service"
import { useLocation } from 'react-router-dom';

export const AddItem = () => {
    const [item, setItem] = useState(itemService.getNewItem())
    const [addSupplier, setAddSupplier] = useState(false)
    const params = useLocation()

    useEffect(() => {
        if (params.pathname === '/addSupplier') setAddSupplier(true)
    }, [])

    const onSaveForm = (ev) => {
        ev.preventDefault()
        addSupplier ? supplierService.addSupplier(item) : itemService.addItem(item)
    }

    const handleChange = ({ target }) => {
        let value = target.value
        let name = target.name
        if (name === 'department') setItem({ ...item, 'department': value.id, 'department-name': value.name })
        else setItem({ ...item, [name]: value })
    }

    return (
        <section>
            <h2>{addSupplier ? 'Add Supplier' : 'Add item'}</h2>
            <form onSubmit={onSaveForm} >
                <input name='name' onChange={handleChange} placeholder='name' />
                {addSupplier ?
                    <div>
                        <input name='adress' onChange={handleChange} placeholder='adress' />
                        <input name='phone' onChange={handleChange} placeholder='phone' />
                        <input name='city' onChange={handleChange} placeholder='city' />
                    </div>
                    :
                    <div>
                        <input name='bar-code' onChange={handleChange} placeholder='barcode' />
                        <SearchBar suggestions={itemService.getDepartments()} handleChange={handleChange} placeholder={'department'} name={'department'} />
                    </div>
                }
                <button>Save</button>
            </form>
        </section>
    )
}