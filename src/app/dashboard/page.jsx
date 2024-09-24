"use client"

import react, { useEffect, useState } from "react";
import styles from './page.module.css';
import useSWR from 'swr'

const DashBord = () => {
    // const [data,setData] = useState([])
    // const [error,setError] = useState(false)
    // const [isloading,setIsLoading] = useState(false)

    // useEffect(()=>{
    //     async function  getData() {
    //         setIsLoading(true)
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    //             cache:'no-store'
    //         })
    //         if (!res.ok) {
    //             setError(true)
    //         }

    //         const data = await res.json();

    //         setIsLoading(false)
    //         setData(data)
    //     }
    // },[])
    // console.log(data)

    const fetcher = (...args) => fetch(...args).then(res.json())

    const {data,error,isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts',fetcher)
    console.log(data)

    return (
        <div className={styles.container}>DashBord</div>
    )
}

export default DashBord
