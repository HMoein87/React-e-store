import React from 'react';

import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import { CartIcon, HomeIcon } from './Icons';

//Layout Component
const Layout = ({categories}) => {

    //render category component
    const renderCategories = () => {
        return categories.data.map(c => 
            <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
            );
        }

    return (
        <>
            <header>
                <div id='headerHomeIcon'>
                    <Link to='/'><HomeIcon width={40} /></Link>
                </div>

                <div id='headerTitle'>Digi Shop</div>

                <div id='headerCartIcon'>
                    <Link to='/cart'><CartIcon width={40} /></Link>
                </div>
            </header>

            <section>
                <nav>
                    { categories.errormessage && <div>Error: {categories.errormessage}</div>}
                    <ul>{ categories.data && renderCategories() }</ul>
                </nav>

                <main>
                    <Outlet />
                </main>
            </section>
        
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Layout