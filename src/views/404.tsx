import React from 'react'

import './404.scss'

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

export default FourOFour
