import React, { useEffect, useState } from 'react'
import axios from "../axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import Swal from 'sweetalert2';

function MarkSheetUpload() {
    const { token } = useSelector((state) => state.users);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [exams, setExams] = useState([]);
    const [loader, setLoader] = useState(false);
    const [exam, setExam] = useState('');
    const [file, setFile] = useState();



    const fetchExamData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/dropdown/exam/", {
                headers: {
                    authorization: `Token ${token}`,
                },
            });
            setExams(response?.data);
            console.log(exams);
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
            Swal.fire("Good job!", "You clicked the button!", "success");
            setLoader(false)
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
            <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
                <h2 className="mb-4 text-2xl pl-9 pb-5 font-semibold leading-tight">MarkSheet Upload - Student Name</h2>
                <div className="overflow-x-auto px-11 flex min-h-[55vh] justify-center items-center">
                    <form action="" className='w-full ' onSubmit={handleSubmit}>
                        <div className='pb-9'>
                            <label for="exams" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Examination:</label>
                            <select value={exam} onChange={(e) => setExam(e.target.value)} id="exams" class=" bg-blue-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-1/2 p-2.5 ">
                                <option selected>Choose a Exam</option>
                                {
                                    exams?.map((exam, index) => (
                                        <option value={exam.id}>{exam.exam_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='pb-9'>
                            <label for="marksheet" class="block mb-2 text-sm font-medium text-gray-900 ">Upload Marksheet:</label>
                            <label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".pdf" class="text-sm text-grey-500 
                                    file:mr-5 file:py-2 file:px-6
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-medium
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:cursor-pointer hover:file:bg-blue-100
                                    hover:file:text-blue-800
                                " />
                            </label>
                            <p class="mt-4 ml-2 text-sm text-gray-400 dark:text-gray-300" id="file_input_help">
                                Upload PDF File of the result from University Of Calicut Portal
                            </p>
                        </div>
                        <div class="flex items-center pb-5">
                            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
                            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept the above given Document and details are true.</label>
                        </div>
                        { error &&
                            <div>
                                <p className='text-sm text-red-600 pb-3'>
                                    {error}
                                </p>
                            </div>
                        }
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Upload
                        </button>
                        <span
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            Cancel
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MarkSheetUpload