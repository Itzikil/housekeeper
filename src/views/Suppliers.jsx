import { useEffect, useState } from "react"
import { i18Service } from "../services/i18n-service"
import { supplierService } from "../services/supplier-service"

export const Suppliers = () => {
    useEffect(() => {
        translate()
    }, [])

    const translate = () => {
        i18Service.doTrans()
    }

    const [suppliers, setSuppliers] = useState(supplierService.loadSuppliers())
    const [openDev, setOpenDev] = useState(false)
    const [itemOpen, setItemOpen] = useState()

    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    const openItem = (itemId) => {
        itemOpen === itemId ? setItemOpen(false) : setItemOpen(itemId)
    }

    const onChangeFilter = ({ target }) => {
        let value = target.value
        setSuppliers(supplierService.loadSuppliers(value))
    }

    if (!suppliers) return <div>Loading</div>
    return (
        <section>
            <h2 data-trans="suppliers">suppliers</h2>
            <input type="text" onChange={onChangeFilter} className="input"/>
            <ul className="items-list">
                {suppliers.map((supplier) =>
                    <li key={supplier._id}>
                        <button onClick={() => openItem(supplier._id)}>{supplier.name}</button>
                        {(itemOpen === supplier._id) && <div>
                            <a href="tel:054-260-9225">{supplier.phone}</a>
                            <p>{supplier.bn}</p>
                        </div>}
                    </li>
                )}
            </ul>
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev && <pre>{JSON.stringify(suppliers, null, 2)}</pre>}
        </section>
    )
}