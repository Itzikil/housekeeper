import { useState } from "react"
import { supplierService } from "../services/supplier-service"

export const Suppliers = () => {

    const [suppliers, setSuppliers] = useState(supplierService.loadSuppliers())
    const [openDev, setOpenDev] = useState(false)

    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    if (!suppliers) return <div>Loading</div>
    return (
        <section>
            <h1>ספקים</h1>
            <ul className="items-list">
                {suppliers.map((supplier) =>
                    <li>
                        <h3>{supplier.name}</h3>
                        <p>{supplier.phone}</p>
                    </li>
                )}
            </ul>
            <button onClick={toggleDev}>{!openDev ?' למפתחים' : 'סגור'}</button>
            {openDev && <pre>{JSON.stringify(suppliers, null, 2)}</pre>}
        </section>
    )
}