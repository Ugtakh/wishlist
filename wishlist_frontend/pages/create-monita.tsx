import type { NextPage } from "next";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';

//import CSS
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

interface IHeader {
	imgUrl?: string;
}
interface INumber{
    number?: string;
}
interface ISelectedUser{
    name: string;
    photo: string;
}

const Header = ({imgUrl}:IHeader)=>{
    return(
        <div className="create-monita__header">
            <div className="create-monita__header__cover">
            <img src={imgUrl} alt=""/>
            </div>
        </div>
    )
}

const DateComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};

const SelectedUser = ({ name, photo}: ISelectedUser) =>{
    return (
        <div className="member">
            <div className="member__name">
                <img src={photo} alt={name + "-img"}/>
            </div>
            <div className="member__img">
                {name}
            </div>
        </div>
    );
    }

    

const CreateMonitaGroup :NextPage= () =>{

    const [state, setState] = React.useState({
        name: "",
        description: "",
        phase: "1",
      });
    const defaultImgUrl = "https://www.smartdatajob.com/images/joomlart/demo/default.jpg";
    const options = ["1", "2", "3"];
    const defaultOption = options[0];
//Songoson hereglegchiig custom data uusgej yvav
    var selectedUser = [
        {userId: 1, name:"Аззаяа", photo:"https://randomuser.me/api/portraits/thumb/women/9.jpg"}, 
        {userId: 2, name:"Угтахбаяр", photo:"https://randomuser.me/api/portraits/thumb/men/72.jpg"},
        {usreId: 3, name:"Одбаяр", photo:"https://randomuser.me/api/portraits/thumb/men/71.jpg"}
        ]
      
    function handleChange(e: any) {
    
        setState({ ...state, [e.target.name]: e.target.value });
         console.log(state);
      }

      function createMonita(){
          console.log(state);
      }

      const monitaPhases = (number: string) => {
        // select option-с орж ирж байга утга стринг тул энэ хэсэг 
        // заавал string to number хувиргалт хийнэ.
        const num = Number(number);

        // content гэсэн array todor huv niit songoson element ee oruulj ogno
        let content = [];
        for (let i = 1; i <= num; i++) {
            //songoson toogoor davtalt hiij array push hiine
            content.push(<div key={i} className="phase__input-info">
                            <div className="phase__input-info__field">
                                <p>Нэр:</p> 
                                <input
                                    name="phase-title"
                                    type="text"
                                    placeholder="Сэдвийн нэр..."
                                    value=""
                                    required
                                />
                            </div>
                            <div>
                                <DateComponent/>
                            </div>
                        </div>)
                }

            return content;
    }

      function onSelect(eventKey: any, event: Object) {
          setState({ ...state, phase: eventKey.value });
          console.log(state);
      }

    return (
         
        <div className="create-monita">
            <Header imgUrl={defaultImgUrl}/>
            <div className="create-monita__name">
                <div className="create-monita__name__title">Нэр</div>
                    <div className="create-monita__name__input">
                        <input
                            name="name"
                            type="text"
                            placeholder="Монита нэр оруулна уу..."
                            onChange={handleChange}
                            value={state.name}
                            required
                        />
                    </div>
                        <div className="create-monita__date">
                            <div>Монита задрах өдөр</div>
                            <div><DateComponent/></div>
                        </div>
            </div>
            <hr className="create-monita__line"/>
        <div className="create-monita__date">
   
        </div>
        <div className="phase">
        <div className="phase__name">
        <p>Хэдэн үе шаттай монта зохиох вэ?</p>
        </div>
        <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
        </div>
        <hr className="create-monita__line"/>
        <div className="phase__entered">
       {
           //React component for ashiglaj bolohgui bsan tul ene function ashiglaj davtal ashiglav @h
       }
        <ol>{monitaPhases(state.phase)}</ol>

        </div>
        <hr className="create-monita__line"/>
        <div className="user-section">
            <div className="user-section__input-field">
                <div>Хэрэглэгч нэмэх</div>
                <div>Search bar</div>
                <div>add button</div>
            </div>
            <div className="user-section__users">
                
                    {
                        selectedUser.map(el => <SelectedUser name={el.name} photo={el.photo}/>)
                    }
            </div>
        </div>
        <div >
            <button onClick={createMonita}> Үүсгэх</button>
        </div>
        </div>
    );
}

export default CreateMonitaGroup
