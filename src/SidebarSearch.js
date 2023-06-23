import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import './SidebarSearch.css';
import { IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import Search from './Search.js';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

function SidebarSearch() {
  return (
    <div className='SidebarSearch'>
      <div className='search'>
        {/* <IconButton> */}
        <form>
          <SearchOutlined />
          <input placeholder='Search or start a new chat' type='text'/>
        </form>
          {/* <SearchIcon />
          <Search /> */}
        {/* </IconButton> */}
      </div>
      <div className='filtered'>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default SidebarSearch;