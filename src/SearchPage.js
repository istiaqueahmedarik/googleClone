import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import "./SearchPage.css";
import { useStateValue } from './StateProvider';
import useGoogle from './useGoogle';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    //const data = Response
    const {data} = useGoogle(term);

    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img 
                    className="searchPage__logo"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                            <PermMediaIcon/>
                            <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                            <ShoppingCartIcon/>
                            <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                            <MenuBookIcon/>
                            <Link to="/book">Book</Link>
                            </div>
                            <div className="searchPage__option">
                            <MoreVertIcon/>
                            <Link to="/more">More</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            {true &&(
                <div className="searchPage__results">
                    <p
                        className="searchPage__resultCount">
                          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}  
                        </p>
                        {data?.items.map(item=>(
                         <div className="searchPage__result">
                             <a href={item.link} >{item.displayLink}</a>
                             <div className="searchPage__resultTitle">
                             <a href={item.link} ><h2>{item.title}</h2></a>
                                 
                                 </div>
                                 <p className="searchPage__resultSnippets">{item.snippet}</p>
                             </div>   
                        ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
