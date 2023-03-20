import { NavLink } from 'react-router-dom'


export const AppHeader = () => {

    return (
        <header className='app-header'>
            <NavLink to="/">משק בית</NavLink>
            <div className='nav-links'>
                <NavLink to="/suppliers">ספק</NavLink>
                <NavLink to="/receiptes">חשבון</NavLink>
                <NavLink to="/items">פריט</NavLink>
            </div>
        </header>
    )
}