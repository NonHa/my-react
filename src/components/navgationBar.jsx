import React from 'react'
import { Link } from 'react-router-dom'
export default class NavgationBar extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills container">
                <li role="presentation" className="active">
                    <Link to='/' className="navbar-brand">Login功能</Link>
                </li>
                <li role="presentation" className="active">
                    <Link to='/signup' className="nav-link">注册</Link>
                </li>
                <li role="presentation" className="active">
                    <Link to='/login' className="nav-link">登录</Link>
                </li>
            </ul>
        )
    }
}