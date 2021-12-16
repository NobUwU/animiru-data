import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Data, gogoUrl,
} from '../data'

import './404.scss'
import './User.scss'

const FourOFour: React.FC = () => {
  return (
    <div id='fourofour'>
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
  const userBookmark = bookmarks.filter((u) => u.userId === user?.userId)

  function newLocation(url: string, blank = false): void {
    if (blank) window.open(url)
    else window.location.replace(url)
  }

  if (user) {
    return (
      <div id='user'>
        <div className='content'>
          <div className='banner'>
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
            <p className='id'>{user.userId}</p>
          </div>
          <div className='userInfo'>
            <h1>{user.username}<span>#{user.discriminator}</span></h1>
            <div className='divider'></div>
            <div className='anime'>
              {/* <h1>Bookmarks</h1> */}
              <div className='bookmarks'>
                <h1>Bookmarks</h1>
                <div className='watchedContent'>
                  {
                    userBookmark.map((anim, i) => (
                      <div className='watchedTitle' key={i} onClick={() => newLocation(gogoUrl + 'category/' + anim.id, true)}>
                        <img src={anim.img} alt={anim.title} />
                        <div className='dim'></div>
                        <div className='titleInfo'>
                          <p></p>
                          <p className='episodeName'>{anim.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <br />
              <div className='watched'>
                <h1>Watched</h1>
                <div className='watchedContent'>
                  {
                    userAnime.map((anim, i) => (
                      <div className='watchedTitle' key={i} onClick={() => newLocation(gogoUrl + anim.id + '-episode-' + anim.episode, true)}>
                        <img src={anim.img} alt={anim.title} />
                        <div className='dim'></div>
                        <div className='titleInfo'>
                          <p className='episodeNum'>{anim.episode}</p>
                          <p className='episodeName'>{anim.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
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
