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
    const [groups, setGroups] = useState(supplierService.loadGroups())
    const [showSuppliers, setShowSuppliers] = useState(false)
    const [itemOpen, setItemOpen] = useState()
    const [openDev, setOpenDev] = useState(false)
    const [currGroup, setCurrGroup] = useState();

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const toggleDev = () => {
        setOpenDev(!openDev)
    }

    const openSuppliers = (group) => {
        setCurrGroup(group)
        setShowSuppliers(group.code)
        setSuppliers(supplierService.getSupplierByGroup(group.code))
    }

    const backToGroups = () => {
        setShowSuppliers('')
        setCurrGroup('')
        setInput2('')
    }

    const openItem = (itemId) => {
        itemOpen === itemId ? setItemOpen(false) : setItemOpen(itemId)
    }

    const onChangeFilter = ({ target }) => {
        let value = target.value
        let name = target.name
        if (name === 'group') {
            setGroups(supplierService.loadGroups(value))
            setShowSuppliers(false)
            setInput1(value)
            setInput2('')
        } else {
            if (!value) {
                if (currGroup) {
                    setSuppliers(supplierService.getSupplierByGroup(currGroup.code))
                } else {
                    backToGroups()
                }
                setInput2('')
            } else {
                setGroups(supplierService.loadGroups())
                setSuppliers(supplierService.loadSuppliers(value, currGroup.code))
                setShowSuppliers(true)
                setInput2(value)
                setInput1('')
            }
        }
    }

    // if (!suppliers) return <div>Loading</div>
    return (
        <section className="suppliers-container">
            <h2>{showSuppliers ? <span data-trans="suppliers">suppliers</span> : <span data-trans="supplier group">suppliers group</span>}</h2>
            {showSuppliers && currGroup && <h3>Results for <span className="bold"> {currGroup.name} ({currGroup.code})</span> </h3>}
            {showSuppliers && <button onClick={backToGroups}>Back to groups</button>}
            {!showSuppliers && <input type="text" name="group" value={input1} onChange={onChangeFilter} className="input" placeholder="find group" />}
            <input type="text" name="supplier" value={input2} onChange={onChangeFilter} className="input" placeholder="find supplier" />
            <ul className="items-list">
                {!showSuppliers ? groups.map((group) =>
                    <li key={group.code}>
                        <button onClick={() => openSuppliers(group)}>{group.name}</button>
                    </li>
                ) :
                    suppliers.map((supplier) =>
                        <li key={supplier._id}>
                            <button onClick={() => openItem(supplier._id)}>{supplier.name}</button>
                            {(itemOpen === supplier._id) && <div>
                                <a href="tel:054-260-9225">{supplier.phone}</a>
                                <p>{supplier.bn}</p>
                                <p> Group name: {supplier['group-name']}</p>
                                <p> Group number: {supplier['group-code']}</p>
                            </div>}
                        </li>
                    )}
            </ul>
            <button onClick={toggleDev}>{!openDev ? ' למפתחים' : 'סגור'}</button>
            {openDev && <pre>{JSON.stringify(suppliers, null, 2)}</pre>}
        </section>
    )
}