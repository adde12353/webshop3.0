import { Outlet } from 'react-router';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navigation-style.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Navigation = () => {
    return ( <Fragment>
        <nav className='navigation'>
            <Link className="logo-container" to="/"><CrownLogo className="logo"/></Link>
            <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop</Link>
                        <Link className="nav-link" to="/signIn">
                        Sign In</Link>    
            </div>
        </nav>
        <Outlet/>
        </Fragment> );
}
 
export default Navigation;

