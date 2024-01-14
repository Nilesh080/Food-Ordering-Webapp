import { useEffect } from "react";

const Contact = () =>{

    // // setInterval(()=>{
    // //     console.log("hello world");
    // // },1000);
    // useEffect(()=>{
    //     const intervalId = setInterval(()=>{
    //         console.log("Helllo world!!");
    //     },1000);

    //     return () => {
    //         clearInterval(intervalId);
    //         console.log("returned from contact page");
    //     };
    // },[])

    return(
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto mt-10">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>

            <div class="mb-4">
                <p class="text-gray-600">Email:</p>
                <p
                    class="block text-blue-600 hover:underline transition duration-300 ease-in-out">nileshmishra080@gmail.com</p>
            </div>

            <div>
                <p class="text-gray-600">Phone:</p>
                <p class="text-gray-800">9004742917</p>
            </div>
        </div>

    )
};

export default Contact;