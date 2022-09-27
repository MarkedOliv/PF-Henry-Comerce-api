/** @format */
import './Nav.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import { RiLoginBoxFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

export const Nav = () => {
  return (
    <header>
      <nav className='navbar is-transparent'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src={logo}
              alt='Bulma: a modern CSS framework based on Flexbox'
              width='112'
              height='28'
            />
          </a>
          <div
            className='navbar-burger'
            data-target='navbarExampleTransparentExample'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id='navbarExampleTransparentExample' className='navbar-menu'>
          <div className='navbar-start'>
            <Link className='navbar-item jsi' to='/'>
              Home
            </Link>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a
                className='navbar-link'
                href='https://bulma.io/documentation/overview/start/'>
                Products
              </a>
              <div className='navbar-dropdown is-boxed'>
                <a
                  className='navbar-item'
                  href='https://bulma.io/documentation/overview/start/'>
                  Shirts
                </a>
                <a
                  className='navbar-item'
                  href='https://bulma.io/documentation/overview/modifiers/'>
                  Pants
                </a>
                <a
                  className='navbar-item'
                  href='https://bulma.io/documentation/columns/basics/'>
                  Caps
                </a>
                <a
                  className='navbar-item'
                  href='https://bulma.io/documentation/layout/container/'>
                  Jackets
                </a>
                <hr className='navbar-divider' />
                <a
                  className='navbar-item'
                  href='https://bulma.io/documentation/elements/box/'>
                  Masculine
                </a>
                <a
                  className='navbar-item is-active'
                  href='https://bulma.io/documentation/components/breadcrumb/'>
                  Female
                </a>
              </div>
            </div>
            <Link className='navbar-item jsi' to='/news'>
              News
            </Link>
            <Link className='navbar-item jsi' to='/offers'>
              Offers
            </Link>

            <div className='navbar-item'>
              <p className='control has-icons-right'>
                <input
                  className='input'
                  type='text'
                  placeholder='Search product'
                />
                <span className='icon is-small is-right'>
                  <Link to='/products'>
                    <FaSearch />
                  </Link>
                </span>
              </p>
            </div>

            {/* <p className='control has-icons-right'>
              <div className='navbar-item input-wrapper'>
                <input
                  className='input'
                  type='text'
                  placeholder='Search product'
                />

                <Link to='/products'>
                  <span className='is-small is-left'>
                    <FaSearch className='input-icon ' />
                  </span>
                </Link>
              </div>
            </p> */}
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link className='button log-s' to='/login'>
                    <span className='icon'>
                      <RiLoginBoxFill className='fab' />
                    </span>
                    <span>Log In</span>
                  </Link>
                </p>
                <p className='control'>
                  <Link className='button is-primary' to='/shop'>
                    <span className='icon'>
                      <FaShoppingCart className='fas' />
                    </span>
                    <span>Shop</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

{
  /* <nav>
        <img src={logo} alt='meow' />
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/nosotros'>Nosotros</Link>
          </li>
          <li>
            <Link to='/novedades'>Novedades</Link>
          </li>
          <li>
            <Link to='/ofertas'>Ofertas</Link>
          </li>
          <li>
            <Link to='/soporte'>Soporte</Link>
          </li>
          <Link to='/login'>
            <button type='button' classNameName='log'>
              Log in
            </button>
          </Link>

          <Link to='/register'>
            <button type='button' classNameName='reg'>
              Registrate
            </button>
          </Link>
        </ul>
      </nav> */
}
