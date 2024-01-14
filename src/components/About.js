import React from "react";
// import { User } from "./User";
import Userclass from "./Userclass";
// const About = () =>{
//     return (
//         <div className="shimmer-container">
//             <h1>About page</h1>
//             {/* <User name = {"Nilesh (functional)"} address = {"Mumbai"}/> */}
//             <Userclass name = {"First Child"} address = {"Mumbai"}/>
//             <Userclass name = {"Second Child"} address = {"Mumbai"}/>
//             <Userclass name = {"Third Child"} address = {"Mumbai"}/>
//         </div>
//     )
// }

// export default About;
class About extends React.Component {

    constructor(props){
        super(props);
        // console.log("Parent cnstructor");
    }

        
    componentDidMount(){
        // console.log("parent componentDidMount");
    }

    render(){
        // console.log("parent render");
        return(
            <div class="bg-gray-200 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">About Me</h2>
    
                <div class="mb-4">
                    <a href="https://github.com/Nilesh080" target="_blank"
                        class="block text-blue-600 hover:underline transition duration-300 ease-in-out">LinkedIn</a>
                </div>
    
                <div class="mb-4">
                    <a href="https://github.com/Nilesh080" target="_blank"
                        class="block text-gray-800 hover:underline transition duration-300 ease-in-out">GitHub</a>
                </div>
    
                <div class="mb-4">
                    <a href="https://github.com/Nilesh080" target="_blank"
                        class="block text-orange-600 hover:underline transition duration-300 ease-in-out">LeetCode</a>
                </div>
    
                <div class="mb-4">
                    <a href="https://github.com/Nilesh080" target="_blank"
                        class="block text-purple-600 hover:underline transition duration-300 ease-in-out">Codeforces</a>
                </div>
    
                <div>
                    <a href="https://github.com/Nilesh080" target="_blank"
                        class="block text-red-600 hover:underline transition duration-300 ease-in-out">Codechef</a>
                </div>
            </div>
        )
    }
};

export default About;



