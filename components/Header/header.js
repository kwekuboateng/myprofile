import headCss from './header.css'
import Fred from '../../pages/myImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const linkStyle = {
    marginRight: 15
  };


  import Link from 'next/link';
  
  const Header = () => {
    return (
    <>
      <header className={headCss.head}>
        <div className={headCss.headInner}>
          <Fred />
          <a className={headCss.myName}>Frederick Boateng</a>
          <span className={headCss.myTitle}>Software Engineer</span>
      <nav>
        <ul className={headCss.vertMenu}>
          <li>
          <Link href="/">
            <a >
            <FontAwesomeIcon icon="home"/>
            Home
            </a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a >
            <FontAwesomeIcon icon="user-alt"/>  
            About
            </a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a >
            <FontAwesomeIcon icon="file"/>
            Resume
              </a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a >
            <FontAwesomeIcon icon="grip-horizontal"/>
            Works
            </a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a >
            <FontAwesomeIcon icon="pencil-alt"/>
            Blog
            </a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a >
            <FontAwesomeIcon icon="phone-alt"/>
            Contact
            </a>
          </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className={headCss.listInline + " " + headCss.socialIcons}>
          <li className={headCss.marR}>
            <a>
              <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
          </li>
          <li  className={headCss.marR}>
            <a>
              <FontAwesomeIcon icon={['fab', 'facebook']}/>
            </a>
          </li>
          <li  className={headCss.marR}>
            <a>
            <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </a>
          </li>
          <li  className={headCss.marR}>
            <a>
            <FontAwesomeIcon icon={['fab', 'github']}/>
            </a>
          </li>
          <li  className={headCss.marR}>
            <a>
            <FontAwesomeIcon icon={['fab', 'codepen']}/>
            </a>
          </li>
        </ul>
      </div>
      </div>
      </header>
    </>
    )
  };
  
  export default Header;