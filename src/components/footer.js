import React from "react"
import UniversityLogo from "../images/800-white.png"
export default function CustomFooter(props) {
  const scrollTop = e => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="text-muted bg-dark p-3">
      <div className="container h-100">
        <div className={"row h-100"}>
          <div className={"col-4 align-self-center h-100"}>
            <img
              className={"img-fluid mx-auto"}
              src={UniversityLogo}
              width="100%"
              hidth="100%"
              alt={"University of Padova Logo"}
            />
          </div>
          <div className={"col-4 align-self-center"}>
            <span className={"text-white text-center"}>
              Last update: 09/09/2021
            </span>
          </div>
          <div className={"col-4 align-self-center"}>
            <button
              className={"btn btn-success float-right"}
              style={{ fontSize: "0.8em" }}
              onClick={e => scrollTop()}
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
