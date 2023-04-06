import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom";




const x = document.createElement("div")
const Media = () => {
    const [media, setMedia] = useState(undefined)

//
//     const [id, setId] = useState([])
    const {id}=useParams()
    const fetchMediaData = async () => {
        fetch("http://localhost:8080/get_media/" + id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMedia(data)
            });





    }

    useEffect(() => {
        fetchMediaData()
    }, [])
console.log(media)
    return media &&(

            <div>
            <h1>{media.Name}</h1>
            <h2>{media.ShortDesc}</h2>
            <h3>{media.Desc}</h3>
            <h4>{media.genres}</h4>
                {
                    media.Images.length !==0 ?<img src={media.Images[0].Url}/> : <h5>img</h5>
                }
            {/*<img src={media.Images[0].Url}/>*/}
            {/*{   */}
            {/*    media.Images.map(image =>*/}
            {/*    <img src={image.Url} alt="none"/>*/}
            {/*)}*/}
        </div>)


    }

export default Media;



