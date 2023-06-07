import { useEffect, useState } from "react"
import { billService } from "../services/bill-service"
import { itemService } from "../services/items-service"
import { i18Service } from "../services/i18n-service"
import { utilsService } from "../services/utils-service"

export const Summary = () => {
    const [currItems, setCurrItems] = useState()
    const [currFilteredItems, setCurrFilteredItems] = useState()
    const [productName, setProductName] = useState()

    useEffect(() => {
        translate()
    }, [])

    const translate = () => {
        i18Service.doTrans()
    }

    const handleChange = ({ target }) => {
        let value = target.value
        const field = target.name
        if (field === "name") {
            var setItem = billService.getItemSummary(value)
            setCurrItems(setItem)
            var item = itemService.getItemById(value)
            setProductName(item?.name)
        } else if (field === "group") {
            var setItem = billService.getItemSummary(null, value)
            setCurrItems(setItem)
            var group = billService.getGroupById(value)
            setProductName(group["group-name"])
        } else {
            var setItem = billService.filterByDays(currItems, value)
            // setCurrFilteredItems(billService.filterByDays(currItems, value))
        }
        setCurrFilteredItems(setItem)
    }

    return (
        <section className="summary-section">
            <h2 data-trans="summary">Summary</h2>
            <select onChange={handleChange} name="date" className="input">
                <option value="9999999">Anytime</option>
                <option value="7">1 week ago</option>
                <option value="30">1 month ago</option>
                <option value="90">3 month ago</option>
                <option value="180">6 month ago</option>
                <option value="365">1 year ago</option>
            </select>
            <form >
                <input type="text" list="items" name="name" onChange={handleChange} placeholder="Choose item" className="input" />
                <datalist id="items">
                    {itemService.loadItems().map(item =>
                        <option value={item["bar-code"]} name={item.name} key={item._id}>{item.name}</option>
                    )}
                </datalist>
                <input type="text" list="groups" placeholder="find with group number" name="group" onChange={handleChange} className="input" />
                <datalist id="groups">
                    {billService.loadGroups().map((group, idx) =>
                        <option value={group["group-code"]} name={group["group-name"]} key={group["group-code"] + idx}>{group["group-name"]}</option>
                    )}
                </datalist>
            </form>
            {currFilteredItems && (currFilteredItems?.length) ?
                <h3><span data-trans="Total">Total</span> : {currFilteredItems?.reduce((acc, item) => acc + (item.price * item.quantity), 0)?.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })} <span data-trans="On">  On </span> '{productName}'</h3>
                // <h3><span data-trans="Total">Total</span> : ₪{currFilteredItems?.reduce((acc, item) => acc + (item.price * item.quantity), 0)?.toFixed(2)} <span data-trans="On">  On </span> '{productName}'</h3>
                : <h3>Didnt bought that product yet</h3>}
            {currFilteredItems && <div>
                <div className='flex space-between flex1 align-center justify-center '>
                    <p className='text-start bold' data-trans="Date">Date</p>
                    <p className='text-start bold' data-trans="Name">Name</p>
                    <p className='text-start bold' data-trans="Supplier">Supplier</p>
                    <p className='text-start bold' data-trans="RN">RN</p>
                    <p className='text-start bold' data-trans="Price">Price</p>
                    <p className='text-start bold' data-trans="Quantity">Quantity</p>
                    <p className='text-start bold' data-trans="Total">Total</p>
                </div>
                {currFilteredItems?.map((item, idx) =>
                    <div key={idx + item._id}>
                        <div className='flex space-between flex1 align-center justify-center '>
                            <p className='text-start'>{utilsService.setDate(item.date)}</p>
                            <p className='text-start'>  {item.name}</p>
                            <p className='text-start'>  {item.supplier.name}</p>
                            <p className='text-start'>  {item['reference number']}</p>
                            {item.price && <p className='text-start'>₪{item.price.toFixed(2)}</p>}
                            <p className='text-start'>{item.quantity % 1 === 0 ? (item.quantity) : item.quantity?.toFixed(3)}</p>
                            <p className='text-start'>₪{(item.price * item.quantity)?.toFixed(2)}</p>
                        </div>
                        {/* <p key={item._id + idx}> <span data-trans="date"> date</span>: {item.date} <span data-trans="quantity">quantity</span>: {item.quantity} <span data-trans="price"> price</span>: ₪{item.price} <span data-trans="total"> total</span>: ₪{(item.quantity * item.price).toFixed(2)} RN {item['reference number']}</p> */}
                    </div>
                )}
            </div>}
        </section >
    )
}