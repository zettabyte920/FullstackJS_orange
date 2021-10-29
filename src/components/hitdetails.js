import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

export default function Hitdeatils() {
    const [image, setImage] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=16038116-1601cf38aef095472d2f0b59f&id=${id}`).then((res) => setImage(res.data.hits[0]))
    }, []);
    return (
        <div>
            <h1>{image.tags} | {image.webformatWidth}X{image.webformatHeight}</h1>
            <img src={image.largeImageURL} alt={image.tags}></img><br />
            <ul>
                <li>Views: <b>{image.views}</b></li>
                <li>Comments: <b>{image.comments}</b></li>
                <li>Downloads: <b>{image.downloads}</b></li>
            </ul>
        </div >
    );
}