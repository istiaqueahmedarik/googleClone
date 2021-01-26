import { Button } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from './reducer';
import "./Search.css";
import { useStateValue } from './StateProvider';
function Search({hideButtons = false}) {
    const [{},dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log(input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("./search")
    }
    return (
        <form className="search">
            <div className="searchInput">
                <SearchIcon className="search__searchIcon"/>
                <input value={input} onChange={e=> setInput(e.target.value)}/>
                <MicIcon/>
            </div>
           {!hideButtons?(
                <div className="search__buttons">
                <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                <Button  variant="outlined">I'm feeling lucky</Button>
            </div>
           ):(
            <div className="search__buttons">
            <Button className="hidden" onClick={search} type="submit" variant="outlined">Google Search</Button>
            <Button className="hidden"  variant="outlined">I'm feeling lucky</Button>
        </div>
           )}
        </form>
    )
}

export default Search
