import { NavLink } from 'react-router-dom'
import { i18Service } from '../services/i18n-service'
import language from '../assets/language.png'
import { useMessagePopup } from "./UserMessage"
import { useState } from 'react'

export const AppHeader = () => {
    const [showMessage, MessagePopup] = useMessagePopup();
    const [mobileNav, setMobileNav] = useState(false);


    const openNav = () => {
        setMobileNav(!mobileNav)
    }

    const translate = () => {
        let lang = i18Service.getTransLang()
        lang = (lang === 'en' || lang === 'en-US') ? 'he' : 'en'
        i18Service.setLang(lang)
        i18Service.doTrans()
    }

    return (
        <header className='app-header'>
            <div className='flex align-center space-between w-100'>
                <NavLink to="/" data-trans="household">household</NavLink>
                <button onClick={openNav} className='on-mobile'>Open nav</button>
            </div>
            <div className={`nav-links ${mobileNav ? 'open-nav' : ''} `}>
                {/* <NavLink to="/suppliers" data-trans="supplier">supplier</NavLink>
                <NavLink to="/items" data-trans="item">item</NavLink>
                <NavLink to="/bills" data-trans="bill">bill</NavLink>
                <NavLink to="/order" data-trans="order">order</NavLink>
                <NavLink to="/summary" data-trans="summary">summary</NavLink>
                <NavLink to="/quarterly" data-trans="quarterly">quarterly</NavLink> */}
                <NavLink to="/assemblage" >assemblage</NavLink>
                <NavLink to="/itemPage" data-trans="List">List</NavLink>
                <NavLink to="/myGroups" data-trans="group">group</NavLink>
                <NavLink to="/mySubGroups" data-trans="sub-group">sub-group</NavLink>
                <NavLink to="/myItems" data-trans="item">items</NavLink>
                <img src={language} alt="language" onClick={translate} />
            </div>
            <MessagePopup />
        </header>
    )
}