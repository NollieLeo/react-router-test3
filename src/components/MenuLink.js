
import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

export default function ({ to, label }) {
    return (
        <Route path={to} children={(props) => {
            return <li className={props.match ? 'active' : ''}><NavLink to={to} activeClassName="active">{label}</NavLink></li>

        }} />
    )
}
