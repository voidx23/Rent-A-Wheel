import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { userInstance } from '../../../utils/axios';
import Navbar from '../../../components/user/navBar/navBar';

function AutoDetailedView() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const carId = searchParams.get('carId');
    const [carData, setCarData] = useState(null);

    console.log(carId, "this is the carId");
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await userInstance.get(`/vehicleDetails?carId=${carId}`);
                console.log(response, "this is the response");

                setCarData(response.data);
                console.log(response.data, "this is the data");

            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchData();

    }, [carId]);



    console.log(carData, "this is the data");
    if (carData === null) {
        return <div>Loading.....</div>;
    }
    return (
        <div className='bg-[#F6F6F6] '>
            <Navbar />
            <div className='bg-[#F6F6F6]'>
                <div className="head bg-gray-800 h-[300px] text-[50px] text-slate-100 font-extrabold flex justify-center items-center">{carData[0].name}</div>
            </div>
            <div className='px-32'>
                <div className=' pt-[50px] bg-[#F6F6F6]'>
                    <div className='car-name  h-10 text-3xl font-extrabold'>
                        <p className=''>{carData[0].name}</p>
                    </div>
                    <div>
                        <div className='mt-[50px]  flex justify-between rounded-lg'>
                            <div className='w-[1000px] bg-white  flex justify-center rounded-lg p-5'>
                                <img className='rounded-lg w-[1000px] h-[550px]' src={carData[0].image} alt="" />
                            </div>
                            <div className='bg-[#ffffff] rounded-lg h-[500px] w-[500px]'>

                            </div>

                        </div>
                        <div className="main flex justify-between">
                            <div className="sub-1">

                                <div className='mt-[50px] bg-[#ffffff] rounded-lg h-[500px] w-[1000px] p-10'>
                                    <div className='heading'>
                                        <h1 className='text-3xl font-extrabold mb-2'>Specification</h1>
                                        <hr className='border-t-2' />
                                    </div>
                                    <div className='mt-10  flex flex-col items-center space-y-4 '>
                                        <div className="row-1 bg-white rounded-lg h-[100px] w-[850px] flex justify-between px-4">
                                            <div className="1.1 bg-white m-2 w-40 flex justify-between rounded-lg ">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/body.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Body</div>
                                                    <div>{carData[0].body}</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-40 flex justify-between rounded-lg">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/make.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Make</div>
                                                    <div>{carData[0].make}</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-48 flex justify-between rounded-lg">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/transmission.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Transmission</div>
                                                    <div>{carData[0].transmission}</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-32 flex justify-between rounded-lg">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/fuel.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Fuel</div>
                                                    <div>{carData[0].fuel}</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row-2 bg-white rounded-lg h-[100px] w-[850px] flex justify-between">
                                            <div className="1.1 bg-white m-2 w-40 flex justify-between rounded-lg ">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/milege.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Milege</div>
                                                    <div>{carData[0].milege} kmpl</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-40 flex justify-between rounded-lg">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/year.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Year</div>
                                                    <div>{carData[0].year}</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-48 flex justify-between rounded-lg">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/VIN.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Registration</div>
                                                    <div>{carData[0].registration}</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-32 flex justify-between rounded-lg">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/Enigine(hp).png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Engine</div>
                                                    <div>{carData[0].engine}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-3 bg-white rounded-lg h-[100px] w-[850px] flex justify-start">
                                            <div className="1.1 bg-white m-2 w-40 flex justify-between rounded-lg ">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/Brake.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Brake</div>
                                                    <div>{carData[0].brake}</div>
                                                </div>
                                            </div>
                                            <div className="1.1 bg-white m-2 w-64 flex justify-between rounded-lg ml-14">
                                                <div><img className='h-[84px] w-[84px] border rounded-lg' src="../../../../public/images/doors.png" alt="" /></div>
                                                <div className=' flex flex-col items-start space-y px-2 pt-3' >
                                                    <div className='font-extrabold'>Seating</div>
                                                    <div>{carData[0].seating}cc</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[50px] bg-[#ffffff] rounded-lg h-[500px] w-[1000px] p-10'>
                                    <div className='heading'>
                                        <h1 className='text-3xl font-extrabold mb-2'>Description</h1>
                                        <hr className='border-t-2' />
                                    </div>
                                </div>
                            </div>
                            <div className="sub-2 mt-[50px] h-[500px]">
                                <h1 className='mb-5 font-extrabold text-xl'>Review</h1>
                                <div className='h-36 w-[500px] bg-white rounded-lg my-5'>

                                </div>
                                <div className='h-36 w-[500px] bg-white rounded-lg my-5'>

                                </div>
                                <div className='h-36 w-[500px] bg-white rounded-lg my-5'>

                                </div>
                                <div className='h-36 w-[500px] bg-white rounded-lg my-5'>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AutoDetailedView