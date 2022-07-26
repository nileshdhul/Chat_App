import React from 'react'

import { ChannelList, useChatContext } from 'stream-chat-react'

import ChannelSearch from './ChannelSearch'
import TeamChannelList from './TeamChannelList'
import TeamChannelPreview from './TeamChannelPreview'
import Cookies from 'universal-cookie'

import HospitalIcon from "../assets/hospital.png"
import LogoutIcon from "../assets/logout.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1_inner">
        <img src={HospitalIcon} alt="Hospital" width="30"></img>
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon1_inner">
        <img src={LogoutIcon} alt="Logout" width="30"></img>
      </div>
    </div>
  </div>
);

const Companyheader=()=>(

  <div className='channel_list__header'>
    <p className='channel-list__header__text' >
      Medical Pager
    </p>

  </div>
)


const ChanellListContainer = () => {
  return (
    <div>
      <SideBar>s</SideBar>
      <div className="channel-list__list__wrapper">
        <Companyheader></Companyheader>
        <ChannelSearch></ChannelSearch>

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listprops) => <TeamChannelList {...listprops} type="team" />}
          Preview={(previewprops) => (
            <TeamChannelPreview
              {...previewprops}
              type="team"
            ></TeamChannelPreview>
          )}
        ></ChannelList>

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listprops) => <TeamChannelList {...listprops} type="messaging" />}
          Preview={(previewprops) => (
            <TeamChannelPreview
              {...previewprops}
              type="messaging"
            ></TeamChannelPreview>
          )}
        ></ChannelList>
      </div>
    </div>
  );
}

export default ChanellListContainer