import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'

export const Sidebardata = [
    {
        title: 'Home',
        link: '/home',
        icon: <FaIcons.FaHome/>,
        cname: 'nav-text'
    },
    {
        title: 'Trending',
        link: '/trending',
        icon: <FiIcons.FiTrendingUp/>,
        cname: 'nav-text'
    },
    {
        title: 'Streamers',
        link: '/streamer',
        icon: <GiIcons.GiDwarfFace/>,
        cname: 'nav-text'
    },
    {
        title: 'Videos',
        link: '/video',
        icon: <BsIcons.BsFillCameraVideoFill/>,
        cname: 'nav-text'
    },

]
