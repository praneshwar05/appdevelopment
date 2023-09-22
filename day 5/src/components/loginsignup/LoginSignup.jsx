import "./styles/ls.css";
import Login from "./login";
import Signup from "./signup";
import { useEffect, useRef } from "react";

export default function LoginSignup({setRoute}) {
  // child element references
  const loginref = useRef();
  const signupref = useRef();
  // this element reference
  const runner = useRef();
  const wrapper = useRef();

  // subscribe to events for child
  useEffect(() => {
    loginref.current.addEventListener("click", () => {
      runner.current.classList.add("ls-l-s-runner-run");
      wrapper.current.classList.add("ls-wrapper-moved");
    });
    signupref.current.addEventListener("click", () => {
      runner.current.classList.remove("ls-l-s-runner-run");
      wrapper.current.classList.remove("ls-wrapper-moved");
    });
  }, []);

  return (
    <>
      <div ref={wrapper} className="ls-wrapper">
        <div ref={runner} className="ls-l-s-runner">
          <Login ref={loginref} setRoute={setRoute} />
          <Signup ref={signupref} />
        </div>
      </div>
    </>
  );
}
