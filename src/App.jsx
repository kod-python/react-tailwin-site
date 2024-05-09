import React from "react";
import "./App.css"


export default function App() {


  const LinkButton = ({ url, label }) => {
    const handleClick = () => {
      window.location.href = url;
    };
  
    return <button onClick={handleClick}>{label}</button>;
  };
  
  function App() {
    return (
      <div className="hidden  space-x-6 md:flex">
        <LinkButton url="" label="Click" />
        
      </div>
    );
  }




  return (
  <div className="app">

  <nav className="relative container mx-auto p-6 ">

<div className="flex items center justify-between">


{/* logo */}
<div className="flex pt-2">
    <img src="" alt="box" />
    <img src="" alt="triangle" />
    <h2>Your Logo</h2>
   </div>

{/* menu items */}
<div className="hidden  space-x-6 md:flex">
    <a href="#" class="hover:text-slate-600">Home</a>
    <a href="#" class="hover:text-slate-600">About</a>
    <a href="#" class="hover:text-slate-600">Contact</a>
    <a href=""><LinkButton url="" label="Blog" className="" /></a>

  

</div>

</div>



   .

  </nav>

  </div>
  
  )
}