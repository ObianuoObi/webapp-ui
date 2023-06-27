"use client";

import { useState} from "react";

export default function Home() {

  const [streamedData, setStreamedData] = useState("");

  const handleChatSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData.get("prompt"));
  };

  const handleClearChat = () => {
    setStreamedData("");

  };


  return (
    <main className="flex max-w-6xl mx-auto items-center justify-center p-24">
     
     <div className="flex flex-col gap-12">
     <h1 className="text-gray-200 font-extrabold text-6xl text-center">LangChain Demo JS 🕸
     </h1>

     <form onSubmit={handleChatSubmit}>
         <input className="py-2 px-4 rounded-md bg-gray-600 text-white w-full"
                placeholder="Enter prompt"
                name="prompt" 
                required
         ></input>  

         <div className="flex justify-center gap-4 py-4">
         <button type="submit" 
                 className="py-2 p-4 rounded-md text-sm bg-lime-700 text-white hover:opacity-80 transition-opacity">
                  Send Chat
                  </button>  

                  <button type="button" 
                  onClick={handleClearChat}
                 className="py-2 p-4 rounded-md text-sm bg-red-700 text-white hover:opacity-80 transition-opacity">
                  Clear Chat
                  </button>  
         </div> 
     </form>

     {streamedData && (
      <div>
        <h3 className="text-2xl text-gray-100"> AI Assistant</h3>
        <p className="text-gray-200 rounded-md bg-gray-700 p-4">{streamedData}</p>
      </div>
     )}
     </div>
     

    </main>
  )
}
