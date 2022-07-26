import React from 'react'

import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { useChatContext } from 'stream-chat-react'
import {SearchIcon} from "../assets/SearchIcon"

const ChannelSearch = () => {

    const [query,setQuery]=useState("");
    const [loading,setLoading]=useState(false);
    const getChannels=async(text)=>{

        try{

        }
        catch(error){
            setQuery(' ')
        }

    }
    const onSearch=(event)=>{
        event.preventDefault();
        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }
  return (
    <div className='channel-search__container'>
<div className='channel-search__input__wrapper'>
    <div className='channel-search__input__icon'>
        <SearchIcon></SearchIcon>

    </div>
    <input className='channel-search__input__text' 
    placeholder='search'
    type="text"
    value={query}
    onchange={onsearch}>
    </input>

</div>

    </div>
  )
}

export default ChannelSearch