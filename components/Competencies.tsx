"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: string;
};

const skills: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Languages",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" rx="6" fill="#3178C6" />
        <path
          fill="#fff"
          d="M22 63.8h21.4v7H34v37h-8.4V70.8H22v-7zm44.8 0v7.4h-10V108h-8.4V71.2H38v-7.4h28.8zm4.4 37.5c1.3 2.2 3.3 3.8 6.4 3.8 2.8 0 4.5-1.3 4.5-3.3 0-2.3-1.8-3.1-5-4.4l-1.7-.7c-5-2.1-8.2-4.7-8.2-10.2 0-5.1 3.9-9 9.9-9 4.3 0 7.4 1.5 9.6 5.4l-5.3 3.4c-1.2-2.1-2.4-2.9-4.3-2.9-2 0-3.2 1.2-3.2 2.9 0 2 1.2 2.8 4.1 4.1l1.7.7c5.8 2.5 9.1 5 9.1 10.7 0 6.1-4.8 9.5-11.2 9.5-6.3 0-10.3-3-12.3-7l5.9-3z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" fill="#F7DF1E" rx="6" />
        <path d="M116 96.6c-1.5-9.3-7.3-13.6-16-18.5l-5.5-3.2c-3.7-2.2-5.3-4.4-4.8-7.8.5-2.5 2.4-4.4 6.1-4.4 3.6 0 6.1 1.5 8.8 5.3l9.3-6c-4-6.3-9.7-9-17.9-9-9.8 0-16.5 5.7-16.5 14.6 0 7.9 4.6 12.5 13.5 17.3l5.4 3.1c4.3 2.5 6.2 4.8 5.6 8.4-.6 3.1-3.3 5.1-7.4 5.1-5.8 0-8.8-2.9-11.8-7.8l-9.8 5.6c3.5 7.4 9.7 12.5 20.3 12.5 10.8 0 18.5-5.7 20.7-14.2zM63.5 43H52.1v33.9c0 8-3 11.4-8.8 11.4-5.8 0-8.2-4.3-10-8.1l-9.8 5.9c2.7 7 8.8 13.3 19.9 13.3 11.7 0 19.1-6.4 19.1-20.1V43z" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Languages",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#3776AB"
          d="M63.4 4C44.7 4 46 12.3 46 12.3l.1 8.6h17.7v2.6H29.3S17 22 17 40.9s10.2 18.3 10.2 18.3h6.1v-8.8S32.8 40 43 40h27.4s9.7.2 9.7-9.4V13.4S81.6 4 63.4 4zM54 11.3a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6z"
        />
        <path
          fill="#FFD43B"
          d="M64.6 124c18.7 0 17.4-8.3 17.4-8.3l-.1-8.6H64.2v-2.6h34.5S111 106 111 87.1 100.8 68.8 100.8 68.8h-6.1v8.8S95.2 88 85 88H57.6s-9.7-.2-9.7 9.4v17.2S46.4 124 64.6 124zm9.4-7.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6z"
        />
      </svg>
    ),
  },
  {
    name: "Java",
    category: "Languages",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" rx="14" fill="#0d3a66" />
        <path
          fill="#f89820"
          d="M52 36c-8 14-24 20-24 34 0 10 6 18 16 22-2-4-2-8-2-12 0-12 10-22 22-28-4-6-8-12-12-16zm24 0c4 4 8 10 12 16 12 6 22 16 22 28 0 4 0 8-2 12 10-4 16-12 16-22 0-14-16-20-24-34-6 4-14 6-22 6s-16-2-22-6zM44 92c4 8 12 12 20 12s16-4 20-12c-6 4-14 6-20 6s-14-2-20-6z"
        />
        <path
          fill="#5382a1"
          d="M64 24c-2 8-4 14-8 20 4-2 8-2 12-2h4c4 0 8 0 12 2-4-6-6-12-8-20-2 2-6 4-10 4s-8-2-10-4z"
        />
      </svg>
    ),
  },
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <circle cx="64" cy="64" r="12" fill="#61DAFB" />
        <ellipse cx="64" cy="64" rx="56" ry="20" fill="none" stroke="#61DAFB" strokeWidth="5" />
        <ellipse cx="64" cy="64" rx="56" ry="20" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="56" ry="20" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 64 64)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <circle cx="64" cy="64" r="60" fill="#000" />
        <path
          fill="#fff"
          d="M106.3 106.8L49.9 28H36v72h11.3V44.8l51.1 62.8c2.8-1.5 5.4-3.2 8-5.1v.3zm-22.7-4.2V28H95v74.6c-3.7 0-7.6-.7-11.4-2z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#38BDF8"
          d="M64 16c-17.1 0-27.8 8.5-32 25.5 6.4-8.5 13.9-11.7 22.4-9.7 4.9 1.2 8.3 4.7 12.1 8.5 6.2 6.4 13.4 13.7 29.1 13.7 17.1 0 27.8-8.5 32-25.5-6.4 8.5-13.9 11.7-22.4 9.7-4.9-1.2-8.3-4.7-12.1-8.5C86.9 23.3 79.7 16 64 16zm-32 38.4c-17.1 0-27.8 8.5-32 25.5 6.4-8.5 13.9-11.7 22.4-9.7 4.9 1.2 8.3 4.7 12.1 8.5 6.2 6.4 13.4 13.7 29.1 13.7 17.1 0 27.8-8.5 32-25.5-6.4 8.5-13.9 11.7-22.4 9.7-4.9-1.2-8.3-4.7-12.1-8.5-6.2-6.4-13.4-13.7-29.1-13.7z"
        />
      </svg>
    ),
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#83CD29"
          d="M64 4.3L9.3 36.1v63.7L64 131.7l54.7-31.9V36.1L64 4.3z"
        />
        <path
          fill="#404137"
          d="M64 4.3L9.3 36.1v63.7L64 131.7V4.3z"
          opacity=".15"
        />
        <path
          fill="#fff"
          d="M58.5 87.5c0 1.3.6 2.3 1.8 2.9l13.9 8c.6.4 1.4.4 2 0l13.9-8c1.2-.7 1.8-1.6 1.8-2.9V71.4c0-1.3-.6-2.3-1.8-2.9l-13.9-8c-.6-.4-1.4-.4-2 0l-13.9 8c-1.2.7-1.8 1.6-1.8 2.9v16.1z"
        />
        <path
          fill="#83CD29"
          d="M76.2 54.3c-.4-.2-.8-.2-1.2 0L63.8 61c-.7.4-1.2 1.1-1.2 1.9v13.3c0 .8.4 1.5 1.2 1.9l11.2 6.5c.7.4 1.6.4 2.4 0l11.2-6.5c.7-.4 1.2-1.1 1.2-1.9V62.9c0-.8-.4-1.5-1.2-1.9l-11.4-6.7z"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#336791"
          d="M93.8 24.6c-5-1.3-9.7-1.4-13.9-.8-1.4-3.3-3.3-6.2-5.6-8.5-4.4-4.4-10.4-6.5-16.7-5.8C52.2 10 47 12.7 43 17.3c-5 5.7-7.2 14-6.1 22.6.4 3.1 1.2 6 2.3 8.8-3.6 2.5-6 6.2-6.5 10.4-.7 5.4 1.5 10.7 5.9 14.1 1.2.9 2.5 1.7 4 2.3v.3c0 8.7 4.2 16 10.4 20.3 2.1 1.4 4.3 2.5 6.8 3.2.3 3.1 1 6.2 2.3 9 1.7 3.6 4.2 6.4 7.3 8.2 2.1 1.2 4.5 1.9 7 2.1 4.1.3 8-.7 11.3-2.9 4.4-2.9 7.3-7.4 8.5-13.1 5.7-1.5 10.5-4.9 13.6-10 2.1-3.5 3.2-7.6 3.2-11.8 0-2.8-.5-5.5-1.5-8 2.9-3.3 4.4-7.4 4.1-11.8-.4-5.5-3.3-10.4-7.9-13.5 1.5-7.9.2-15.9-3.8-21.5-2.3-3.2-5.5-5.4-9.1-6.4z"
        />
        <path
          fill="#fff"
          d="M64 30c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm0 8c6.1 0 11.7 1.9 16.4 5.2l-38.2 38.2C39 77 37 71.7 37 65.9 37 46.5 48.8 38 64 38zm0 54c-6.1 0-11.8-2-16.5-5.2l38.2-38.2c3.3 4.7 5.3 10.4 5.3 16.5C91 83.5 79.2 92 64 92z"
        />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8" fill="none">
        <rect x="8" y="8" width="112" height="112" rx="12" fill="#10B981" />
        <path
          fill="#fff"
          d="M32 50h20v6H38v10h12v6H38v12h-6V50zm28 0h16c5.5 0 10 4.5 10 10s-4.5 10-10 10H66v14h-6V50zm6 14h9c2.2 0 4-1.8 4-4s-1.8-4-4-4h-9v8zm20-14h6l8 22 8-22h6l-10 34h-8l-10-34z"
        />
      </svg>
    ),
  },
  {
    name: "SQL",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <ellipse cx="64" cy="34" rx="42" ry="15" fill="#336791" />
        <path fill="#2d5a76" d="M22 34v22c0 8 19 15 42 15s42-7 42-15V34" />
        <ellipse cx="64" cy="56" rx="42" ry="15" fill="#4479a1" />
        <path fill="#3d6d8c" d="M22 56v24c0 8 19 15 42 15s42-7 42-15V56" />
        <ellipse cx="64" cy="80" rx="42" ry="15" fill="#5a9fd4" />
      </svg>
    ),
  },
  {
    name: "Apache Kafka",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" rx="14" fill="#231F20" />
        <circle cx="40" cy="64" r="12" fill="#fff" />
        <circle cx="88" cy="64" r="12" fill="#fff" />
        <circle cx="64" cy="40" r="10" fill="#ED1944" />
        <path
          stroke="#fff"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          d="M52 64h16M76 64h16M56 44l8 14M72 44l-8 14"
        />
      </svg>
    ),
  },
  // Tooling
  {
    name: "Git",
    category: "Tooling",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#F05032"
          d="M124.7 58.1L69.9 3.3c-2.9-2.9-7.7-2.9-10.6 0L48.2 14.4l13.3 13.3c3.1-1 6.6-.3 9 2.1 2.5 2.5 3.1 6 2.1 9.1l12.8 12.8c3.1-1 6.6-.4 9 2.1 3.4 3.4 3.4 8.9 0 12.3-3.4 3.4-8.9 3.4-12.3 0-2.6-2.6-3.2-6.3-1.9-9.5L67.6 43.9v33.2c.7.4 1.4.8 2 1.4 3.4 3.4 3.4 8.9 0 12.3-3.4 3.4-8.9 3.4-12.3 0-3.4-3.4-3.4-8.9 0-12.3.8-.8 1.6-1.4 2.6-1.8V43.5c-1-.4-1.9-1-2.6-1.8-2.6-2.6-3.2-6.4-1.8-9.6L42.3 18.8 3.3 57.9c-2.9 2.9-2.9 7.7 0 10.6l54.8 54.8c2.9 2.9 7.7 2.9 10.6 0l56-56c3-3 3-7.8.1-10.7-.1 0-.1.1-.1.5z"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Tooling",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path fill="#2496ED" d="M124.8 52.1c-2.8-1.9-9.2-2.6-14-1.3-.5-5-3.5-9.4-8.4-12.4l-2.8-1.7-1.7 2.8c-2.1 3.3-2.7 8.7-1.1 12.8-1.8.9-5.4 2.1-10.2 2H2.6c-1.3 7.2.5 16.5 5.9 22.9 5.3 6.3 13.2 9.5 23.6 9.5 22.5 0 39.2-10.4 47-29.3 5.5.1 17.3.3 23.3-11.5.2-.3.6-1.1 1.4-2.8l.5-1zm-93.4-7H15.5v15.3h15.9V45.1zm19.8 0H35.3v15.3h15.9V45.1zm19.8 0H55.1v15.3H71V45.1zm19.7 0H74.9v15.3h15.8V45.1zm-79.1-19.6H15.5v15.3h15.9V25.5zm19.8 0H35.3v15.3h15.9V25.5zm19.8 0H55.1v15.3H71V25.5zm-.1-19.5H55v15.3h15.9V6z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    category: "Tooling",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#FF9900"
          d="M40.8 55c0 1.8.2 3.2.6 4.2.4.9 1 2 1.8 3 .3.4.4.7.4 1.1 0 .5-.3 1-.8 1.5l-2.8 1.9c-.4.3-.8.4-1.1.4-.4 0-.9-.2-1.3-.6-1.7-1.8-2.8-3.5-3.5-5.2-1.5 3.5-3.5 6.2-7.3 6.2-5.2 0-7.8-4.5-7.8-12.2 0-4.2 1-7.3 2.9-9.4 2-2.1 4.5-3.1 7.6-3.1 1.3 0 2.7.1 4.1.4V40c0-3.2-.3-5.7-1-7.4-.6-1.7-1.9-2.5-3.7-2.5-1.4 0-2.6.5-3.6 1.5s-1.7 2.2-1.7 3.6v.4l-5.1-1.4c-.1-.5-.1-1-.1-1.4 0-2.9 1-5.2 3.1-7 2-1.8 4.8-2.7 8.2-2.7 3.6 0 6.4 1 8.4 3.1 1.9 2.1 2.9 5.1 2.9 9v14.8zm-9.1 3.6c1.4 0 2.5-.8 3.3-2.4.8-1.6 1.2-3.7 1.2-6.2v-2.2c-1.4-.4-2.8-.6-4-.6-2.1 0-3.6.6-4.6 1.9-1 1.2-1.5 3-1.5 5.2 0 4.3 1.9 6.3 5.6 6.3zm32.5 4.7c-1.3 0-2-.7-2.2-2l-1.2-5.8c-.3-.9-.8-1.4-1.6-1.4h-8.4c-.8 0-1.3.5-1.6 1.4l-1.2 5.8c-.3 1.3-1 2-2.2 2h-3.3c-.4 0-.7-.2-.8-.5-.2-.4-.2-.8 0-1.4L50.9 27c.4-1.1 1.1-1.7 2.2-1.7h4.5c1 0 1.8.6 2.2 1.7l12.2 34.4c.2.6.2 1 0 1.4-.2.4-.5.5-.8.5h-3zm-7.1-13.7l-2.3-9.1c-.3-1.2-.7-3-.9-5.3-.2 2-.6 3.9-1.1 5.7l-2.3 8.7h6.6zm22.6 14.3c-2.1 0-4.1-.5-5.9-1.5s-3.2-2.4-4.2-4.2c-1-1.8-1.5-4-1.5-6.5 0-3.5.9-6.2 2.6-8.2 1.8-2 4.2-3 7.3-3 2.2 0 4 .5 5.5 1.4l.3-1.5c.2-.9.7-1.3 1.7-1.3h3c.4 0 .7.1.9.4.2.2.3.6.2 1l-2 19.4c0 .9.4 1.3 1.3 1.3 1.1 0 2.4-.3 3.7-.9.2-.1.4-.2.6-.1.2 0 .4.2.5.4l1.3 3.1c.3.7.1 1.2-.6 1.5-2.1.8-4.1 1.2-6.1 1.2-2.1 0-3.6-.6-4.5-1.7-.8-1.1-1.3-2.7-1.3-4.6v-.1c-1.3 2.1-2.8 3.8-4.5 4.8-1.7.9-3.6 1.3-5.6 1.3zm1.8-4.8c1.4 0 2.6-.4 3.8-1.3 1.1-.9 2-2.2 2.6-3.9.5-1.7.8-3.7.8-5.9 0-2.5-.5-4.3-1.5-5.5-1-.9-2.1-1.4-3.4-1.4-1.7 0-3.1.7-4.2 2-1.1 1.3-1.6 3.3-1.6 5.8 0 2.4.5 4.3 1.5 5.8 1 1.6 2.3 2.4 4 2.4zm24.3 4.8c-1.8 0-3.2-.6-4.2-1.7-1-1.1-1.5-2.7-1.5-4.6V34.6h-2.9c-.9 0-1.4-.5-1.4-1.5v-2.3c0-1 .5-1.5 1.4-1.5h2.9v-6.4c0-1 .5-1.5 1.5-1.5l4 .2c1 0 1.5.5 1.5 1.5v6.2h5.5c.9 0 1.4.5 1.4 1.5v2.3c0 1-.5 1.5-1.4 1.5h-5.5v22.1c0 1.1.5 1.7 1.5 1.7.7 0 1.5-.2 2.3-.5.3-.1.5-.1.7.1.2.1.3.4.4.8l.8 3c.2.7 0 1.2-.7 1.5-1.4.5-3 .8-4.3.8z"
        />
        <path
          fill="#232F3E"
          d="M108 77.4c-13 9.7-31.9 14.8-48.2 14.8-22.8 0-43.3-8.4-58.8-22.4-1.2-1.1-.1-2.6 1.3-1.7 16.7 9.7 37.4 15.6 58.7 15.6 14.4 0 30.2-3 44.7-9.2 2.2-.9 4 1.5 2.3 2.9z"
        />
        <path
          fill="#232F3E"
          d="M113.3 71.3c-1.7-2.1-11-1-15.2-.5-1.3.2-1.5-1-.3-1.8 7.4-5.2 19.6-3.7 21 .4 1.5 4.3-3.5 16.6-9.7 23.5-1.4 1.7-.7 3 .9 1.4 9.4-9.3 11.9-23.5 3.3-23z"
        />
      </svg>
    ),
  },
  {
    name: "Terraform",
    category: "Tooling",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#7B42BC"
          d="M32 44l24-14v28L32 64V44zm28-18l24 14v28L60 78V26zm0 54l24-14v28l-24 14V80zm28-18l24 14v28l-24-14V62z"
        />
      </svg>
    ),
  },
  // Other
  {
    name: "Agentic AI",
    category: "Other",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" rx="14" fill="#1e1b4b" />
        <circle cx="64" cy="64" r="20" fill="none" stroke="#a5b4fc" strokeWidth="4" />
        <circle cx="64" cy="64" r="8" fill="#818cf8" />
        <path
          fill="#c4b5fd"
          d="M64 22l6 16h16l-13 10 5 16-14-10-14 10 5-16-13-10h16z"
        />
        <circle cx="28" cy="72" r="5" fill="#22d3ee" />
        <circle cx="100" cy="72" r="5" fill="#22d3ee" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "Other",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#E10098"
          d="M64 8L11.7 38.5v61L64 120l52.3-20.5v-61L64 8zm37.1 89.3L64 117.8 26.9 97.3V30.7L64 10.2l37.1 20.5v66.6zM64 21.4L33.5 38.8v42.4L64 98.6l30.5-17.4V38.8L64 21.4zM39 75.5V52.5l25-14.4 25 14.4v23l-25 14.4L39 75.5zm25 12L46.5 76.7V55.4L64 44.5l17.5 10.9v21.3L64 87.5zm0-53.5L49.5 42.7V64h-6V39.7L64 27.1l20.5 12.6V64h-6V42.7L64 34z"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Other",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path fill="#F24E1E" d="M40 88c0 13.3 10.7 24 24 24s24-10.7 24-24V64H40v24z" />
        <path fill="#FF7262" d="M40 40c0-13.3 10.7-24 24-24h24v48H40V40z" />
        <path fill="#A259FF" d="M40 64H64c13.3 0 24-10.7 24-24S77.3 16 64 16H40v48z" />
        <path fill="#1ABCFE" d="M88 64c0 13.3-10.7 24-24 24S40 77.3 40 64s10.7-24 24-24 24 10.7 24 24z" />
        <path fill="#0ACF83" d="M64 16h24v48H64V16z" />
      </svg>
    ),
  },
  
];

const categories = Array.from(new Set(skills.map((s) => s.category)));

export default function Competencies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Section heading */}
      <div
        className={`mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3">
          Depth behind the direction
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Technical authority
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-neutral-500 leading-relaxed">
          Stack fluency I use to arbitrate build-vs-buy, coach teams, and review architecture—not a primary job title.
        </p>
      </div>

      {/* Category filter tabs */}
      <div
        className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((skill, i) => (
          <div
            key={skill.name}
            className={`group relative flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: visible ? `${i * 40}ms` : "0ms" }}
          >
            <div className="shrink-0 w-8 h-8 transition-transform duration-200 group-hover:scale-110">
              {skill.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">
                {skill.name}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
