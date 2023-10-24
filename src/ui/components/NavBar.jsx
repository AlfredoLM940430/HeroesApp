import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <div className='container'>
                <Link className="navbar-brand" to="/">Asociaciones</Link>

                <div className="navbar-collapse d-flex justify-content-between">
                    <div className="navbar-nav">
                        <NavLink to='marvel' className={({isActive}) => {return `nav-link ${isActive ? 'active' : ""}`}}>Marvel</NavLink>
                        <NavLink to='dc' className={({isActive}) => {return `nav-link ${isActive ? 'active' : ""}`}}>DC</NavLink>
                        <NavLink to='search' className={({isActive}) => {return `nav-link ${isActive ? 'active' : ""}`}}>Search</NavLink>
                        {/* <NavLink to='hero' className={({isActive}) => {return `nav-link ${isActive ? 'active' : ""}`}}>Hero</NavLink>
                        <NavLink to='login' className={({isActive}) => {return `nav-link ${isActive ? 'active' : ""}`}}>Login</NavLink> */}
                    </div>
                    <div className="navbar-nav">
                        <span className='nav-item nav-link text-white'>Alfredo</span>
                        <button className='nav-item nav-link btn' onClick={onLogout} >Salir</button>
                    </div>
                </div>

            </div>
        </nav>
    )
}