import type { NextPage } from "next";
// import Header from "../components/createmonita/Header";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
interface IHeader {
	imgUrl?: string;
}

const Header = ({imgUrl}:IHeader)=>{
    return(
        <div className="create-monita__header">
            <div className="create-monita__header__cover">
            <img src={imgUrl} alt=""/>
            </div>
            <div className="create-monita__name">Монатны нэрийг оруулна уу</div>
        </div>
    )
    }

const CreateMonitaGroup :NextPage= () =>{
    // const [startDate, setStartDate] = useState(new Date());
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const defaultImgUrl = "https://www.smartdatajob.com/images/joomlart/demo/default.jpg";


    return (
        <>
         
        <div className="create-monita">
            <Header imgUrl={defaultImgUrl}/>
        </div>
        <div>
       
        </div>
        <div>
   
        </div>
       
        </>
    );
}

export default CreateMonitaGroup
