import React, { useState,useEffect,useContext } from "react";
import { useCallback } from "react";

const url=`https://openlibrary.org/search.json?title=`
const AppContext=React.createContext()


const AppProvider=({children})=>{
    const [searchBook,setSearchBook]=useState('Ice and Fire')
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(true)
    const [resultTitle,setresultTitle]=useState('')

    const fetchBooks=useCallback(async()=>{
        setLoading(true)
        try{
            const response=await fetch(`${url}${searchBook}`)
            const data=await response.json();
            const {docs}=data
            if (docs){
                const newBooks=docs.slice(0,20).map((e)=>{
                    const {key,author_name,cover_i,edition_count,
                          first_publish_year,title}=e


                    return{
                        id:key,
                        author:author_name,
                        cover_id:cover_i,
                        edition_count:edition_count,
                        first_publish_year:first_publish_year,
                        title:title
                    }
                })
                setBooks(newBooks)
                if(newBooks.length>1)
                {
                    setresultTitle('Your Search Result')
                }
                else{
                    setresultTitle('No Search Result Found')
                }
            }
            else{
                setBooks([])
                setresultTitle('No Search Result Found')
            }
            setLoading(false)
        }
        catch(Error){
            console.log(Error)
            setLoading(false)
        }
    },[searchBook])

    useEffect(()=>{
        fetchBooks();
    },[searchBook,fetchBooks])


    return(
        <AppContext.Provider value={{books,loading,setSearchBook,setresultTitle,resultTitle}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}


export {AppContext,AppProvider}