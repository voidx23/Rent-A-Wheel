import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { userInstance } from '../../../utils/axios';



function AvailabilityCheckingComponent() {
    const [selectedOption, setSelectedOption] = useState("")
    const [pickupDate, setpickupDate] = useState(null);
    const [returnDate, setreturnDate] = useState(null);
    const navigate = useNavigate();

    const calculateNextDay = () => {
        if (pickupDate instanceof Date && !isNaN(pickupDate)) {
            const nextDay = new Date(pickupDate);
            nextDay.setDate(nextDay.getDate() + 1);
            return nextDay;
        }
    }

    const nextDay = calculateNextDay();



    const handlePickupDateChange = (date) => {
        setpickupDate(date);
    }

    const handleReturnChange = (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);

        setreturnDate(date);
    }
    const handleOptionChange = (event) => {

        setSelectedOption(event.target.value); // Update city state with the input value
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(selectedOption, "this is city");
        //    const data = JSON.stringify(city)
        try {

            const response = await userInstance.get(`/fetchVehicle?city=${selectedOption}`)

            if (response.status === 201) {
                const data = response.data;

                navigate("/autoListing", { state: { data } });


            } else {
                console.error('response error');
            }

        } catch (error) {

            console.error('An error occurred:', error.message);

        }

    }

    return (
        <div>


            <div>
                <div className="w-[933px] h-[205px]">
                    <div className=" w-[945px] h-[205px] flex items-center justify-center top-0 left-0">
                        <div className=" flex justify-between w-[600px] h-[205px] bg-white rounded-[30px] shadow-[6px_6px_10px_5px_#0000002b]">
                            <div className="dropdown mt-[50px]">

                                <div className=" h-[39px] mb-[20px]  ml-[40px] [font-family:'Lalezar-Regular',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">
                                    City
                                </div>
                                <select className='h-12 w-96  ml-[30px] border rounded-md' id="availability" value={selectedOption} onChange={handleOptionChange}>
                                    <option value="">Select an option</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Cochin">Cochin</option>
                                    <option value="Calicut">Calicut</option>
                                  

                                </select>
                            </div>
                            {/* <div className="absolute w-[188px] h-[60px] top-[88px] left-[293px] rounded-[10px] ">
                            <DatePicker
                                value={pickupDate}
                                onChange={handlePickupDateChange}
                                minDate={new Date()}
                            />
                         </div>
                         <div className="absolute w-[188px] h-[60px] top-[89px] left-[535px] rounded-[10px]">
                            <DatePicker
                                value={returnDate}
                                onChange={handleReturnChange}
                                minDate={nextDay} />
                         </div> */}
                            <div className=" w-[218px] h-[60px] top-[89px] left-[777px] rounded-[10px]">
                                <div className=" mt-[100px] " />
                                <button onClick={handleSubmit} className="w-[118px] ml-10  h-[60px] bg-[#00ff66] rounded-[10px] border-[0.5px] border-solid border-[#989898] top-[19px] left-[33px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[normal]">
                                    Check
                                </button>
                            </div>

                            {/* <div className="absolute h-[39px] top-[30px] left-[293px] [font-family:'Lalezar-Regular',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">
                            Pickup Date
                          </div>
                          <div className="absolute h-[39px] top-[30px] left-[535px] [font-family:'Lalezar-Regular',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">
                            Return Date
                          </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default AvailabilityCheckingComponent