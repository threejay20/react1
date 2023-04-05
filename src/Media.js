import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom";
const x = document.createElement("div")
const Media = () => {
    const [media, setMedia] = useState([])
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

    return (
        <div><div>{media.Name}</div>
            {/*<img src={media.Images[0].Url}/>*/}
            {/*{   */}
            {/*    media.Images.map(image =>*/}
            {/*    <img src={image.Url} alt="none"/>*/}
            {/*)}*/}
        </div>
    )}

export default Media;