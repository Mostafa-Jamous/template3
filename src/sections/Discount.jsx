import React from "react";
import discount from "../imgs/discount.png";

function Discount() {
  return (
    <div className="flex min-h-[100vh] flex-wrap reqDis" id="requestADiscount">
      <div className="image">
        <div className="text-center px-[20px]">
          <h2 className="font-bold text-3xl my-5">We Have A Discount</h2>
          <p className="leading-7 text-xl max-w-[500px] mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            odio cupiditate fugiat natus molestiae explicabo rem molestias omnis
            eveniet perferendis rerum ipsum voluptatibus debitis saepe illum
            quis, dolores repellendus numquam.
          </p>
          <img
            className="max-w-[100%] w-[300px] mx-auto"
            src={discount}
            alt=""
          />
        </div>
      </div>
      <div className="formSection">
        <div className="text-center px-[20px]">
          <h2 className="font-bold text-3xl my-5">Request A Discount</h2>
          <input
            className="outline-none p-[15px] w-full mb-[25px] border-b border-solid border-[#ccc] bg-[#f9f9f9] w-80 block"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="outline-none p-[15px] w-full mb-[25px] border-b border-solid border-[#ccc] bg-[#f9f9f9] w-80 block "
            type="email"
            placeholder="Your Email"
          />
          <input
            className="outline-none p-[15px] w-full mb-[25px] border-b border-solid border-[#ccc] bg-[#f9f9f9] w-80 block"
            type="number"
            placeholder="Your Phone"
          />
          <textarea
            className="outline-none p-[15px] w-full mb-[25px] border-b border-solid border-[#ccc] bg-[#f9f9f9] w-80 block resize-none h-[200px]"
            placeholder="Tell Us About Your Needs"
          ></textarea>
          <button className="w-80 h-14 py-2 px-5 mb-3 text-white bg-mainColor font-bold text-xl hover:bg-altColor">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discount;
