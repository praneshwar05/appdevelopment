import "./style/headersearchbox.css";
import { useEffect } from "react";

export default function HeaderSearchBox() {
  useEffect(() => {
    const AllLinks = document.querySelectorAll(".custom-link");
    AllLinks.forEach((elem) => {
      elem.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);
  return (
    <>
      <div>
        <h2>ADVENTURE PLAN</h2>
      </div>
      <div className="headersearchbox-wrapper">
        <div className="headersearchbox-input-wrapper">
          <input
            placeholder="Search for places"
            type="text"
            className="headersearchbox-input"
          />
        </div>
        <a href="/" className="custom-link">
          <span
            style={{ "--iconsize": "30px" }}
            class="material-symbols-outlined material-symbols-outlined-size-customized"
          >
            search
          </span>
        </a>
      </div>
    </>
  );
}
