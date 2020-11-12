import style from "./App.module.css"
import "./components/Preloader/Preloader.css"
import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Preloader} from "./components/Preloader/Preloader";
import {apiRequest} from "./Api/ApiRequests";
import {Table} from "./components/Table/Table";
import {SearchForm} from "./components/SearchForm/SearchForm";
import Pagination from '@material-ui/lab/Pagination';


function App() {
    const [clients, setClients] = useState([])
    const [filteredClients, setFilteredClients] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [lastPage, setLastPage] = useState(1)
    const [totalClientsCount, setTotalClientsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 25


    const getFilteredClients = (filterString) => {
        setFilteredClients([...clients.filter((client) => {
            debugger
                return (client["first_name"].toLowerCase().includes(`${filterString.toLowerCase()}`)) ||
                    (client["last_name"].toLowerCase().includes(`${filterString.toLowerCase()}`))
            }
        )])

        setCurrentPage(1)


    }


    useEffect(()=> {
        setTotalClientsCount(filteredClients.length)
    },[filteredClients])
    useEffect(() => {
        setIsFetching(true)
        apiRequest.getClients(lastPage).then(
            (response) => {
                setClients(()=> [...clients, ...response.data])
                     setIsFetching(false)
            }
        )
    }, [lastPage])
    useEffect(()=>{
        setFilteredClients([...clients])
        setTotalClientsCount(clients.length)
    },[clients])



    return (
        <div className="container">
            {isFetching ? <Preloader/> : <>
                <SearchForm getFilteredClients={getFilteredClients}/>
                <Table  pageSize={pageSize} currentPage={currentPage} clients={  filteredClients  }/>

                <div className={style.footer_wrapper}>
                <Pagination   count={Math.ceil(totalClientsCount/pageSize)} page={currentPage} onChange={
                    (e,page)=>{setCurrentPage(page)}
                }/>

                <button className={style.showMoreUser_btn} onClick={()=>{setLastPage(lastPage+1)}}>Show more clients </button>
                </div>
                </>}


        </div>
    );

}

export default App;
