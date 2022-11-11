import React from 'react';
import { Link } from 'react-router-dom';


const Logo = ({limage}) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img className="light-version-logo" src={process.env.PUBLIC_URL + limage} alt="logo" />
        </Link>
    )
}


export default Logo;