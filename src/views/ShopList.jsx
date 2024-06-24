import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { i18Service } from '../services/i18n-service';
import { loadGroups } from '../store/actions/group.actions'
import { loadSubgroups } from '../store/actions/subgroup.actions'
import { loadItems } from '../store/actions/item.actions'
// import { useLocation } from "react-router-dom"


export const ShopList = () => {
    const dispatch = useDispatch()
    // const params = useLocation()
    // const subgroup = useSelector(state => state.subgroupModule.subgroup)
    // const item = useSelector(state => state.itemModule.items)

    const group = useSelector(state => state.groupModule.groups)
    const [shopList, setShopList] = useState([])
    const [display, setDisplay] = useState([])
    const [groups, setGroups] = useState(group)


    useEffect(() => {
        !group ? loadToGroups() : ''
    }, [])

    useEffect(() => {
        i18Service.setLang()
        i18Service.doTrans()
    }, [groups])

    const loadToGroups = async () => {
        var load = await dispatch(loadGroups())
        setGroups(load)
    }

    const showKids = async (group) => {
        if (shopList.some((item) => item._id === group._id)) return;
        if (group.subgroupId) return setShopList([...shopList, group])
        var filterBy = { group: group._id }
        setDisplay([...display, group])
        var groups = await dispatch(group.groupId ? loadItems(filterBy) : loadSubgroups(filterBy))
        setGroups(groups)
    }

    const clearList = () => {
        setShopList([])
    }

    const handleCheckboxChange = (id) => {
        const updatedItems = shopList.map(item =>
            item._id === id ? { ...item, checked: !item.checked } : item
        );
        setShopList(updatedItems);
    };

    const onBack = (backToGroup) => {
        if (backToGroup?._id) {
            showKids(backToGroup)
            setDisplay([backToGroup])
        } else {
            setDisplay([])
            setGroups(group)
        }
    }

    return (
        <section className="shop-list-container">
            <h2>Shop List</h2>
            {shopList.length ? <div>
                <ul className="shop-list">
                    {shopList.map(item =>
                        <li key={item._id} className={item.checked ? 'checked' : ''}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                                {item.name}
                            </label>
                        </li>
                    )}
                </ul>
                <button onClick={clearList} >clear</button>
            </div>
                : <p>Your cart is empty</p>}
            <p>{groups?.length} <span data-trans="results"> results</span></p>
            <div className="notes">
            </div>
            <div className="headers">
                <button onClick={onBack}><h3 data-trans="groups">groups</h3></button>
                {display.length > 0 && <div>
                    <p> - </p>
                    <button onClick={() => onBack(display[0])} >
                        <h3 data-trans={display[0]?.name}>{display[0]?.name}</h3>
                    </button>
                    <p> - </p>
                    {display[1] &&
                        <button >
                            <h3 data-trans={display[1]?.name}> {display[1]?.name} </h3>
                        </button>
                    }
                </div>}
            </div>
            <ul className="item-list">
                {groups?.map((group) =>
                    <li key={group._id} className={`${shopList.some((item) => item._id === group._id) ? "picked" : ""}`}>
                        <button onClick={() => showKids(group)} className="item-name" data-trans={group.name}>
                            <p>{group.name}</p>
                        </button>
                    </li>)}
            </ul>
            {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
        </section>
    )
}