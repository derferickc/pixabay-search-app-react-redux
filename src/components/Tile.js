import React from "react"
import { FaStar, FaThumbsUp } from 'react-icons/fa'
 
export default function Tile (props) {
  let tagsArr = props.tags.split(', ')
  const indexOfID = props.savedImages.findIndex((saved) => saved.id === props.id)

  return (
    <div className='tile-wrapper'>
      <div className="tile-image col-7">
        <div className="tile-inner">
          <img src={props.previewURL} alt={props.id}/>
          {/* if the id of the tile doesn't exist in saved items array, show pink, else show orange */}
          {indexOfID === -1
            ? <div className="overlay-pink" onClick={() => props.savePicture(props.id, props.previewURL)}>Save</div>
            : <div className="overlay-orange" onClick={() => props.savePicture(props.id, props.previewURL)}>Saved</div>}
        </div>
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