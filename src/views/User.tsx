import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../data'

import './404.scss'
import './User.scss'

const FourOFour: React.FC = () => {
  return (
    <div id="fourofour">
      {
        new Array(3).fill(undefined)
          .map((_, i) => <h1 key={i}>404</h1>)
      }
    </div>
  )
}
const User: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const users = Data.users
  const episodes = Data.watched
  const bookmarks = Data.bookmarks
  
  const user = users.find((u) => u.userId === id)
  const userAnime = episodes.filter((u) => u.userId === user?.userId)
  const userBookmark = episodes.filter((u) => u.userId === user?.userId)

  if (user) {
    return (
      <div id="user">
        <div className="content">
          <div className="banner">
            {
              user.banner
                ? <img
                  src={user.banner?.replace('?size=1024', '?size=4096') ?? ''}
                  alt={user.username}
                  onError={(event) => {
                    const t = event.target as HTMLImageElement
                    t.replaceWith('<div class="bannerfill"></div>')
                  }}
                />
                : <div className='bannerfill' style={{ backgroundColor: user.banner_color ?? '#000000' }}></div>
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
            <div className="anime">
              <h1>Bookmarks</h1>
              <h1>Watched</h1>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <FourOFour />
  }
}

export default User
