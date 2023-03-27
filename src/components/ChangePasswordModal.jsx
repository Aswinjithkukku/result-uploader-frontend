import axios from "../axios";
import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useHandleClickOutside } from "../hooks";
import BtnLoader from "./BtnLoader";

function ChangePasswordModal({ setIsCreateModalView }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const wrapperRef = useRef();
    useHandleClickOutside(wrapperRef, () => setIsCreateModalView(false));

    const { token } = useSelector((state) => state.users);

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            let formdata = new FormData();
            formdata.append('password', password);
            formdata.append('passwordConfirm', passwordConfirm);
            await axios.post(
                "/change/password/",
                formdata,
                {
                    headers: {
                        authorization: `Token ${token}`,
                    },
                }
            );
            setIsLoading(false);
            Swal.fire("Good job!", "Password Changed Successfully!", "success");
        } catch (err) {
            setError(err?.response?.data[0]);
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 w-full h-full bg-gray-100/50 flex items-center justify-center z-20 px-5">
            <div
                ref={wrapperRef}
                className="bg-[#fff] w-full rounded-md max-h-[90vh] max-w-[500px]  shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto"
            >
                <div className="flex items-center justify-between border-b p-4 bg-blue-300 text-white">
                    <h2 className="font-medium mb-2">Change Password</h2>
                    <button
                        className="h-auto bg-transparent text-textColor text-xl"
                        onClick={() => setIsCreateModalView(false)}
                    >
                        <MdClose />
                    </button>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="mx-10 my-5 space-y-2">
                        <div className="">
                            <label htmlFor="" className="text-[14px]">
                                Password *
                            </label>
                            <input
                                className="border w-full rounded outline-none focus:border-green-400 p-2"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-[14px]">
                                Confirm Password *
                            </label>
                            <input
                                className="border w-full rounded outline-none focus:border-green-400 p-2"
                                type="password"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                        </div>
                        
                        {error && (
                            <p className="pt-2 text-[12px] text-red-500">{error}</p>
                        )}
                        <div className="flex justify-center pt-5">
                            <button
                                type="submit"
                                className="px-5 py-2 rounded bg-blue-300 text-white uppercase text-[12px] font-[600]"
                            >
                                {isLoading ? <BtnLoader /> : "Change Password"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePasswordModal