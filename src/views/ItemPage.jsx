import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"
import { i18Service } from '../services/i18n-service';
import { loadGroups } from '../store/actions/group.actions'
import { loadSubgroups } from '../store/actions/subgroup.actions'
import { loadItems } from '../store/actions/item.actions'


export const ItemPage = () => {
    const dispatch = useDispatch()
    const params = useLocation()

    const group = useSelector(state => state.groupModule.groups)
    const subgroup = useSelector(state => state.subgroupModule.subgroup)
    const item = useSelector(state => state.itemModule.items)
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
        var filterBy = { group: group._id }
        setDisplay([...display, group])
        var groups = await dispatch(group.groupId ? loadItems(filterBy) : loadSubgroups(filterBy))
        setGroups(groups)
    }

    const onBack = (backToGroup) => {
        // console.log(newDisplay);
        if (backToGroup?._id) {
            // var newDisplay = display
            // newDisplay.pop()
            // setDisplay(newDisplay)
            showKids(backToGroup)
            setDisplay([backToGroup])
        } else {
            setDisplay([])
            setGroups(group)
        }
    }

    return (
        <section className="item-page-container">
            <h2 data-trans={'List'}>List</h2>
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
            <ul>
                {groups?.map((group) =>
                    <li key={group._id}>
                        <button onClick={() => showKids(group)} className="item-name" data-trans={group.name}>
                            <p>{group.name}</p>
                        </button>
                    </li>)}
            </ul>
            {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
        </section>
    )
}