import React from 'react'

const FriendLink = (props) => {
    return <div>
            <a 
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="color-black">
              {props.author}
              </h3>
            </a>
            <p className={props.color}>
                {props.title}
            </p>
          </div>

}
export default FriendLink