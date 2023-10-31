import VendorLoginForm from "./Form"



function VendorLoginPage() {

    return (
        <div className="bg-gradient-to-r from-custom-orange-vsignup to-custom-yellow-vsignup min-h-screen">

            <div className="flex justify-center">
                <img
                    src="../../../../public/images/rentawheel-removebg-preview.png"
                    alt="logo1"
                    className="flex justify-center mt-20 md:h-30 w-56 lg:h-20 lg:w-96 "
                />
            </div>
            <div className="flex  flex-col md:flex-row md:flex md:justify-center mb-20 md:ml-36 sm:flex sm:justify-center sm:mr-56 xl:ml-56">
                {/* <div className="w-full md:w-1/2 ml-4 md:ml-56 hidden md:hidden lg:hidden xl:block">
                    <h1 className=" font-bold md:text-5xl lg:leading-normal lg:mt-28 lg:pt-10 md:mt-60 font-noto-sans-jp">
                        Ready to continue <br /> your car rental <br /> experience? Log in <br /> now to access your <br /> bookings and more.
                    </h1>
                </div> */}

                <div className="flex md:justify-center md:ml-40 md:mt-0 lg:ml-0">
                    <VendorLoginForm />
                </div>
            </div>
            <div className="flex justify-center">
                <h1>© 2023 Dreams Rent. All Rights Reserved.</h1>
            </div>
        </div>

    )
}

export default VendorLoginPage;