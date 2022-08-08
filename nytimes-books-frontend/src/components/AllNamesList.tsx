import React, { useState, useEffect } from "react";
import { UseDataFetching } from '../useDataFetching';
import { Book, ListNames } from '../interfaces/Books';

export type TBookLists = Book[];
type TListNames = ListNames[];

type Props = {
    handleNameChange:(name:string)=>void;
  };
const AllNamesList = ({handleNameChange}: Props) => {

    const [listNames, setlistNames] = useState<TListNames>([]);
    const [data, error, loading] = UseDataFetching('http://127.0.0.1:9090/api/names');

    useEffect(() => {
        if (data) {
            setlistNames(data.results);
            if (data?.results?.length > 0) {
                const firstListName = data?.results[0]?.list_name
                handleNameChange(firstListName)
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


    const handleChange = (e: any) => {
        handleNameChange(e.target.value);
    }

    return (
        <>
        {!loading?(
            <div className="list-select">
           <select onChange={handleChange}>
                {listNames?.map((list: any, index: number) => <option key={index} value={list?.list_name}>{list?.display_name}</option>)}
            </select></div>
        ):(<div>Loading...</div>)}
        </>
    );

}
export default AllNamesList;
