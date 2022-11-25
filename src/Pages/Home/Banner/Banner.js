import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/DDqmbGd/UEEkg-Up-RTe-Wcwp-Ga-Yp-PJES-1200-80.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl  font-bold">i-tech</h1>
          <p className="mb-5">You can buy any used laptop from here....</p>
          <p className="text-left spa">
            The best place to buy used laptops may depend on where you live.
            Ideally, you'll want to inspect before you buy. But if you can't do
            that, look for online retailers that offer buyer protection. Here
            are some of the best laptop we provide for you.
          </p>
          <button className="btn bg-sky-500 border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
