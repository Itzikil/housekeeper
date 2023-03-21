import { NavLink } from 'react-router-dom'
import { i18Service } from '../services/i18n-service'
import language from '../assets/language.png'

export const AppHeader = () => {

    const translate = () => {
        i18Service.setLang()
        i18Service.doTrans()
    }

    return (
        <header className='app-header'>
            <NavLink to="/" data-trans="household">household</NavLink>
            <div className='nav-links'>
                <NavLink to="/suppliers" data-trans="supplier">supplier</NavLink>
                <NavLink to="/items" data-trans="item">item</NavLink>
                <NavLink to="/receiptes" data-trans="bill">bill</NavLink>
                <img src={language} alt="language" onClick={translate} />
            </div>
        </header>
    )
}