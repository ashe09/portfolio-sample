import { worksDetail } from "@/app/utils/data/worksData";

import { WorkSwiper } from "./WorkSwiper";

export const WorkPractical = () => {
  return (
    <>
      {worksDetail.map(item => (
        <div key={Math.floor(Math.random() * 1e5)} className={`${!item.title ? "mt-20" : null}`}>
          {item.title && item.slug ? (
            <h2
              id={item.slug}
              className="mb-7 pt-16 text-center text-xl font-semibold text-black dark:text-gray sm:pt-24"
            >
              {item.title}
            </h2>
          ) : null}
          <div className="grid grid-cols-1 items-start gap-x-12 lg:grid-cols-workInfoCombo">
            <div className="mx-auto mb-7 w-full max-w-600 lg:mx-0 lg:mb-0 lg:w-440">
              <WorkSwiper item={item.images} />
            </div>
            <div className="grid gap-y-6 lg:gap-y-5">
              <dl className="grid grid-cols-1 gap-y-2">
                <dt className="relative pl-7 before:absolute before:left-0 before:top-7px before:h-4 before:w-4 before:bg-black before:content-[''] dark:before:bg-gray">
                  詳細
                </dt>
                <dd>{item.description}</dd>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
