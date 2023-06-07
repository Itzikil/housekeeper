import { useEffect, useState } from 'react'
import { billService } from '../services/bill-service'
import { supplierService } from '../services/supplier-service'
import { itemService } from '../services/items-service'
import { i18Service } from '../services/i18n-service'
import { AdditionForm } from '../cmps/AdditionForm'
import { utilsService } from '../services/utils-service'

export const Bills = () => {
    
    const [bills, setBills] = useState(billService.loadBills())
    const [openDev, setOpenDev] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [itemOpen, setItemOpen] = useState()
    const [refresh, setResfresh] = useState(1)
    
    useEffect(() => {
        translate()
    }, [itemOpen])

    const translate = () => {
        i18Service.doTrans()
    }

    // just until localstorage////////
    useEffect(() => {
        setBills(billService.loadBills())
    }, [refresh])

    const refreshing = () => {
        var num = refresh
        setResfresh(++num)
    }
    ////////////////////////////////

    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    const toggleForm = () => {
        setOpenForm(!openForm)
    }

    const openItem = (itemId) => {
        itemOpen === itemId ? setItemOpen(false) : setItemOpen(itemId)
    }

    const onChangeFilter = ({ target }) => {
        let value = target.value
        setBills(billService.loadBills(value))
    }

    var currSupplier
    var currItem
    return (
        <section className='bill-section'>
            <h2 data-trans="bills">bills</h2>
            <input type="text" onChange={onChangeFilter} className="input" placeholder='search supplier'/>
            <button onClick={toggleForm}>{!openForm ? <span data-trans="Add new bill"> Add new bill </span> : <span data-trans="Close form"> Close form </span>}</button>
            {openForm && <AdditionForm refresh={refreshing} />}

            {/* <ul className="list"> */}
            <ul className="items-list">
                {bills.map(bill => {
                    { currSupplier = supplierService.getSupplierById(bill.supplier._id) }
                    return <li key={bill._id} className="bill-receipte">
                        <div className='flex align-center gap10'>
                            <p>{utilsService.setDate(bill.date)}</p>
                            <button onClick={() => openItem(bill._id)}>{currSupplier?.name}</button>
                        </div>
                        {itemOpen === bill._id && <div>
                            <div className='bill-head'>
                                <h3>{currSupplier.name}</h3>
                                <p>{utilsService.setDate(bill.date)}</p>
                                <p><span data-trans="Reference number"> Reference number</span> {bill['reference number']}</p>
                                {/* <p><span data-trans="city">city</span> {currSupplier.city}</p>
                                <a href="tel:054-260-9225">{currSupplier.phone}</a> */}
                            </div>
                            <div className='bill-body'>
                                <div className='flex space-between flex1 align-center justify-center '>
                                    <p className='text-start bold' data-trans="Name">Name</p>
                                    <p className='text-center bold' data-trans="Quantity">Quantity</p>
                                    <p className='text-center bold' data-trans="Price">Price</p>
                                    <p className='text-end bold' data-trans="Total">Total</p>
                                </div>
                                {bill.items.map((item, idx) => {
                                    { currItem = itemService.getItemById(item._id) }
                                    return <div key={item._id + idx}>
                                        <div className='flex space-between flex1 align-center justify-center '>
                                            <p className='text-start'>{currItem?.name}</p>
                                            <p className='text-center'>{item.quantity % 1 === 0 ? (item.quantity) : item.quantity?.toFixed(2)}</p>
                                            {item.price && <p className='text-center'>₪{item.price.toFixed(2)}</p>}
                                            <p className='text-end'>₪{(item.price * item.quantity)?.toFixed(2)}</p>
                                        </div>
                                        {/* {item.quantity < 1 && <p>₪{item.price} <span data-trans="to"> to</span> 1</p>} */}
                                    </div>
                                })}
                            </div>
                            <div className='flex space-between'>
                                <h3 data-trans="Total">Total</h3>
                                <h3>₪{(bill.items.reduce((acc, item) => acc + ((item.price * item.quantity) - item.discount), 0) - bill.discount )?.toFixed(2)}</h3>
                            </div>
                        </div>}
                    </li>
                }
                )}
            </ul>
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev &&
                <pre >
                    {JSON.stringify(bills, null, 2)}
                </pre>
            }
        </section>
    )
}