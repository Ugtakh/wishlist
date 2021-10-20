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
            <div className="create-monita__name">Монатны нэр</div>
        </div>
    )
    }

const CreateMonitaGroup :NextPage= () =>{
    // const [startDate, setStartDate] = useState(new Date());
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [state, setState] = React.useState({
        name: "",
        description: ""
      });
    const defaultImgUrl = "https://www.smartdatajob.com/images/joomlart/demo/default.jpg";

    function handleChange(e: any) {
      
        setState({ ...state, [e.target.name]: e.target.value });
         console.log(state);
      }

    return (
        <>
         
        <div className="create-monita">
            <Header imgUrl={defaultImgUrl}/>
        </div>
        <div className="create-monita__name-input">
        <input
        name="name"
        type="text"
        placeholder="Монита"
        onChange={handleChange}
        value={state.name}
        required
      />
        </div>
        <div>
   
        </div>
       
        </>
    );
}

export default CreateMonitaGroup
