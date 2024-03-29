import { useEffect, useState } from "react"
import { loadGroups, removeGroup, updateGroup } from '../store/actions/group.actions'
import { loadSubgroups, saveSubgroups, removeSubgroup } from '../store/actions/subgroup.actions'
import { loadItems } from '../store/actions/item.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"
import { AddItems } from "../cmps/AddItems"
import { i18Service } from '../services/i18n-service';


export const MyGroups = () => {
    const dispatch = useDispatch()
    const params = useLocation()

    const [form, setform] = useState(false)
    const [GroupEdit, setGroupEdit] = useState('')
    const [newSub, setNewSub] = useState({ name: '', groupId: '' })
    const [addSub, setAddSub] = useState('')
    const [groupPath, setGroupPath] = useState(params.pathname === '/myGroups')
    const [editable, setEditable] = useState('false')
    const [openBtns, setOpenBtns] = useState('')
    const [openRemove, setOpenRemove] = useState('')
    const [showSub, setShowSub] = useState([])
    const groups = useSelector(state => !groupPath ? state.subgroupModule.subgroups : state.groupModule.groups)

    useEffect(() => {
        setGroupPath(params.pathname === '/myGroups')
        loadToGroups()
    }, [params])

    useEffect(() => {
        i18Service.setLang()
        i18Service.doTrans()
    }, [showSub])
    
    
    const loadToGroups = async() => {
        await dispatch(loadGroups())
        params.pathname !== '/myGroups' ? await dispatch(loadSubgroups()) : ''
        i18Service.setLang()
        i18Service.doTrans()
    }

    const openForm = () => {
        setform(!form)
    }

    const openEdit = (group) => {
        if (group._id === editable) setEditable('')
        else {
            setEditable(group._id)
            setGroupEdit(group)
        }
    }

    const openRemoveContainer = (groupId) => {
        setOpenRemove(openRemove !== groupId ? groupId : '')
    }

    const removeGroups = (groupId) => {
        console.log('working but too dangerous');

        // dispatch(!groupPath ? removeSubgroup(groupId): removeGroup(groupId))
        // setOpenRemove('')
    }

    const getSubGroups = (group) => {
        var filterBy = { group: group._id }
        dispatch(loadSubgroups(filterBy))
        addSub === group._id ? setAddSub('') : setAddSub(group._id)
    }

    const showSubs = async (group) => {
        //    if (!groupPath) return console.log('not yet');
        if (group._id === showSub._id) { return setShowSub('') }
        try {
            var filterBy = { group: group._id }
            if (!groupPath) {
                var subs = await dispatch(loadItems(filterBy));
            } else var subs = await dispatch(loadSubgroups(filterBy));
            var newSubs = { "sub": subs, "_id": group._id }
            setShowSub(newSubs);
        } catch (error) {
            console.error('Error loading subgroups:', error);
        }
    };

    const addNewSub = (event) => {
        console.log('working but too dangerous');

        // event.preventDefault()
        // if (!newSub.name) {return console.log('add name'); }
        // var newSubgroup =  newSub
        // newSubgroup.groupId = addSub
        // dispatch(saveSubgroups(newSubgroup))
        // setNewSub({name: '' ,groupId:''})
    }

    const editGroup = () => {
        console.log('working but too dangerous');

        // dispatch(updateGroup(GroupEdit))
        // setEditable('')
    }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }
        field === 'subname' ? setNewSub(newSub => ({ ...newSub, ['name']: value })) : setGroupEdit(GroupEdit => ({ ...GroupEdit, [field]: value }))
    }

    return (
        <section className="myItems-container">
            <h2>{groups?.length} {groupPath ? 'Groups' : 'Sub-gorups'}</h2>
            <div className="notes">
                <h4>הערה1: אפשר ללחוץ על הקבוצה/תת-קבוצה ולקבל את הילדים שלה</h4>
                <h4>הערה2: אפשר להוסיף לעדכן ולמחוק, כרגע ביטלתי כדי שלא יצור באגים</h4>
                <h4>הערה3: כרגע לחיצה על הילדים לא עושה כלום , אבל אפשר לראות שמקבלים אותם ואפשר להשתמש בהם</h4>
                <h4>הערה4: אפשר לפתוח בפלאפון </h4>
            </div>
            <button onClick={openForm} className="add-group">{form ? 'Close inputs' : groupPath ? 'Add groups' : 'Add Sub-gorups'}</button>
            {form ? <div className="add-form">
                <AddItems />
            </div>
                : ''}
            {openRemove && <div className="remove-container">
                <p>are you sure you want to delete?</p>
                <button onClick={() => removeGroups(openRemove)}>yes</button>
                <button onClick={() => openRemoveContainer(openRemove)}>no</button>
            </div>}
            <ul className="items-ul">
                {groups?.map((group) =>
                    <li key={group?._id}>
                        <div className="item-li">
                            <button className="main-item" onClick={() => showSubs(group)} data-trans={group?.name}>{group?.name}</button>
                            {addSub === group._id && <form >
                                <input type="text" name="subname" value={newSub.name} onChange={handleChange} placeholder="name" />
                                <button onClick={addNewSub} className="add-sub-btn btn">Add subgroup</button>
                            </form>}
                            <div className="btn-container">
                                <button onClick={() => getSubGroups(group)} data-trans="add" className="add-btn btn">{addSub === group._id ? 'close' : 'add'}</button>
                                <button onClick={() => openEdit(group)} data-trans="update" className="update-btn btn">{group._id === editable ? 'Close Edit' : 'update'}</button>
                                <button onClick={() => openRemoveContainer(group._id)} data-trans="delete" className="delete-btn btn">delete</button>
                                {editable === group?._id ? <form className="edit-container">
                                    <input type="text" name="name" value={GroupEdit.name} onChange={handleChange} placeholder="name" />
                                    <input type="text" name="number" value={GroupEdit.number} onChange={handleChange} placeholder="number" />
                                    <button onClick={editGroup} className="change-btn btn">Change</button>
                                </form>
                                    : ''}
                            </div>
                        </div>
                        {showSub._id && showSub._id === group._id && <ul className="subs">
                            {showSub['sub']?.map((sub) =>
                                <li key={sub.name}>
                                    <p data-trans={sub?.name}>{sub.name}</p>
                                </li>
                            )}
                        </ul>}
                    </li>
                )}

            </ul>
            {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
        </section>
    )
}