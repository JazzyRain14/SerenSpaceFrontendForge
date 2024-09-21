import React from "react";
import Frame16 from "../assets/Images/Frame 16.png";
import imagea from "../assets/Images/Hero Section.png";

const Section3 = () => {
  return (
    <div
      className="bg-secondary py-16 px-4 bg-cover bg-center opacity-90"
      style={{ backgroundImage: `url(${imagea})` }}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-brown-black font-LibreBold text-3xl mb-6">
          How it SerenSpace Works
        </h2>
        <p className="text-xl font-RedHat mb-2.5 font-small leading-8">
          Simple 3 steps to make an easy online booking with a specialist
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 border-l-2 border-black"></div>

            <div className="mb-10 relative">
              <h3 className="text-brown-black font-LibreBold text-xl mb-2 relative z-10">
                01
              </h3>
              <h4 className="text-black font-LibreBold text-lg mb-2">
                Create Your Profile & Take an Assessment
              </h4>
              <p className="text-black font-LibreRegular">
                Sign up to create a personalized profile and complete a wellness
                assessment to help us understand your mental health status and
                goals.
              </p>
            </div>

            <div className="mb-10 relative">
              <h3 className="text-black font-LibreBold text-xl mb-2 relative z-10">
                02
              </h3>
              <h4 className="text-black font-LibreBold text-lg mb-2">
                Get Matched & Schedule Sessions
              </h4>
              <p className="text-black font-LibreRegular">
                Get matched with a licensed therapist based on your assessment
                and book therapy sessions at convenient times, either virtually
                or in-person.
              </p>
            </div>

            <div className="mb-10 relative">
              <h3 className="text-black font-LibreBold text-xl mb-2 relative z-10">
                03
              </h3>
              <h4 className="text-black font-LibreBold text-lg mb-2">
                Access Resources, Track Progress & Get 24/7 Support
              </h4>
              <p className="text-black font-LibreRegular">
                Explore resources like articles, videos, and interactive tools,
                join online support groups, and track your mental health journey
                with our tools. Reach out to our helpline or chat service
                anytime for immediate support.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={Frame16}
              alt="People in therapy session"
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
