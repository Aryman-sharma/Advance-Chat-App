import React from "react";
import Victory from "../../../src/assets/victory.svg";
import Background from "../../assets/login2.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Auth() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw]  md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 ">
        <div className=" flex flex-col gap-10 items-center justify-center">
          <div className=" flex items-center justify-center flex-col">
            <div className=" flex items-center justify-center ">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} className="h-[100px]"></img>
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app!
            </p>
          </div>
          <div className="flex items-center w-full justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="login"  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2    rounded-none w-full data-[state=active]:text-black  data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                <TabsTrigger value="signup"  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2    rounded-none w-full data-[state=active]:text-black  data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Signup</TabsTrigger>
              </TabsList>
              <TabsContent className="" value="login"></TabsContent>
              <TabsContent className="" value="signup"></TabsContent>
            </Tabs>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Auth;




// import React from "react";
// import Victory from "../../../src/assets/victory.svg";
// import Background from "../../assets/login2.png";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// function Auth() {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
//       <div className="bg-white border-2 border-white text-opacity-90 shadow-2xl w-[90vw] max-w-4xl rounded-3xl grid xl:grid-cols-2 overflow-hidden">
//         <div className="flex flex-col items-center justify-center h-full p-8">
//           <div className="text-center">
//             <div className="flex items-center justify-center">
//               <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
//               <img src={Victory} className="h-[100px]" alt="Victory sign" />
//             </div>
//             <p className="font-medium mt-4">
//               Fill in the details to get started with the best chat app!
//             </p>
//           </div>
//           <div className="w-full max-w-[400px] mt-10">
//             <Tabs defaultValue="login" className="w-full">
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger
//                   value="login"
//                   className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
//                 >
//                   Login
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="signup"
//                   className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
//                 >
//                   Signup
//                 </TabsTrigger>
//               </TabsList>
//               <TabsContent value="login">
//                 {/* Add login form content here */}
//               </TabsContent>
//               <TabsContent value="signup">
//                 {/* Add signup form content here */}
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//         {/* <div className="hidden xl:block bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}></div> */}
//       </div>
//     </div>
//   );
// }

// export default Auth;