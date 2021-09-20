import React, {useState} from 'react'

function Rendu() {

    const [toggleState, setToggleState] = useState(true);
    const toggleFunction = () => {
        setToggleState(!toggleState)
    }

    let toggledDiv;
    if(toggleState) {
        toggledDiv = <div onClick={toggleFunction} style={{background: 'red'}}>Clique moi</div>
    }
    else {
        toggledDiv = <div onClick={toggleFunction} style={{background: 'green'}}>Clique moi</div>
    }

    return (
        <div>
            <header>
                {toggledDiv}
                <div onClick={toggleFunction} style={toggleState ? {background:'pink'} : {background:'black'}}>Clique moi</div>


                {(function() {
                        if(toggleState){
                            return <button>Login</button>
                        }
                        else{
                            return <button>Logout</button>
                        }
                }) ()} 
                
                {/* fonction qui s'appelle 'iife' pour immediately invoque function expression*/}

            </header>
            
        </div>
    )
}

export default Rendu
