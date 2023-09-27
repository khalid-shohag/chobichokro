import React from 'react'
const loadingImg = require('../../assets/load_image.gif')

export function DataLoading(props) {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            // background: 'cadetblue',
            marginTop: '12%'
          }}>
          <img src={loadingImg} style={{borderRadius: '75%', height: '150px', width: '150px'}} />
          <h2>Loading... {props.value}</h2></div>
    )
}