import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""
        
    })
    const InputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata", data).then(
            (response) => {
                console.log(response.data)

                if (response.data.status == "success") {
                    alert("Stu added")

                } else {
                    alert("error")
                }
            }
        ).catch()
            .finally()
    }

return (
    <div>
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label control-label">name</label>
                            <input type="text" className="input form-control" name='name' value={data.name} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label control-label">friendName</label>
                            <input type="text" className="input form-control" name='friendName' value={data.friendName} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label control-label">friendNickName</label>
                            <input type="text" className="input form-control" name='friendNickName'value={data.friendNickName} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label control-label">DescribeYourFriend</label>
                            <input type="text" className="input form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-danger" onClick={readvalue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Add