import React, { useState } from "react";
import {
  RiMailFill,
  RiDoorLockFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
const Login = () => {
  const [image, changeImage] = useState(false);
  const [focus, onFocus] = useState(false);
  const [focus2, onFocus2] = useState(false);
  return (
    <section className="w-full overflow-hidden relative">
      <div className="w-full h-[100vh] overflow-hidden relative">
        <div
          className={`bg-hero w-full h-[100vh] bg-cover absolute transition-all duration-500 top-0 ${
            image ? "right-full" : "right-0"
          }`}
        ></div>
        <div
          className={`bg-hero2 w-full h-[100vh] bg-cover absolute transition-all duration-500 top-0 grayscale ${
            image ? "left-0" : "left-full"
          }`}
        ></div>
      </div>

      <div className="bg-gradient-to-r w-full h-[100vh] z-0 from-[rgba(0,0,0,0.99)] to-[rgba(91,91,91,0.10)] absolute top-0"></div>

      <div className="absolute flex flex-col gap-4 top-1/4 right-10 xl:left-[42%] max-[925px]:hidden ">
        <h2 className="text-white text-xl font-body">
          A new way to experience real estate <br /> in the infinite virtual
          space.
        </h2>
        <a href="#" className="text-[10px] underline text-white font-body">
          LEARN MORE
        </a>
      </div>
      <div className="absolute max-md:hidden text-7xl flex bottom-[10%] right-10 sm:right-[5%]">
        <RiArrowLeftSLine
          onClick={() => (image ? changeImage(!image) : "")}
          className={`backdrop-blur-sm cursor-pointer py-3 w-16 border-t-[3px] ${
            image ? "border-white text-white" : "border-gray-400 text-gray-400"
          }`}
        />
        <RiArrowRightSLine
          onClick={() => (image ? "" : changeImage(!image))}
          className={`backdrop-blur-sm cursor-pointer w-16 py-3 border-t-[3px]  ${
            image ? "border-gray-400 text-gray-400" : "border-white text-white"
          }`}
        />
      </div>
      <div className="absolute flex flex-col max-md:backdrop-blur-sm justify-around items-center w-full md:w-[500px] h-[100vh] md:bg-black top-0">
        <div className=" flex gap-2 justify-start items-center w-full p-10">
          <img
            src="house.png"
            alt=""
            className="w-10 bg-gray-200 rounded-full p-1"
          />
          <h1 className="text-white font-bold font-body text-2xl">LogHouse</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-start p-10">
          <h1 className="text-white text-4xl mb-20 font-body font-medium">
            Sign in
          </h1>
          <form
            action="#"
            className="flex justify-center gap-5 w-full items-start flex-col"
          >
            <div className="w-full">
              <label htmlFor="" className="text-white font-body text-lg">
                User Name
              </label>
              <div
                className={`relative w-[90%] mt-2 border-2 border-gray-700 rounded-md ${
                  focus ? "border-white" : "border-gray-700"
                }`}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span
                    className={`sm:text-xl ${
                      focus ? "text-[#426FFC]" : "text-gray-700"
                    }`}
                  >
                    <RiMailFill />
                  </span>
                </div>
                <input
                  type="text"
                  onFocus={() => onFocus(!focus)}
                  onBlur={() => onFocus(!focus)}
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 pl-14 sm:pl-12 text-white bg-black placeholder:text-gray-700 placeholder:text-sm sm:placeholder:text-md placeholder:font-body p-2 sm:p-4 border-gray-300 focus:outline-none"
                  placeholder="Enter User Name"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="" className="text-white text-lg">
                Password
              </label>
              <div
                className={`relative w-[90%] mt-2 border-2 rounded-md ${
                  focus2 ? "border-white" : "border-gray-700"
                }`}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span
                    className={`sm:text-xl ${
                      focus2 ? "text-[#426FFC]" : "text-gray-700"
                    }`}
                  >
                    <RiDoorLockFill />
                  </span>
                </div>
                <input
                  type="password"
                  onFocus={() => onFocus2(!focus2)}
                  onBlur={() => onFocus2(!focus2)}
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 pl-14 sm:pl-12 text-white bg-black placeholder:text-gray-700 placeholder:text-sm sm:placeholder:text-md placeholder:font-body p-2 sm:p-4 border-gray-300 focus:outline-none"
                  placeholder="Enter Password"
                />
              </div>
              <div className="w-full mt-5">
                <a
                  href="#"
                  className="underline text-sm font-body hover:text-white font-semibold text-gray-700"
                >
                  FORGOT PASSWORD?
                </a>
              </div>
            </div>
            <button className="text-white w-[90%] py-4 font-body rounded-md p-8 bg-[#426FFC]">
              SIGN IN
            </button>
          </form>
        </div>
        <div className="w-full p-10">
          <h2 className="text-white font-body">
            Dont have an account?{" "}
            <a href="#" className="font-semibold">
              {" "}
              Sign up
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Login;
