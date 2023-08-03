"use client"

import { useState, useEffect } from 'react';
import React from 'react'

function Form() {
    const [title, setTitle] = useState('');
    const [prediction, setPrediction] = useState('');
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [alertColor, setAlertColor] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (prediction === "Clickbait") {
            setAlertMessage("Clickbait Detected!!");
            setAlertType('Warning:');
            setAlertColor('text-yellow-600 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300');
        } else if (prediction === "Non-Clickbait") {
            setAlertMessage("Non-Clickbait");
            setAlertType("Note:");
            setAlertColor('text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-400');
        }
    }, [prediction]);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            const data = await response.json();
            setIsLoading(false);
            setPrediction(data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form
                className="font-secondary flex flex-shrink w-full px-2 mx-auto justify-center transition duration-500 ease-in-out transform"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={title}
                    id="simple-search"
                    className="rounded-l-lg w-1/3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block pl-10 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-800 dark:focus:border-indigo-900 px-5 py-4 text-base placeholder-gray-300 transition duration-500 ease-in-out transform"
                    placeholder="Enter news headline"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="inline-flex text-center  items-center p-2.5 ml-2 text-base font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-800 px-3 py-3"
                    disabled={isLoading} // Menonaktifkan tombol saat proses loading berlangsung
                >
                    {isLoading ? ( // Tampilkan animasi loading jika isLoading true
                        <>
                            <svg aria-hidden="true" className="w-7 h-7 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            Checking...
                        </>
                    ) : (
                        'Check'
                    )}
                </button>
            </form>
            {
                alertMessage && (
                    <section className="">
                        <div className="relative items-center w-full px-5 pt-3 mx-auto md:px-12 lg:px-24 max-w-xl ">
                            <div className={`${alertColor} flex items-center justify-between px-6 py-2 rounded-lg shadow-xl`}>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                    </svg>
                                    <p className="text-sm font-semibold tracking-wide uppercase">
                                        <strong>{alertType}</strong> {alertMessage}</p>
                                </div>
                                <button className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Form