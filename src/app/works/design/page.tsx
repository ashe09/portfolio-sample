import { WorkPractical } from "@/app/components/page/WorkPractical";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Design Works"
};

const PersonalDesignWork = () => {
  return (
    <>
      <h1 className="bg-gray py-22px text-center font-sans text-3xl dark:bg-stone-500 dark:text-gray md:py-3">
        Design Works
      </h1>
      <div className="m-auto w-full max-w-5xl px-8 sm:px-10">
        <WorkPractical />
      </div>
    </>
  );
};

export default PersonalDesignWork;
