import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChanelContainer from './components/ChanelContainer';
import ChanellListContainer from './components/ChanellListContainer';

import Auth from "./components/Auth"
import "./App.css";

const apikey = "qbevyur8kak7";
const client= StreamChat.getInstance(apikey);

const cookies=new Cookies();
const authToken = cookies.get("token");

if(authToken){
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("username"),
    fullName: cookies.get("fullName"),
    image: cookies.get("avatarurl"),
    hashedPassword: cookies.get("hashedPassword"),
    phonenumber: cookies.get("phonenumber"),
  },authToken );
}

const App = () => {

  if(!authToken) return <Auth></Auth>
  return (
    <div className='app__wrapper'>
<Chat client={client}  theme="team light">
    <ChanellListContainer></ChanellListContainer>

    <ChanelContainer>
    
    </ChanelContainer>
</Chat>

    </div>
  )
}

export default App