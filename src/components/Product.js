import React, { Component, Fragment } from 'react'
import ProductIam from './ProductIam'
import ProductDevops from './ProductDevops'
import {  Route } from 'react-router-dom';
import MenuLink from './MenuLink'
export default class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className='user-container'>
                    <div className="content-left">
                        <ul>
                            <MenuLink to='/product/iam' label="iam产品" />
                            <MenuLink to='/product/devops' label="devops产品" />
                        </ul>
                    </div>
                    <div className="content-right">
                        <Route exact path='/product/' render={()=>{
                            return <p className='text-algin'>欢迎choreodon产品</p>
                        }}></Route>
                        <Route path='/product/iam' component={ProductIam}></Route>
                        <Route path='/product/devops' component={ProductDevops}></Route>
                    </div>
                </div>

            </Fragment>
        )
    }
}
