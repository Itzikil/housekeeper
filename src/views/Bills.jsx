import { useEffect, useState } from 'react'
import { billService } from '../services/bill-service'
import { supplierService } from '../services/supplier-service'
import { itemService } from '../services/items-service'
import { i18Service } from '../services/i18n-service'
import { AdditionForm } from '../cmps/AdditionForm'

export const Bills = () => {
    useEffect(() => {
        translate()
    }, [])


    const translate = () => {
        i18Service.doTrans()
    }

    const [bills, setBills] = useState(billService.loadBills())
    const [openDev, setOpenDev] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [itemOpen, setItemOpen] = useState()
    const [refresh, setResfresh] = useState(1)

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

    var currSupplier
    var currItem
    return (
        <section>
            <h2 data-trans="bills">bills</h2>
            <ul className="items-list">
                {bills.map(bill => {
                    { currSupplier = supplierService.getSupplierById(bill.supplier._id) }
                    return <li key={bill._id} className="bill-receipte">
                        <button onClick={() => openItem(bill._id)}>{currSupplier.name}</button>
                        {itemOpen === bill._id && <div>
                            <div className='bill-head'>
                                <h3>{currSupplier.name}</h3>
                                <p>{bill.date}</p>
                                <p>Reference number {bill['reference number']}</p>
                                {/* <p><span data-trans="city">city</span> {currSupplier.city}</p>
                                <a href="tel:054-260-9225">{currSupplier.phone}</a> */}
                            </div>
                            <div className='bill-body'>
                                <div className='flex space-between flex1 align-center justify-center '>
                                    <p className='text-start'>Name</p>
                                    <p className='text-center'>Quantity</p>
                                    <p className='text-center'>Price</p>
                                    <p className='text-end'>Total</p>
                                </div>
                                {bill.items.map(item => {
                                    { currItem = itemService.getItemById(item._id) }
                                    return <div key={item._id}>
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
                                <h3>₪{bill.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)?.toFixed(2)}</h3>
                            </div>
                        </div>}
                    </li>
                }
                )}
            </ul>

            <button onClick={toggleForm}>Add new bill</button>
            {openForm && <AdditionForm refresh={refreshing} />}
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev &&
                <pre >
                    {JSON.stringify(bills, null, 2)}
                </pre>
            }
        </section>
    )
}