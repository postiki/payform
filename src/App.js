import React, {useState} from "react";
import '../src/App.scss';

import PayForm from "./components/PayForm/PayForm";
import VisualPayForm from "./components/VisualPayForm/VisualPayForm";
import Back from "./components/Back/Back";
import Footer from "./components/Footer/Footer";
import TrueC from "./components/True/True";
import FalseC from "./components/False/False";

import logo from "./icons/logo.svg"


function App() {

    const [cardNumb, setCardNumb] = useState('');
    const [cardMY, setCardMY] = useState('');
    const [cardCvv, setCardCvv] = useState('');

    const [showTrue, setShowTrue] = useState(false)
    const [showFalse, setShowFalse] = useState(false)
    const [hideCards, setHideCards] = useState(true)

    function number (props) {
        console.log(props);
        setCardNumb(props);
    }

    function my (props) {
        console.log(props);
        setCardMY(props);
    }

    function cvv (props) {
        console.log(props);
        setCardCvv(props);
    }

    function validation (props) {
        if (props){
            setShowTrue(props)
        } else {
            console.log(props)
            setShowFalse(!props)
        }

        setHideCards(false)
    }

    return (
        <div className='window'>
            <div className='first' >
                <Back hideCards={hideCards}/>
                {showTrue && <TrueC/>}
                {showFalse && <FalseC />}
                {hideCards && <VisualPayForm numb={cardNumb} my={cardMY} cvv={cardCvv}/>}
                <div className='down'>
                    <h1>Работает на платформе <b>MaxPay</b></h1>
                    {hideCards && <h6>Совершая перевод вы соглашаетесь с <b>локальными актами</b> платформы</h6>}
                </div>
            </div>
            <div className='second'>
                {hideCards && <div className='head'>
                    <p>ПОДТВЕРЖДЕНИЕ ПЛАТЕЖА</p>
                </div>}
                {hideCards && <PayForm number={number} my={my} cvv={cvv} validation={validation}/>}
                {!hideCards && <img className='logomain' src={logo}/>}
            </div>
            <Footer />
        </div>
    );
}

export default App;
