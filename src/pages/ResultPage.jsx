import React from 'react'

function ResultPage() {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
                <h2 className="mb-4 text-2xl pl-9  font-semibold leading-tight">MarkSheet - Student Name - Course Name</h2>
                <h3 className="mb-4 text-xl pl-9 pb-5 font-semibold leading-tight text-zinc-600">Semester 1</h3>
                <div className="overflow-x-auto px-11 flex min-h-[55vh] justify-center items-center">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="">
                            <tr className="text-left text-base text-zinc-600">
                                <th className="p-3">Subject Code</th>
                                <th className="p-3">Subject</th>
                                <th className="p-3">Grade</th>
                                <th className="p-3">Grade Point</th>
                                <th className="p-3">Credit</th>
                                <th className="p-3">Mark</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900 h-16">
                                <td className="p-3">
                                    <p>A01</p>
                                </td>
                                <td className="p-3">
                                    <p>Ways with words Exglish literatire</p>
                                </td>
                                <td className="p-3">
                                    <p>A+</p>
                                </td>
                                <td className="p-3">
                                    <p>9</p>
                                </td>
                                <td className="p-3">
                                    <p>3</p>
                                </td>
                                <td className="p-3">
                                    <p>34</p>
                                </td>
                                <td className="p-3">
                                    <p className='font-bold text-green-700'>Passed</p>
                                </td>
                            </tr>

                            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900 h-16">
                                <td className="p-3">
                                    <p>A01</p>
                                </td>
                                <td className="p-3">
                                    <p>Ways with words</p>
                                </td>
                                <td className="p-3">
                                    <p>A+</p>
                                </td>
                                <td className="p-3">
                                    <p>9</p>
                                </td>
                                <td className="p-3">
                                    <p>3</p>
                                </td>
                                <td className="p-3">
                                    <p>34</p>
                                </td>
                                <td className="p-3">
                                    <p className='font-bold text-red-700'>Failed</p>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900 h-16">
                                <td className="p-3">
                                    <p>A01</p>
                                </td>
                                <td className="p-3">
                                    <p>Ways with words</p>
                                </td>
                                <td className="p-3">
                                    <p>A+</p>
                                </td>
                                <td className="p-3">
                                    <p>9</p>
                                </td>
                                <td className="p-3">
                                    <p>3</p>
                                </td>
                                <td className="p-3">
                                    <p>34</p>
                                </td>
                                <td className="p-3">
                                    <p>Passed</p>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900 h-16">
                                <td className="p-3">
                                    <p>A01</p>
                                </td>
                                <td className="p-3">
                                    <p>Ways with words</p>
                                </td>
                                <td className="p-3">
                                    <p>A+</p>
                                </td>
                                <td className="p-3">
                                    <p>9</p>
                                </td>
                                <td className="p-3">
                                    <p>3</p>
                                </td>
                                <td className="p-3">
                                    <p>34</p>
                                </td>
                                <td className="p-3">
                                    <p>Passed</p>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900 h-16">
                                <td className="p-3">
                                    <p>A01</p>
                                </td>
                                <td className="p-3">
                                    <p>Ways with words</p>
                                </td>
                                <td className="p-3">
                                    <p>A+</p>
                                </td>
                                <td className="p-3">
                                    <p>9</p>
                                </td>
                                <td className="p-3">
                                    <p>3</p>
                                </td>
                                <td className="p-3">
                                    <p>34</p>
                                </td>
                                <td className="p-3">
                                    <p>Passed</p>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900 h-16">
                                <td className="p-3">
                                    <p>A01</p>
                                </td>
                                <td className="p-3">
                                    <p>Ways with words</p>
                                </td>
                                <td className="p-3">
                                    <p>A+</p>
                                </td>
                                <td className="p-3">
                                    <p>9</p>
                                </td>
                                <td className="p-3">
                                    <p>3</p>
                                </td>
                                <td className="p-3">
                                    <p>34</p>
                                </td>
                                <td className="p-3">
                                    <p>Passed</p>
                                </td>
                            </tr>
                            


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ResultPage