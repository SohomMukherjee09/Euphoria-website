
import React, { useState } from 'react'
import { start } from 'repl'

const Home = () => {

  const [name, setname] = useState("")
  const [gender, setgender] = useState("")
  const [stream, setstream] = useState("")
  const [img, setimg] = useState(null)
  const [add, setadd] = useState("")
  
  return (
    <div className='flex flex-col gap-4 p-12 '>
      <div className='flex gap-3'>
        
        {gender}
        <label>Name</label>
      <input type="text" className='border-2' onChange={(e)=>{
        setname(e.target.value)
      }} />
      </div>
      <div className='flex gap-3' >
          <label>Gender</label>

      <label ><input type="radio" name="gender" value="male" className='border-2' onChange={(e)=>{
        setgender(e.target.value)
      }}  />Male</label>
      <label ><input type="radio" name='gender'className='border-2' value="female" onChange={(e)=>{
        setgender(e.target.value)

        
      }}  />Female</label>
      </div>
    
      <label >Stream</label>

      <p>

        <select name="" id="" className='border-2' onChange={(e)=>{
            setstream(e.target.value);
        }} >

          <option value="not selected">-Select-</option>
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="me">ME</option>
        </select>
        
      </p>

      <div>
        <label htmlFor="">Image</label>
        <input type="file" name="" id=""  className='border-2 w-xs p-3'  onChange={(e)=>{
            setimg(e.target.files[0]);
        }} />
      </div>
        <label htmlFor="">Address</label>
        <p><textarea className='border-2'onChange={(e)=>{
            setadd(e.target.value);
        }}  ></textarea></p>

        <button className='border-2 p-4 w-xs' onClick={async()=>{
            var fd = new FormData()
            fd.append("name",name);
            fd.append("gender",gender);
            fd.append("stream",stream);
            fd.append("address",add);
            fd.append("image",img);


            var data = await fetch("http://localhost:2000/test",{
                method:'POST',
                body:fd

            })

            data = await data.json;
            console.log(data.text);
            
        }} >Add student</button>
    </div>
  )
}

export default Home
