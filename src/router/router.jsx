import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';
import Home from '../pages/home';
import Product from '../components/Product';
import Test from '../components/Test'
import '../assets/css/index.css';
import NotFound from '../pages/notFound'
class router extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className='my-navbar'>
                        <ul>
                            <li><Link to="/"  >首页</Link></li>
                            <li><Link to="/product"  >用户</Link></li>
                            <li><Link to="/test"  >Test</Link></li>
                        </ul>
                    </div>
                    <div className='container'>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/product" component={Product} />
                            <Route path="/test" component={Test} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}
export default router;
