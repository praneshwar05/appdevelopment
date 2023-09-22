import { useEffect } from "react";
import "./style/headerpart1.css";

export default function HeaderPart1() {
  useEffect(() => {
    const AllLinks = document.querySelectorAll(".custom-link");
    AllLinks.forEach((elem) => {
      elem.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);

  return (
    <>
      <div className="hd-p1-wrapper">
        <div className="hd-p1-div1">
          <div className="hd-p1-content">
          
            
          </div>
          <div className="hd-p1-content">
            
          </div>
        </div>
        <div className="hd-p2-div2">
          {/* more item yet to put */}
          <div className="hd-p2-content">
            <a href="/" className="custom-link">
              <span>About Us  |  Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
