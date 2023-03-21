import React from 'react'

function MarkSheetUpload() {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
                <h2 className="mb-4 text-2xl pl-9 pb-5 font-semibold leading-tight">MarkSheet Upload - Student Name - Semester Name</h2>
                <div className="overflow-x-auto px-11 flex min-h-[55vh] justify-center items-center">
                    <form action="" className='w-full'>
                        <div className='pb-9'>
                            <label for="exams" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Examination:</label>
                            <select id="exams" class=" bg-blue-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-1/2 p-2.5 ">
                                <option selected>Choose a Exam</option>
                                <option value="1">Semester 1</option>
                                <option value="1">Semester 1</option>
                                <option value="1">Semester 1</option>
                                <option value="1">Semester 1</option>
                                <option value="1">Semester 1</option>
                            </select>
                        </div>


                        <div className='pb-9'>
                            <label for="marksheet" class="block mb-2 text-sm font-medium text-gray-900 ">Upload Marksheet:</label>
                            <label>
                                <input type="file" accept=".pdf" class="text-sm text-grey-500 
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

                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Upload
                        </button>
                        <button type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            Cancel
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default MarkSheetUpload