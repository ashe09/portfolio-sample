"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
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

export interface HamburgerProps {
  isInitiallyOpen?: boolean;
}

export const Header = (props: HamburgerProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const iconLight = "light_mode";
  const iconDark = "dark_mode";
  const iconLightSm = "light_mode_sm";
  const iconDarkSm = "dark_mode_sm";

  const { isInitiallyOpen } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(isInitiallyOpen ?? false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const systemTheme = () => {
    setTheme("system");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const linkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header bg-white font-sans text-textNormal dark:bg-bgDark dark:text-gray md:px-5 md:py-8">
        <nav
          id="headerNav"
          className={`header-nav fixed top-0 z-100 h-dvh w-full overflow-y-auto overscroll-y-contain bg-black px-10 pt-24 transition-all duration-500 md:static md:h-auto md:w-auto md:bg-transparent md:px-0 md:pt-0 ${isMenuOpen ? "right-0" : "-right-full"}`}
          // eslint-disable-next-line jsx-a11y/aria-proptypes
          aria-hidden={`${isMenuOpen ? "false" : "true"}`}
        >
          <ul className="flex w-full flex-col items-center border-b border-white md:flex-row md:justify-center md:gap-x-6 md:border-none">
            {headerLinks.map(({ title, href }) => (
              <li key={title} className="w-full md:w-auto">
                <Link
                  href={href}
                  className="inline-block w-full border-t border-white py-5 text-center text-white md:border-none md:px-3 md:py-2 md:text-black md:dark:text-gray"
                  onClick={linkClick}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute right-1/2 top-330 grid translate-x-1/2 grid-cols-2 gap-x-3 md:right-7 md:top-8 md:translate-x-0">
            <button
              aria-label={`${resolvedTheme === "dark" ? "ライトモードに切り替える" : "ダークモードに切り替える"}`}
              type="button"
              onClick={toggleTheme}
              className="p-2"
            >
              <Image
                src={`/images/common/${resolvedTheme === "dark" ? iconLight : iconDark}.svg`}
                width={24}
                height={24}
                alt=""
                className="hidden md:block"
              />
              <Image
                src={`/images/common/${resolvedTheme === "dark" ? iconLightSm : iconDarkSm}.svg`}
                width={24}
                height={24}
                alt=""
                className="block md:hidden"
              />
            </button>
            <button
              aria-label="システムのデフォルトモードに切り替える"
              type="button"
              onClick={systemTheme}
              className="p-2"
            >
              <Image src={`/images/common/system_mode.svg`} width={24} height={24} alt="" className="hidden md:block" />
              <Image
                src={`/images/common/system_mode_sm.svg`}
                width={24}
                height={24}
                alt=""
                className="block md:hidden"
              />
            </button>
          </div>
        </nav>
        <button
          id="hamburger"
          type="button"
          className={`hamburger right-5 top-15px z-100 block h-50px w-50px bg-white md:hidden ${isMenuOpen ? "fixed" : "absolute"}`}
          aria-controls="headerNav"
          // eslint-disable-next-line jsx-a11y/aria-proptypes
          aria-expanded={`${isMenuOpen ? "true" : "false"}`}
          aria-label={`${isMenuOpen ? "メニューを閉じる" : "メニューを開く"}`}
          onClick={handleClick}
        >
          <span
            className={`befoter:duration-500 absolute left-5px  top-19px block h-0.5 w-10 rounded-sm bg-black transition duration-500 ease-in-out before:absolute before:block before:h-full before:w-full before:transition-inherit before:content-[''] after:absolute after:block after:h-full after:w-full after:duration-500 after:content-[''] ${isMenuOpen ? "bg-transparent before:top-0 before:rotate-135 before:bg-black after:top-0 after:-rotate-135 after:bg-black" : "before:-top-9px before:bg-inherit after:top-9px after:bg-inherit"}`}
          ></span>
          <span className="absolute left-5px top-8 block w-10 text-center text-xs uppercase text-black transition duration-500 ease-in-out">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>
    </>
  );
};
