import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props)
        this._list = [];
    }

    add(){
        // this._list.push(item)
        // console.log(this._list)
        // console.log(item)
        return(
            <h1>please print this</h1>
        )
    }

    render(){
        return (
            <form id="submitBar" name="submitBar">
                <label>
                To Do:
            <input type="text" placeholder="Enter item here" name="name" />
                </label>
            <button type="submit" value="Submit" onClick={() => this.add()}>Submit</button>
            </form>
        )
    }
}

export default List;