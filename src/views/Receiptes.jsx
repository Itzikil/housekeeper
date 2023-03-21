import { useState } from 'react'
import { billService } from '../services/bill-service'
import { supplierService } from '../services/supplier-service'
import { itemService } from '../services/items-service'

export const Receiptes = () => {
    const [bills, setBills] = useState(billService.loadBills())
    const [openDev, setOpenDev] = useState(false)
    const [itemOpen, setItemOpen] = useState()

    const toggleDev = () => {
        setOpenDev(!openDev)
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
                                <p><span data-trans="b.n">b.n</span> {currSupplier.bn}</p>
                                <a href="tel:054-260-9225">{currSupplier.phone}</a>
                            </div>
                            <div className='bill-body'>
                                {bill.items.map(item => {
                                    { currItem = itemService.getItemById(item._id) }
                                    return <div key={item._id}>
                                        <div className='flex space-between flex1 align-center justify-center '>
                                            <p className='text-start'>{currItem.name}</p>
                                            <p className='text-center'>{item.quantity}</p>
                                            <p className='text-end'>₪{item.price * item.quantity}</p>
                                        </div>
                                        {item.quantity < 1 && <p>₪{item.price} ל1</p>}
                                    </div>
                                })}
                            </div>
                            <div className='flex space-between'>
                                <h3>סה"כ</h3>
                                <h3>₪{bill.items.reduce((acc, item) => acc + item.price, 0)}</h3>
                            </div>
                        </div>}
                    </li>
                }
                )}
            </ul>
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev &&
                <pre>
                    {JSON.stringify(bills, null, 2)}
                </pre>
            }
        </section>
    )
}