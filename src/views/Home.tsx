/* eslint-disable camelcase */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Search } from '../assets/icons/Search'
import { Data } from '../data'

import './Home.scss'

const tempCanvas = document.createElement('canvas')
tempCanvas.width = 1
tempCanvas.height = 1
tempCanvas.style.visibility = 'hidden'
tempCanvas.style.position = 'fixed'
tempCanvas.style.top = '0'
tempCanvas.style.left = '0'
const tempContext = tempCanvas.getContext('2d')

const Home: React.FC = () => {
  const [search, setSearch] = React.useState<string>('')
  const history = useHistory()
  const users = Data.users
  const episodes = Data.watched
  const bookmarks = Data.bookmarks

  function push(location: string) {
    history.push(location)
  }

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
      <div id='users'>
        {
          users.filter((u) => {
            if (search.length) {
              if (u.username.toLowerCase().includes(search.toLowerCase()) || u.userId.toLowerCase().includes(search.toLowerCase())) return true

              return false
            }

            return true
          }).map((user, i) => {
            const anime = episodes.filter((u) => u.userId === user.userId)
            const bookmarked = bookmarks.filter((u) => u.userId === user.userId)

            return (
              <div className='user' key={i} onClick={() => push(`/users/${user.userId}`)}>
                <div className='banner'>
                  {
                    user.banner
                      ? <img
                        src={user.banner?.replace('?size=1024', '?size=512') ?? ''}
                        alt={user.username}
                        onError={(event) => {
                          const t = event.target as HTMLImageElement
                          t.replaceWith('<div class="colorfill"></div>')
                        }}
                      />
                      : <div className='colorfill' style={{ backgroundColor: user.banner_color ?? '#000000' }}></div>
                  }
                </div>
                <div className='avatar'>
                  <img
                    src={user.avatar?.replace('?size=1024', '?size=512') ?? 'https://cdn.discordapp.com/embed/avatars/5.png'}
                    alt={user.username}
                    onError={(event) => {
                      const t = event.target as HTMLImageElement
                      t.src = 'https://cdn.discordapp.com/embed/avatars/5.png'
                    }}
                  />
                  <p className="id">{user.userId}</p>
                </div>
                <div className='userInfo'>
                  <h1>{user.username}<span>#{user.discriminator}</span></h1>
                  <div className="divider"></div>
                  <p className='aboutMe'>ABOUT ME</p>
                  <p>Hi, my name is <span className='off'>{user.username}</span>. While using Animiru I watched a total of <span className='off'>{anime.length}</span> anime episodes and bookmarked <span className='off'>{bookmarked.length}</span> animes!</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
