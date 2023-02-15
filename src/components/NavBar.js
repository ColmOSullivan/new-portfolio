/**Following a tutorial from Web Dev Simplified 'How to create a NavBar in React Routing'**/ 

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import DisplayIcon from './DisplayIcon'

export default function NavBar(){

    return <nav className="">
        <div className='navBar wrapper'>
        <Link to="/" className='site-title'>
            <DisplayIcon />
        </Link>
        <ul>
            <CustomLink to ="/skills">Skills</CustomLink>
            <CustomLink to ="/projects">Projects</CustomLink>
            <CustomLink to ="/contact">Contact</CustomLink>
        </ul>
        </div>
    </nav>
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}

/**Nav bar was inspired/created thanks to a Web Dev Simplified video**/ 