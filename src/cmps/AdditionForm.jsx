import { useEffect, useState } from "react"
import { billService } from "../services/bill-service"
import { itemService } from "../services/items-service"
import { supplierService } from "../services/supplier-service"

export const AdditionForm = ({ refresh }) => {
    const [form, setForm] = useState(billService.getEmptyBill())
    const [itemsLine, setItemsLine] = useState(billService.getItemsLine())

    // useEffect(() => {
    //     console.log(form)
    // }, [form])

    const onSaveForm = (ev) => {
        ev.preventDefault()
        if (!form.supplier._id) return
        form.items = itemsLine
        billService.addBill(form)
        setForm(billService.getEmptyBill())
        refresh()
    }

    const addItemLine = () => {
        const line = billService.getItemsLine()
        setItemsLine([...itemsLine, ...line])
    }

    const removeItemLine = (idx) => {
        console.log(idx);
        var lines = [...itemsLine]
        lines.splice(idx, 1)
        // lines[idx]._id = ''
        console.log(lines);
        setItemsLine(lines)
    }

    const handleChange = ({ target }, idx) => {
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
        console.log(field);
        if (idx || idx === 0) {
            itemsLine[idx][field] = value
        }
        else if (field === 'supplier') form.supplier._id = value
        else form[field] = value

        setForm(form => ({ ...form }))
    }

    return (
        <div className="additionForm">
            <form onSubmit={onSaveForm} >
                <div className="input-container">
                    <select onChange={handleChange} name="supplier" className="input">
                        <option>Choose supplier</option>
                        {supplierService.loadSuppliers().map((supplier, idx) =>
                            <option key={supplier._id + idx} value={supplier._id}>{supplier.name}</option>
                        )}
                    </select>
                    <input type="date" onChange={handleChange} value={form.date} name="date" className="input"/>
                    <input type="number" onChange={handleChange} value={form.total} name="total" placeholder="Total" className="input"/>
                    <input type="text" onChange={handleChange} value={form['reference number']} name="reference number" placeholder="Reference number" className="input"/>
                </div>
                <label>Items</label>
                <div className="flex column gap20">
                    {itemsLine.map((item, idx) =>
                        <div className="flex gap10 wrap" key={idx}>
                            <button onClick={() => removeItemLine(idx)} className="input">X</button>
                            <select onChange={(ev) => handleChange(ev, idx)} name="_id" className="input select-item">
                                <option>Choose item</option>
                                {itemService.loadItems().map((item, idx) =>
                                    <option key={item._id + idx} value={item._id}>{item.name}</option>
                                )}
                            </select>
                            {/* <input type="text" onChange={(ev) => handleChange(ev, idx)} value={item.name} name="name" placeholder="Item name" /> */}
                            <input type="number" onChange={(ev) => handleChange(ev, idx)} value={item.quantity} name="quantity" placeholder="Quantity" className="input"/>
                            <input type="number" onChange={(ev) => handleChange(ev, idx)} value={item.price} name="price" placeholder="Price per 1" className="input"/>
                            <p>₪{item.quantity * item.price}</p>
                        </div>
                    )}
                </div>
                <button type="button" onClick={addItemLine}>Add more item</button>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}