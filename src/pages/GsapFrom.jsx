import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from('#green-box',{   //import gsap from gsap, first paramter is target component 
      x : 250,              //second parameter is the object how you want to animate
      repeat : -1,           //repeat : -1 will make the animation run continuously
      yoyo : true,            // yoyo : true will make the animation reverse in every other
      rotation : 360,
      duration: 2,
      ease : 'power1.inOut'
    })
  }, []);

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
