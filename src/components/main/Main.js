import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import "./Main.css";
 
function Main() {
  return (
<div>
    <div className="nav-bar"><Navigation /></div>
    <div className="main">
      <div className="sb-links"> <Sidebar /> </div>
      <div className="center">Willkommen zur Online-Umfrage!</div>
      <div className="sb-rechts"> <Sidebar /> </div>
    </div>
<Footer />
</div>
  );
}
 
export default Main;