import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import PageLoader from "../components/PageLoader";

function SubjectWiseResultPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { token } = useSelector((state) => state.users);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/subject/result/", {
                headers: {
                    authorization: `Token ${token}`,
                },
                params: {
                    subject: params.subid
                }
            });
            setStudents(response?.data)
            setIsLoading(false);
        } catch (err) {
            console.log(err.response.data[0]);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className="max-w-screen-xl p-2 mx-auto sm:p-4 ">
                <div className="flex justify-between items-center pr-9">
                    <h2 className="mb-4 text-2xl pl-9 pb-5 font-semibold leading-tight text-gray-400">
                        Subject Wise List - {students.subject}
                    </h2>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>

                <div className="overflow-x-auto px-11 flex my-10 justify-center items-center">
                    <div className="relative overflow-x-auto w-full">
                        {isLoading ? (
                            <PageLoader />
                        ) : (
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                                    <tr>
                                        <th scope="col" className=" py-3">
                                            Sl No.
                                        </th>
                                        <th scope="col" className=" py-3">
                                            Student Name
                                        </th>
                                        <th scope="col" className=" py-3">
                                            Grade
                                        </th>
                                        <th scope="col" className=" py-3">
                                            Grade Point
                                        </th>
                                        <th scope="col" className=" py-3">
                                            Credit
                                        </th>
                                        <th scope="col" className=" py-3">
                                            Credit Point
                                        </th>
                                        <th scope="col" className=" py-3">
                                            Status
                                        </th>
                                        <th scope="col" className=" py-3">
                                            <p>&nbsp;</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students?.marks?.map((item, index) => (
                                        <tr key={item?.id} className="bg-white border-b ">
                                            <td className="py-2 text-center">{index + 1}</td>
                                            <td className="py-2 ">{item.student__user__first_name}</td>
                                            <td className="py-2 ">{item.grade}</td>
                                            <td className="py-2 ">{item.grade_point}</td>
                                            <td className="py-2 ">{item.credit}</td>
                                            <td className="py-2 ">{item.credit_point}</td>
                                            <td className={`${item.status === "Passed" ? "text-green-600" : "text-red-600"} font-semibold`}>{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectWiseResultPage