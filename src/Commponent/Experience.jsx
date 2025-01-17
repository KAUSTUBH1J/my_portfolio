import React, { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const lineRef = useRef(null); // Reference to the animated line
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    
    


    <>
        <div className="position-relative p-4 py-md-5 px-md-0">
      <div className="border-start border-opacity-20 border-gray position-absolute h-100 start-50"></div>

      {/* Solar Ladder Experience */}
      <div className="mb-4 mb-md-5 d-flex justify-content-between align-items-center flex-row-reverse flex-md-row">
        <div className="order-1 w-100 w-md-50"></div>
        <span className="z-index-1 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-25 border border-white shadow p-2 p-md-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-primary"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
        </span>
        <div className="order-1 bg-white rounded shadow-sm p-3 p-md-4 w-100 w-md-50 m-3">
          <h3 className="mb-2 fs-5">Solar Ladder</h3>
          <p className="text-muted mb-2">
            Full Stack Developer | Jul 2023 – Present
          </p>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">
              Integrated Facebook leads leveraging webhook and OAuth, elevating
              lead management capabilities to new heights.
            </li>
            <li className="mb-2">
              Led the Node.js version migration initiative, implementing
              features and bug fixes that bolstered system stability, while
              achieving a noteworthy 20% reduction in bugs.
            </li>
            <li className="mb-2">
              Crafted codemod scripts for seamless migrations and bug
              resolutions, ensuring scalable development processes.
            </li>
            <li className="mb-2">
              Engineered a custom leads integration widget feature utilizing
              serverless Firebase Cloud Functions, resulting in a 30% increase
              in lead acquisition.
            </li>
            <li>
              Skills: React.js · Redux · MaterialUI · TailwindCSS · JavaScript ·
              Ant Design · Node.js · Express.js · MongoDB · Firebase · React
              Native
            </li>
          </ul>
        </div>
      </div>

      {/* Panchavaktra Advisory LLP Experience */}
      <div className="mb-4 mb-md-5 d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="order-1 w-100 w-md-50"></div>
        <span className="z-index-1 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-25 border border-white shadow p-2 p-md-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-primary"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
        </span>
        <div className="order-1 bg-white rounded shadow-sm p-3 p-md-4 w-100 w-md-50">
          <h3 className="mb-2 fs-5">Panchavaktra Advisory LLP</h3>
          <p className="text-muted mb-2">
            Full Stack Web Developer Intern | Dec 2022 - Feb 2023
          </p>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">
              Directed development of B2B platform features using Next.js,
              Node.js, and Postgres, fueling adoption growth.
            </li>
            <li className="mb-2">
              Oversaw UI enhancements and bug fixes, improving user satisfaction
              by 25% and reducing bounce rates by 10%.
            </li>
            <li className="mb-2">
              Orchestrated development of 3+ SEO-optimized websites with HTML,
              TailwindCSS, and JavaScript.
            </li>
            <li className="mb-2">
              Collaborated to integrate Ant Design components for the dashboard,
              enhancing UI consistency by 40%.
            </li>
            <li>
              Skills: React.js · Next.js · TailwindCSS · JavaScript · Ant Design
              · Node.js · Postgres
            </li>
          </ul>
        </div>
      </div>
    </div>

    </>
  );
};

export default ExperienceSection;
