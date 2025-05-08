import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [img, setImg] = useState("http://10.100.84.160:5000/video_feed");

  const click = () => {
    console.log("Extrayendo datos insanos de la base de datos...");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImg(`http://10.100.84.160:5000/video_feed?time=${new Date().getTime()}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <nav className="bg-[#778da9]">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-white">
            Detección automática de residuos
          </h1>
          <div className="flex gap-4">
            <button
              className="flex gap-2 items-center bg-[#f0f0f0] text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#62b6cb] hover:text-white transition duration-400 ease-in-out"
              onClick={click}
            >
              <p>Generar reporte</p>
              <i>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className="flex justify-center items-center"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <img src={img} alt="Video feed" className="w-mvh" />
      </div>
    </>
  );
}

export default App;
