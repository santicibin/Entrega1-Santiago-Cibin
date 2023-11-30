import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <Nav>
            <div>
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/nosotros">Nosotros</Link></li>
                    <li><Link to= "/Galeria">Galeria</Link></li>
                    <li><Link to= "/contacto">Contacto</Link></li>
                </ul>
            </div>
        </Nav>
    )
}

export default Nav;