import React from "react";
import style from "./Table.module.css"


export const Table = ({clients, currentPage, pageSize}) => {
    return (
        <>
            {clients.length ?
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Name</th>
                    </tr>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client["first_name"]}</td>
                            <td>{client["last_name"]}</td>
                            <td>{client["email"]}</td>
                        </tr>
                    )).slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    </thead>
                    <tbody>
                    </tbody>
                </table> :
                <div className={style.failed_search_block}> Не удалость найти клиента по заданным параметрам</div>
            }
        </>
    )
}