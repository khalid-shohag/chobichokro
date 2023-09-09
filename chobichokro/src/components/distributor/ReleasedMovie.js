import React, { Component } from "react";
import { Button, Media } from "reactstrap";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import { useState } from "react";


function ReleasedMovie(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageNo, setPageNo] = useState(1);
    const [startIndex, setStartIndex] = useState(1);
    const [endIndex, setEndInedx] = useState(5);

    // const [viewDetails, setViewDetails] = useState(false)

    // const handleView = () => {
    //     setViewDetails(true);
    // }

  const incrementPageNo = () => {
    if (pageNo == 15)
        setPageNo(15);
    else
        setPageNo(pageNo + 1);
    if (pageNo < 15) {
        setStartIndex(5*(pageNo-1) + 1);
        setEndInedx(5*pageNo)
    }

  };
  const decrementPageNo = () => {
    if (pageNo == 1)
        setPageNo(1);
    else
        setPageNo(pageNo - 1);
    if (pageNo > 1) {
        setStartIndex(5*(pageNo-1) + 1);
        setEndInedx(5*pageNo)
    }
    

  };


    const handlePageChange = newPage => {
        setCurrentPage(newPage);
    };


  const numberOfTimes = 5;

  const renderMovieLists = () => {
    const movieLists = [];
    for (let i = startIndex-1; i < endIndex; i++) {
      let colors = 'aqua';
     i%2 === 0 ? colors = 'aqua' : colors = 'lime'
        
      movieLists.push(<MovieList key={i} colorValue = {colors} handleChange = {props.handle}/>);
    }
    return movieLists;
  };

    return(
        <div>
           
            {renderMovieLists()}
            <div>
                Page {pageNo}
                <Button onClick={decrementPageNo} style={{marginLeft: '10px'}}>prev</Button>
                <Button onClick={incrementPageNo} style={{marginLeft: '10px'}}>next</Button>
            </div>
            
        </div>
    );

}

export default ReleasedMovie;