import React from 'react'

class SearchBar extends React.Component{
    state = {
        input: ''
    }
    onInputChange = (event)=>{
        this.setState({
            input: event.target.value
        })
    }
    onFormSubmit = (event)=>{
          event.preventDefault();
          this.props.onSubmit(this.state.input);  
        }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="form-group my-2 bg-red text-white" style={{width:'75%', marginLeft: 'auto', marginRight: 'auto',border: '1px solid aliceblue',padding: 15, boxShadow: '1px 3px 1px 1px grey'}}>
                    <label>Image Search:</label>
                    <input type="text" value={this.state.input} onChange={this.onInputChange} className="form-control" />
                </form>
            </div>
        )
    }
}

export default SearchBar