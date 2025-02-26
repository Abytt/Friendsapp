import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [data,changedata]=useState([])

    const fetchdata=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{changedata(response.data)

            }
        ).catch().finally()
    }
    useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row" g-3>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">name</th>
                                            <th scope="col">friendName</th>
                                            <th scope="col">friendNickName</th>
                                            <th scope="col">DescribeYourFriend</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.index}</th>
                                                        <td>{value.name}</td>
                                                        <td>{value.friendName}</td>
                                                        <td>{value.friendNickName}</td>
                                                        <td>{value.DescribeYourFriend}</td>
                                                        
                                                    </tr>
                                                }
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default View