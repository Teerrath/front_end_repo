import { Link } from "react-router-dom";
import { googleSignin } from "../../Api/api";
import { useAuth } from "../../hooks/useAuth";
import Flower from "./images/flower.svg";
// import formpng from "./images/formbg.png";
// import "./Login.css";

export default function Register() {
  const { login } = useAuth();

  const googleHandler = () => {
    googleSignin()
      .then((data) => {
        console.log(data, "data");
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <div>
      <div className="login-wrapper min-h-[100svh] bg-no-repeat bg-center">
        <div className="login-container bg-no-repeat bg-contain bg-center  ">
          {/* <img src={formpng} className="absolute inset-0 "  /> */}
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md w-full flex flex-col items-center relative">
              <h2 className="text-[var(--bg-color1)] font-medium text-[40px] mb-1 join-text ">
                Join In
              </h2>
              <h1 className="font-black text-[var(--bg-color1)] text-[74px] mb-2  text-shadow heading-text">
                <Link to={'/home'}>TEERRATH</Link>
              </h1>
              <p className=" mb-4 text-[var(--bg-color1)] font-normal text-[26px] sub-heading-text">
                Come home to Divine
              </p>
              {/* Lotus SVG */}
              <div className="mb-4 w-[130px] login-flower-container">
                <img src={Flower} alt="flower" />
              </div>
              <h3 className="  mb-2 font-bold text-[34px] text-[var(--bg-color1)] welcome-text">
                Welcome Home
              </h3>
              <form className="w-full flex flex-col items-center login-form">
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  className="w-full mb-3 px-3 py-2 border-[2px] border-[var(--bg-color1)] bg-white rounded-[28px] h-[55px]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-6 px-3 py-2 border-[2px] border-[var(--bg-color1)] bg-white rounded-[28px] h-[55px]"
                />
                <button
                  onClick={login}
                  type="submit"
                  className="bg-green shadow-green text-white  font-bold text-1xl text-center  px-20 py-3 rounded-full cursor-pointer"
                >
                  Register
                </button>
              </form>
              <button
                onClick={googleHandler}
                className="rounded-full flex mt-4 items-center gap-2 cursor-pointer px-5 py-2 border border-gray-400 "
              >
                <img className="w-[20px]" src="/google.png" />{" "}
                <p>Sign up with google</p>
              </button>
              <div className="flex items-center mt-1 text-[12px]">
                <p>Already have an account?</p>&nbsp;
                <Link className="underline" to={"/login"}>
                  Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
