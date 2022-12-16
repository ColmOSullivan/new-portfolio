/**Following a tutorial from Web Dev Simplified 'How to create a NavBar in React Routing'**/ 

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavBar(){
    return <nav className="nav">
        <Link to="/" className='site-title'>
            Colm O'Sullivan
        </Link>
        <ul>
            <CustomLink to ="/skills">Skills</CustomLink>
            <CustomLink to ="/projects">Projects</CustomLink>
            <CustomLink to ="/contact">Contact</CustomLink>
        </ul>
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