/**
 * Created by hafizdirdali on 08/07/2017.
 */
import React, { Component } from 'react';


class SearchBar extends Component{




    render(){
        return (
            <div>
                <input onChange={()=>{console.log('working on change')}} />
            </div>
        )
    }
}

export default SearchBar