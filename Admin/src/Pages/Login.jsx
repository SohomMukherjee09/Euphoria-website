import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
  return (
    <>
    <div className='container'>

        <div className='row'>
            <div className="col-md-4 frm">
                <p>Email</p>
                <p><input onChange={(e)=>{
                    setemail(e.target.value)
                }} type="email" className='form-control' /></p>
                <p>Password</p>
                <p><input  onChange={(e)=>{
                    setpass(e.target.value)
                }}  type="password" className='form-control' /></p>

                <button onClick={async()=>{
                  var fd = new FormData();
                  fd.append("email",email)
                  fd.append("pass",pass)

                  var resp = await fetch("http://localhost:2000/admin/login",{
                    method:"POST",
                    body:fd
                  })

                  var data = await resp.json();
                  console.log(data);
                  
                }} className=' btn btn-success' >Login</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
