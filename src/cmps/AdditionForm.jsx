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

        if (idx || idx === 0) {
            itemsLine[idx][field] = value
        }
        else form.supplier._id = value

        setForm(form => ({ ...form }))
    }

    return (
        <div>
            <form onSubmit={onSaveForm} className="flex column align-center">
                <label>Supplier</label>
                <select onChange={handleChange} name="supplier">
                    <option>Choose supplier</option>
                    {supplierService.loadSuppliers().map((supplier, idx) =>
                        <option key={supplier._id + idx} value={supplier._id}>{supplier.name}</option>
                    )}
                </select>
                <label>Items</label>
                <div className="flex column gap10">
                    {itemsLine.map((item, idx) =>
                        <div className="flex gap10" key={idx}>
                            <select onChange={(ev) => handleChange(ev, idx)} name="_id">
                                <option>Choose item</option>
                                {itemService.loadItems().map((item, idx) =>
                                    <option key={item._id + idx} value={item._id}>{item.name}</option>
                                )}
                            </select>
                            {/* <input type="text" onChange={(ev) => handleChange(ev, idx)} value={item.name} name="name" placeholder="Item name" /> */}
                            <input type="number" onChange={(ev) => handleChange(ev, idx)} value={item.quantity} name="quantity" placeholder="Quantity" />
                            <input type="number" onChange={(ev) => handleChange(ev, idx)} value={item.price} name="price" placeholder="Price per 1" />
                            <button onClick={() => removeItemLine(idx)}>X</button>
                        </div>
                    )}
                </div>
                <button>Add</button>
            </form>
            <button onClick={addItemLine}>Add more item</button>
        </div>
    )
}