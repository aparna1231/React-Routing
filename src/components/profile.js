import React,{Component} from 'react';

class Profile extends Component{
    render(){
        return(
        <div>
            <h1>Hiiiiii</h1>
            <div className="checkbox">
                <label><input type="checkbox"/> Remember me</label>
            </div>
        </div>
        ) 
    }
}

export default Profile;