import React ,{useState} from 'react'
import '../App.css'

export const Test = () => {
    const [valueFlag, setValueFlag] = useState('') 

    // const viewState =()=>{
    //     if(valueFlag){
    //         return 'true'
    //     }else{
    //         return 'false'
    //     }
    // } 

    return (
        <div className="App-header">
            <form>
            <input type = 'button' value = 'Add true' onClick ={()=>{
                setValueFlag(true)
            }}/>
            <input type = 'button' value = 'Add false' onClick={()=>{
                setValueFlag(false)
            }}/>
            <br/>
            <input type='text' value={valueFlag}/>
            </form>
            
            <br/><br/><br/>
        </div>
    )
}
