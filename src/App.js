import React,{useState} from "react";
import "./style.css";

export default function App() {
 const[value,setvalue]=useState("")
 const[color,setcolor]=useState()
 let vow =["a","i","e","o","u"]
function captureValue(e){
setvalue(e.target.value)
if(vow.includes(value[0])&& value[0]=="a"){
  setcolor("blue")

}
else if(vow.includes(value[0])&& value[0]=="e"){
  setcolor("red")

}
else{setcolor("purple")}
}
// console.log(value)
function handleColor(){
if(vow.includes(value[0])&& value[0]=="a"){
  setcolor("blue")

}
else if(vow.includes(value[0])&& value[0]=="e"){
  setcolor("red")

}
else{setcolor("purple")}

}
  return (
    <div style={{backgroundColor:color}}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onChange={captureValue}/>
      <button onChange ={handleColor}>change color</button>
    </div>
  );
}
