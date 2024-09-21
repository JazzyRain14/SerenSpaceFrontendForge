import React from "react";
import Frame16 from "../assets/Images/Frame 16.png";

const Section3 = () => {
  return (
    <div className="bg-hero-pattern py-16 px-[78px] bg-cover bg-center opacity-90">
      <div className="">
        <h2 className="text-brown-black font-LibreBold text-3xl mb-6">
          How it SerenSpace Works
        </h2>
        <p className="text-xl max-w-[450px] text-center font-RedHat mb-2.5 font-small leading-8">
          Simple 3 steps to make an easy online booking with a specialist
        </p>
      </div>

      <div className="flex gap-[5rem] justify-between items-center">
        <div className="border-l-2 border-primary flex flex-col justify-center items-center gap-4 py-2 max-w-[400px] w-full">
          <div className="flex flex-col">
            <div className="border-l-4 border-primary pl-2">
              <h3 className="text-brown-black font-RedHat font-semibold text-xl">
                01
              </h3>
              <h4 className="text-brown-black text-center float-left font-bold font-RedHat text-lg mb-2">
                Create Your Profile & Take an <br /> Assessment
              </h4>
            </div>
            <p className="text-brown-black font-RedHat text-sm  pl-2">
              Sign up to create a personalized profile and complete a wellness
              assessment to help us understand your mental health status and
              goals.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="pl-2">
              <h3 className="text-brown-black font-RedHat font-semibold text-xl">
                02
              </h3>
              <h4 className="text-brown-black text-center float-left font-bold font-RedHat text-lg mb-2">
                Get Matched & Schedule <br /> Sessions
              </h4>
            </div>
            <p className="text-brown-black font-RedHat text-sm  pl-2">
              Get matched with a licensed therapist based on your assessment and
              book therapy sessions at convenient times, either virtually or
              in-person.
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" pl-2">
              <h3 className="text-brown-black font-RedHat font-semibold text-xl">
                03
              </h3>
              <h4 className="text-brown-black text-center float-left font-bold font-RedHat text-lg mb-2">
                Access Resources, Track <br /> Progress & Get 24/7 Support
              </h4>
            </div>
            <p className="text-brown-black font-RedHat text-sm  pl-2">
              Explore resources like articles, videos, and interactive tools,
              join online support groups, and track your mental health journey
              with our tools. Reach out to our helpline or chat service anytime
              for immediate support.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-1 w-[550px]">
          <img
            src={Frame16}
            alt="People in therapy session"
            className="w-auto h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
