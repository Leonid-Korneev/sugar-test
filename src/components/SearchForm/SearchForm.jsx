import {useForm} from "react-hook-form";
import React from "react";
import style from "./SearchForm.module.css"

export const SearchForm = ({getFilteredClients}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        getFilteredClients(data.searchField)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_block}>
                <input className={style.input} onChange={handleSubmit(onSubmit)} name="searchField"
                       placeholder={"Search..."} ref={register}/>
                {/*<button className={style.button_submit} type="submit"> Search</button>*/}
            </div>
        </form>
    )
}