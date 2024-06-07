import Image from "next/image";
import Link from "next/link";

import { KeyVisual } from "@/app/components/top/KeyVisual";
import { worksDetail } from "@/app/utils/data/worksData";


export default function Home() {
  return (
    <>
      <div className="relative flex h-440 flex-col justify-center bg-yellow dark:bg-darkYellow md:h-600">
        <KeyVisual />
        <p className="invisible absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 animate-mvTextAnimation font-sans text-4xl uppercase text-black opacity-0 transition-opacity duration-1000">
          hello.
        </p>
      </div>
      <section id="works" className="m-auto w-full max-w-5xl px-8 pt-16 sm:px-10 sm:pt-20">
        <h3 className="mb-10 text-center font-sans text-3xl text-black dark:text-gray">Works</h3>
        <div className="pt-20 sm:pt-24">
          <h4 className="relative mb-5 pl-6 font-sans text-subHeading before:absolute before:left-0 before:top-1/2 before:h-4 before:w-4 before:-translate-y-1/2 before:bg-black before:content-[''] dark:before:bg-gray">
            Practical Works
          </h4>
          <ul className="grid grid-cols-worksList gap-10">
            {worksDetail.map(item => (
              <li key={item.title} className="row-span-1 grid grid-rows-subgrid gap-y-0 text-center">
                <Link href={`/works/design/#${item.slug}`}>
                  <Image
                    src={`/images/works/${item.images[0]}.webp`}
                    width={700}
                    height={600}
                    alt=""
                    className="w-full dark:brightness-95"
                  />
                  <p className="mt-2 font-medium">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="profile" className="px-8 pt-20 sm:px-10 sm:pt-28">
        <h3 className="mb-10 text-center font-sans text-3xl text-black dark:text-gray">Profile</h3>
        <div className="flex flex-col items-center gap-y-5 sm:flex-row sm:items-start sm:justify-center sm:gap-x-20">
          <figure>
            <Image
              src="/images/top/profilePhoto.webp"
              width={160}
              height={160}
              alt=""
              className="rounded-full dark:brightness-95"
            />
          </figure>
          <div className="sm:w-390">
            <p className="text-center text-lg font-semibold sm:text-left">山田 太郎</p>
            <p className="mt-2 text-center font-sans text-sm sm:text-left">Yamada Tarou</p>
            <p className="mt-4">
              プロフィールテキストです。プロフィールテキストです。プロフィールテキストです。プロフィールテキストです。プロフィールテキストです。プロフィールテキストです。プロフィールテキストです。プロフィールテキストです。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
