import { useState } from "react";

function Input(){

const [name ,setName] =useState("");
const [qty,setqty]= useState(1);
const [comment,setcomment]=useState("");
const [payment,setpayment]=useState("visa");
const [shipping,setshipping]=useState("");

function handleNameChange(e){
        setName(e.target.value);}

function hndleQtyChange(e){
    setqty(e.target.value);
}

function handleCommentChange(e){
    setcomment(e.target.value)
}

function handlePaymentChange(e){
    setpayment(e.target.value);
}

function handleshippingChenge(e){
    setshipping(e.target.value);
}

return(    
            <div className="mt-4">
            <input value={name} onChange={handleNameChange} className="mx-4  p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300"/>
            <p className="mx-4">name: {name}</p>

            <input
             value={qty}
             onChange={hndleQtyChange}
             type="number"
             className="mx-4 p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300"
             />
            <p className="mx-4">Quntety: {qty}</p>
            <textarea 
            type="text"
            onChange={handleCommentChange}
            placeholder="give your feedback"
            className="mx-4 p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300 resize-none overflow-hidden" />
            <p className="mx-4">Comment : {comment}</p>
            <select className=" p-2 m-2 rounded-[5px] bg-gradient-to-bl from-cyan-400 to-blue-700 transition-colors duration-1500 ease-in-out hover:from-blue-700  hover:to-purple-400 focus:scale-95" 
            value={payment} onChange={handlePaymentChange}>
                {/* <option className=" rounded-none bg-cyan-500 text-white hover:bg-cyan-700" value="">select option</option> */}
                <option value="visa" className=" rounded-none bg-cyan-500 text-white">Visa</option>
                <option value="Mastercard" className=" rounded-none bg-cyan-500 text-white">Mastercard</option>
                <option value="CreditCard" className="rounded-none bg-cyan-500 text-white m-2">Flipcard</option>
            </select>
            <p className="mx-4">Payment :{payment}</p>

            <label className="m-2"> 
                <input type="radio" value="Pick up" 
                  checked={shipping==="Pick up"}
                       onChange={handleshippingChenge}/>Pick up 
            </label>
             <label> 
                <input type="radio" value="Dilevary"
                      checked={shipping==="Dilevary"}
                       onChange={handleshippingChenge}/>Dilevary
            </label>
            <p className="mx-4">Comment : {shipping}</p>
            </div>
    );
}

export default Input;