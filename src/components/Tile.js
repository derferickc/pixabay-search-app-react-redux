import React from "react"
import { FaStar, FaThumbsUp } from 'react-icons/fa'
 
export default function Tile (props) {
  let tagsArr = props.tags.split(', ')

  return (
    <div className='tile-wrapper'>
      <div className="tile-image col-7">
        <img src={props.previewURL} alt={props.id}/>
        <div className="overlay" onClick={() => props.savePicture(props.id, props.previewURL)}>Save</div>
      </div>

      <div className="col-5 tile-tags-likes text-left">
        <div className="tile-tags">
          {tagsArr.map((tag) => (
            <span className="tag-label" key={tag}>{tag}</span>
          ))}
        </div>

        <div className="tile-likes">
          <span className='tile-like'>
            <strong>{props.likes}</strong>
            <FaThumbsUp color='#000000' size={15}/>
          </span>

          <span className='tile-favorites'>
            <strong>{props.favorites}</strong>
            <FaStar color='#000000' size={15}/>
          </span>
        </div>
      </div>
    </div>
  )
}