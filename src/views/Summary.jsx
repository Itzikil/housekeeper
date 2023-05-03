import { useState } from "react"
import { billService } from "../services/bill-service"
import { itemService } from "../services/items-service"

export const Summary = () => {
    const [currItems, setCurrItems] = useState()
    const [currFilteredItems, setCurrFilteredItems] = useState()
    const [productName, setProductName] = useState()

    const handleChange = ({ target }) => {
        let value = target.value
        const field = target.name
        if (field === "name") {
            setCurrItems(billService.getItemSummary(value))
            setCurrFilteredItems(billService.getItemSummary(value))
            var item = itemService.getItemById(value)
            setProductName(item?.name)
        } else {
            setCurrFilteredItems(billService.filterByDays(currItems, value))
        }
    }

    return (
        <section className="summary-section">
            <h2 data-trans="summary">Summary</h2>
            <form >
                <input type="text" list="items" name="name" onChange={handleChange} placeholder="Choose item" className="input"/>
                <datalist id="items">
                    {itemService.loadItems().map(item =>
                        <option value={item["bar-code"]} name={item.name} key={item._id}>{item.name}</option>
                    )}
                </datalist>
                <select onChange={handleChange} name="date" className="input">
                    <option value="9999999">Anytime</option>
                    <option value="7">1 week ago</option>
                    <option value="30">1 month ago</option>
                    <option value="90">3 month ago</option>
                    <option value="180">6 month ago</option>
                    <option value="365">1 year ago</option>
                </select>
            </form>
            {currFilteredItems && (currFilteredItems?.length) ?
                <h3>Total: ₪ {currFilteredItems?.reduce((acc, item) => acc + (item.price * item.quantity), 0)?.toFixed(2)} On '{productName}'</h3>
                : <h3>Didnt bought that product yet</h3>}
            <div >
                {currFilteredItems?.map((item, idx) =>
                    <p key={item._id + idx}> <span data-trans="date"> date</span>: {item.date} <span data-trans="quantity">quantity</span>: {item.quantity} <span data-trans="price"> price</span>: ₪{item.price} <span data-trans="total"> total</span>: ₪{(item.quantity * item.price).toFixed(2)} RN {item['reference number']}</p>
                )}
            </div>
        </section >
    )
}