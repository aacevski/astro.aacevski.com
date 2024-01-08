import React, { type JSX } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";

const MoonIcon = (props: JSX.HTMLAttributes<SVGSVGElement>) => (
  <svg
    class="h-5 w-5 text-black dark:text-white"
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 256 256"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path>
  </svg>
);

const SunIcon = (props: JSX.HTMLAttributes<SVGSVGElement>) => (
  <svg
    class="h-5 w-5 text-black dark:text-white"
    stroke="currentColor"
    fill="none"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
  </svg>
);

const SystemIcon = (props: JSX.HTMLAttributes<SVGSVGElement>) => (
  <svg
    class="h-5 w-5 text-black dark:text-white"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    ></path>
  </svg>
);

const getIcon = (name: string) => {
  switch (name) {
    case "dark":
      return <MoonIcon />;
    case "light":
      return <SunIcon />;
  }
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickTheme = (name: string) => {
    setTheme(name);
    setIsDropdownOpen(false);
  };

  const handleSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setIsDropdownOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);

    document.addEventListener("mousedown", (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";
    const isLight = theme === "light";

    if (isDark) {
      document.documentElement.classList.add("dark");
      document
        .getElementById("logo")
        ?.setAttribute("src", "/logo-transparent-white.png");
    }

    if (isLight) {
      document.documentElement.classList.remove("dark");
      document
        .getElementById("logo")
        ?.setAttribute("src", "/logo-transparent-black.png");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <div class="relative flex items-center justify-end md:justify-center">
      <button
        onClick={handleClickDropdown}
        class="text-white font-medium rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white md:px-2 py-2"
      >
        {getIcon(theme)}
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          class="absolute z-50 top-10 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-24 dark:bg-[rgba(0,0,0,0.5)] dark:ring-0 transition duration-150 ease-in-out"
        >
          <ul class="py-2 text-xs text-black dark:text-white font-light">
            <li>
              <button
                onClick={() => handleClickTheme("light")}
                class="flex px-2 w-full hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white p-2 items-center"
              >
                <SunIcon className={"mr-2"} />
                Light
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClickTheme("dark")}
                class="flex px-2 w-full hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white p-2 items-center"
              >
                <MoonIcon className={"mr-2"} />
                Dark
              </button>
            </li>
            <li>
              <button
                onClick={handleSystemTheme}
                class="flex px-2 w-full hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white p-2 items-center"
              >
                <SystemIcon className={"mr-2"} />
                System
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
