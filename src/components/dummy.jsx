import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxCross1, RxPlus } from 'react-icons/rx'
import axios from 'axios'
export const AddUser = ({modalOpen, handleOnClick}) => {
    const [user, addUser] = useState({
        name: "",
        username: "",
        email: "",

    
      });
    
    
      const { name, username, email, street, city, zipcode } = user;
      const onInputChange = (e) => {
        //update the previous state
        console.log(e.target.name,e.target.value)
        
      
          addUser({ ...user, [e.target.name]: e.target.value });
          console.log({ ...user, [e.target.name]: e.target.value });

        
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users/", user);
        //redirect to home page after posting
        redirect("/");
      };

  return (
    <div className={`${modalOpen ? "absolute" : "hidden"} top-0  bg-black/30 left-0 z-10 w-full h-screen`}>
    <div className="flex items-center justify-center h-full ">
        <div className='w-[600px] py-5 max-h-[600px] bg-white p-3 drop-shadow-lg relative'>
            <h2 className='text-2xl font-normal mt-3'>Add Product</h2>
            <hr />
            <div className='grid grid-cols-2 gap-3 px-3 mt-3'>
            <form method='post' className="row g-3 p-3 shadow-lg">
            <h4>ADD USER</h4><hr />
            <div className="col-md-6 ">
              <label className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                value={name}

                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6 ">
              <label className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Set a Username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6 ">
              <label  className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>






            <div className="col-12">
              <input type="submit" className="btn btn-primary" value="create" />
            </div>
          </form>


            </div>

            <div onClick={handleOnClick} className="absolute right-0 top-0 p-3">
                <RxCross1 />
            </div>


        </div>



    </div>
</div>
  )
}
