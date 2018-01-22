import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';


// COMPONENTS
import Posts from './components/posts';
import Profile from './components/profile';
import checkbox from './components/checkbox'


class App extends Component {
    render(){
        return <div>Home</div>
    }
}

ReactDOM.render(
<BrowserRouter>
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/check">check</Link>
            <hr/>
        </header>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/check" component={checkbox}></Route>
    </div>
</BrowserRouter>, 
document.querySelector('#root'))

