"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const headerLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Works",
    href: "/#works"
  },
  {
    title: "Profile",
    href: "/#profile"
  }
];

export const Footer = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    window.scrollY > 300 ? setIsShow(true) : setIsShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);
    return () => window.removeEventListener("scroll", toggleShow);
  });

  return (
    <>
      <footer className="bg-white pt-20 font-sans text-textNormal dark:bg-bgDark dark:text-gray sm:pt-24">
        <p
          id="pageTop"
          className={`fixed bottom-5 right-3 h-10 w-10 transition-all duration-700 ${isShow ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <a
            href="#top"
            className="relative block h-full w-full overflow-hidden rounded-md bg-black opacity-90 before:absolute before:left-1/2 before:top-[40%] before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-l-2 before:border-t-2 before:border-white  before:content-[''] hover:opacity-60 dark:bg-stone-500"
          >
            <span className="absolute left-0 top-0 h-0 w-0 opacity-0">TOPへ戻る</span>
          </a>
        </p>
        <nav className="pb-5 sm:pb-6">
          <ul className="flex justify-center gap-x-6">
            {headerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link href={href} className="px-3 py-2">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="py-5 text-center">
          <small>Copyright&copy; Portfolio Website</small>
        </p>
      </footer>
    </>
  );
};
