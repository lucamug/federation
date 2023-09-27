import React, { Suspense, useEffect, useRef } from "react";
const RemoteApp2 = React.lazy(() => import("app2/App"));

const App = () => {
  const targetElement = useRef(null);
  useEffect(async () => {
    await import("app3/elm");
    Elm.Main.init({
      node: targetElement.current,
    });
  }, []);
  return (
    <div>
      <div style={{ margin: "10px", padding: "10px", textAlign: "center", backgroundColor: "greenyellow"}}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp2 />
      </Suspense>
      <div style={{margin: "10px", padding: "10px"}}>
        <h1>App3 (Elm)</h1>
        <div ref={targetElement}></div>
      </div>
    </div>
  );
};

export default App;
