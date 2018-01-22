import React,{Component} from 'react';

class checkbox extends Component{



    render(){
        return(
            <div>
            <form>
            <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"/>
            </div>
            <div className="checkbox">
            <input type="checkbox"/> <label> Remember me</label>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
            </form>
            </div>
        )
    }
}

export default checkbox;