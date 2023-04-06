import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom";





const List = () => {
    const [list, setList] = useState(undefined)

//
//     const [id, setId] = useState([])

    const fetchMediaData = async () => {
        const response=await fetch("http://localhost:8080/number_medias/10")
          const data=await response.json()
        setList(data)
console.log("data"+data)

    }
        useEffect(() => {
            fetchMediaData()
        }, [])
    console.log(list)
        return list &&(
            <div>
                {
                    list.Items.map(file =>
                        <div class="media container">
                            <a href={`/getmovies/${file.Id}`}>{file.Name}</a>
                        </div>
                    )
                }
            </div>

        )


}
export default List;
