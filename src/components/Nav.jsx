import {Link} from 'react-scroll'
const link = [
    {
        path: 'home',
        name: 'home',
      
    },
    {
        path: 'menu',
        name: 'menu',
   
    },
    {
        path: 'about',
        name: 'about',
     
    },
    {
        path: 'contact',
        name: 'contact',
 
    }
]

const Nav = ({containerStyle, linkStyle}) => {
  return (
    <nav className={`${containerStyle}`}>
      {link.map((item, index) => (
        <Link 
        key={index}
        to={item.path}
        spy={true}
        smooth={true}
        duration={500}
        className={`${linkStyle}`}
        >
            {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
