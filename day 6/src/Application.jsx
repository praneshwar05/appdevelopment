import LoginSignup from "./components/loginsignup/LoginSignup";
import { lazy, Suspense, useState } from "react";

export default function Application() {
  const [route, setRoute] = useState(window.location.pathname);
  return (
    <>
      {(() => {
        if (route === "/") {
          return <LoginSignup setRoute={setRoute} />;
        } else if (route === "/home") {
          const Page = lazy(() => import("./components/header/HeaderWrapper"));
          return (
            <>
              <Suspense>
                <Page />
              </Suspense>
            </>
          );
        }
      })()}
    </>
  );
}
