import React from 'react'
import { Search } from '../assets/icons/Search'
import { Data } from '../data'

import './Home.scss'

const Home: React.FC = () => {
  const [search, setSearch] = React.useState<string>('')
  const users = Data.users

  return (
    <div id='home'>
      <div id='search'>
        <Search />
        <input
          type='text'
          placeholder='Search By Username/ID'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div id="users">
        {
          users.filter((u) => {
            if (search.length) {
              if (u.username.toLowerCase().includes(search) || u.userId.toLowerCase().includes(search)) return true

              return false
            }

            return true
          }).map((user, i) => (
            <p key={i}>{user.username}</p>
          ))
        }
      </div>
    </div>
  )
}

export default Home
