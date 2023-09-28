import React from 'react'

const loadingImg = require('../../assets/icons8-refresh.gif')

export function TheatreDataLoading(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            // background: 'cadetblue',
            marginTop: '12%'
        }}>
            <img src={loadingImg} style={{borderRadius: '75%', height: '150px', width: '150px'}}/>
            <h2 style={{color: 'whitesmoke'}}>Loading... {props.value} shows</h2></div>
    )
}