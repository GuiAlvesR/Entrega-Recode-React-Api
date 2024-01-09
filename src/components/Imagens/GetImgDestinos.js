import React from 'react'

export default function GetImgDestinos(props) {
    const { className } = props;
    return (
        <>
             <img src={props.img} style={{ widht: '420px', height: '210px', marginTop: '12px' }}
                alt="Imagem" className={className}></img>

        </>

    )

}