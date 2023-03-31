import React, { useState } from 'react'
import { TiTick, TiTimes } from "react-icons/ti";
import axios from "../axios";
import { useSelector } from "react-redux";



function MarksRow({ item, status }) {
    const { token } = useSelector((state) => state.users);
    const [editing, setEditing] = useState(false)
    const [grade, setGrade] = useState(item?.grade)
    const [grade_point, setGrade_point] = useState(item?.grade_point)
    const [credit, setCredit] = useState(item?.credit)
    const [credit_point, setCredit_point] = useState(item?.credit_point)
    const handleSubmit = async () => {
        try {
            let formdata = new FormData();
            formdata.append('id', item.id);
            formdata.append('grade', grade);
            formdata.append('grade_point', grade_point);
            formdata.append('credit', credit);
            formdata.append('credit_point', credit_point);
            await axios.post(
                "/mark/edit/",
                formdata,
                {
                    headers: {
                        authorization: `Token ${token}`,
                    },
                }
            );
            setEditing(false)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <tr
            key={item.id}
            className="border-b border-opacity-20  h-16"
        >
            <td className="p-3">
                <p>{item?.subject_code}</p>
            </td>
            <td className="p-3">
                <p>{item?.subject_name}</p>
            </td>
            <td className="p-3">
                {
                    editing ? <input type="text" onChange={(e) => setGrade(e.target.value)} className='border w-9 p-1 rounded' value={grade} /> : <p>{grade}</p>
                }
            </td>
            <td className="p-3">
                {
                    editing ? <input type="text" onChange={(e) => setGrade_point(e.target.value)} className='border w-9 p-1 rounded' value={grade_point} /> : <p>{grade_point}</p>
                }
            </td>
            <td className="p-3">
                {
                    editing ? <input type="text" onChange={(e) => setCredit(e.target.value)} className='border w-9 p-1 rounded' value={credit} /> : <p>{credit}</p>
                }
            </td>
            <td className="p-3">
                {
                    editing ? <input type="text" onChange={(e) => setCredit_point(e.target.value)} className='border w-9 p-1 rounded' value={credit_point} /> : <p>{credit_point}</p>
                }
            </td>
            <td className="p-3">
                {item?.status === "Passed" ? (
                    <p className="font-bold text-green-700 capitalize">
                        {item?.status}
                    </p>
                ) : item?.status === "Failed" ? (
                    <p className="font-bold text-red-700 capitalize">
                        {item?.status}
                    </p>
                ) : (
                    ""
                )}
            </td>
            {
                status === "Rejected" &&
                <td>
                    {
                        !editing
                            ?
                            <button onClick={() => setEditing(true)} className="bg-blue-400 py-1 px-2 text-white rounded-md">Edit</button>
                            :
                            <div className='flex'>
                                <button onClick={handleSubmit} className='bg-green-600 rounded-md p-1 text-white mr-2'><TiTick /></button>
                                <button onClick={() => setEditing(false)} className='font-semibold text-white rounded-md p-1 bg-red-700'><TiTimes /></button>
                            </div>
                    }
                </td>
            }
        </tr>
    )
}

export default MarksRow