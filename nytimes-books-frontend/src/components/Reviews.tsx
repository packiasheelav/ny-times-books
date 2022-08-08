import React, { useState, useEffect, MouseEventHandler } from "react";
import { UseDataFetching } from '../useDataFetching';
import { Book, ListNames } from '../interfaces/Books';

type Props = {
    isbn: string,
    showReviews:(isbn: any) => any;
    handlecloseReviews:()=>void;
  };
const Reviews = ({isbn, showReviews, handlecloseReviews}:Props) => {

    /*  const [data, error, loading] = UseDataFetching(`http://127.0.0.1:9090/api/reviews/${isbn}`);
      console.log('isbn', isbn)
  
  
      useEffect(() => {
          if (data) {
              if (data?.results?.length > 0) {
                  console.log('isbn', isbn)
  
              }
          } 
      }, [data]);
  
      useEffect(() => {
          if (error) {
              console.log("error", error);
          }
      }, [error]);
  
      useEffect(() => {
          if (loading) {
              console.log("Fetching...");
              
          }
      }, [loading]);
  
  */
    return (
        <>
            <button id="myBtn" >Show Review</button>
           
        </>
    );

}
export default Reviews;
