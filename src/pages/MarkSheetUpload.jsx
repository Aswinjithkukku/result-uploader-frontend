import React, { useEffect, useState } from 'react'
import axios from "../axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function MarkSheetUpload() {
    const { token } = useSelector((state) => state.users);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [exams, setExams] = useState([]);
    const [loader, setLoader] = useState(false);
    const [exam, setExam] = useState('');
    const [file, setFile] = useState();
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();

    const fetchExamData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/dropdown/exam/", {
                headers: {
                    authorization: `Token ${token}`,
                },
            });
            setExams(response?.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoader(true)
            let formdata = new FormData();
            formdata.append('exam', exam);
            formdata.append('doc', file);
            await axios.post("/upload/marksheet/", formdata, {
                headers: {
                    'content-type': 'multipart/form-data',
                    'authorization': `Token ${token}`
                }
            })
            Swal.fire("Good job!", "Marksheet Uploaded Successfully!", "success");
            setLoader(false)
            setError("")
        } catch (err) {
            setError(err?.response?.data[0])
            setLoader(false)
        }
    }


    useEffect(() => {
        fetchExamData();
    }, []);
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 ">
                <h2 className="mb-4 text-2xl pl-9 pb-5 font-semibold leading-tight">MarkSheet Upload - Student Name</h2>
                <div className="overflow-x-auto px-11 flex min-h-[55vh] justify-center items-center">
                    <form action="" className='w-full ' onSubmit={handleSubmit}>
                        <div className='pb-9'>
                            <label htmlFor="exams" className="block mb-2 text-sm font-medium text-gray-900">Select Examination:</label>
                            <select value={exam} onChange={(e) => setExam(e.target.value)} id="exams" className=" bg-blue-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full sm:w-1/2 p-2.5 ">
                                <option value="" >Choose a Exam</option>
                                {
                                    exams?.map((exam, index) => (
                                        <option key={index} value={exam.id}>{exam.exam_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='pb-9'>
                            <label htmlFor="marksheet" className="block mb-2 text-sm font-medium text-gray-900 ">Upload Marksheet:</label>
                            <label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".pdf" className="text-sm text-grey-500 
                                    file:mr-5 file:py-2 file:px-6
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-medium
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:cursor-pointer hover:file:bg-blue-100
                                    hover:file:text-blue-800
                                " />
                            </label>
                            <p className="mt-4 ml-2 text-sm text-gray-400 " id="file_input_help">
                                Upload PDF File of the result from University Of Calicut Portal
                            </p>
                        </div>
                        <div className="flex items-center pb-5">
                            <input id="link-checkbox" type="checkbox" value="" onChange={() => setDisabled(!disabled)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2" />
                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">I accept the above given Document and details are true.</label>
                        </div>
                        {error &&
                            <div>
                                <p className='text-sm text-red-600 pb-3'>
                                    {error}
                                </p>
                            </div>
                        }
                        <button type="submit" disabled={disabled}
                            className={`${disabled ? "cursor-not-allowed bg-blue-200 hover:bg-blue-200/80" : "cursor-pointer bg-blue-700 hover:bg-blue-800"} text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-6  focus:outline-none `}>
                            Upload
                        </button>
                        <span
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                            onClick={() => navigate(-1)}>
                            Cancel
                        </span>
                        {
                            loader &&
                            <div role="status py-10">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MarkSheetUpload