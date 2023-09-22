import { useEffect } from "react";
import HeaderLogoDiv from "./HeaderLogoDiv";
import "./style/headerpart2.css";

export default function HeaderPart2({ name }) {
  useEffect(() => {
    const AllLinks = document.querySelectorAll(".custom-link");
    AllLinks.forEach((elem) => {
      elem.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);
  return (
    <>
      <div className="headerpart2-wrapper">
         <HeaderLogoDiv />
        <div className="hd-p2-div3">
          {/* user */}
          <div className="hd-p2-div3-content">
            <a href="/" className="custom-link">
              <span
                style={{ "--iconsize": "45px" }}
                class="material-symbols-outlined material-symbols-outlined-color material-symbols-outlined-size-customized"
              >
                person
              </span>
              <div className="hd-p2-div3-person-d-div">
                {/* work on name */}
                <span>{name}</span>
                <span >Account</span>
              </div>
            </a>
          </div>
          
          <div
            className="hd-p2-div3-content hd-p2-div3"
          >
            
              <span style={{cursor:"pointer"}} onClick={()=>{
                window.location.pathname="/"
              }}>Logout </span>
          </div>
        </div>
      </div>
    </>
  );
}
