import SignupForm from "./Form"



function ForgotPasswordPage() {

    return (
        <div className="bg-gradient-to-r from-cyan-400 to-lime-400 min-h-screen">

            <div className="flex justify-center">
                <img
                    src="../../../../public/images/rentawheel-removebg-preview.png"
                    alt="logo1"
                    className="flex justify-center mt-20 md:h-30 w-56 lg:h-20 lg:w-96 "
                />
            </div>
            <div className="flex md:flex-row md:flex md:justify-center mb-20  sm:flex sm:justify-center  ">
                {/* <div className="w-full md:w-1/2 ml-4 md:ml-56 hidden md:hidden lg:block">
                    <h1 className=" font-bold md:text-5xl lg:leading-normal lg:mt-28 lg:pt-10 md:mt-60 font-noto-sans-jp">
                        Creating an account <br /> with us is the first <br />step towards <br />unforgettable road <br /> trips. Let's get <br /> started!.
                    </h1>
                </div> */}
                <div className="flex md:justify-center ">
                    <SignupForm />
                </div>
            </div>
            <div className="flex justify-center">
                <h1>© 2023 Dreams Rent. All Rights Reserved.</h1>
            </div>
        </div>

    )
}

export default ForgotPasswordPage