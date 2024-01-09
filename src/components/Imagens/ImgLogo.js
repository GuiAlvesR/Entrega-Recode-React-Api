import React from 'react'

export default function Img(props) {

    return (
        <>
            <img src={props.img} style={{ widht: '100px', height: '100px' }}
                alt="Imagem"></img>

        </>

    )

}