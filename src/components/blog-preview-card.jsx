export default function BlogPreviewCard() {
  return (
    <article className="p-6 min-w-[327px] w-96 bg-brand-white border border-brand-black rounded-[20px] brand-shadow">
      <div className="relative rounded-[10px] overflow-hidden">
        <img
          src="/images/illustration-article.svg"
          alt="illustration-article"
          className="w-[336px] h-[200px]"
        />
      </div>
      <div className="my-6 flex flex-col gap-3">
        <button className="text-xs bg-brand-yellow rounded-[4px] text-brand-black md:text-sm font-extrabold md:w-[82px] md:h-[29px] w-[73px] h-[26px]">
          Learning
        </button>
        <span className="text-xs text-brand-black md:text-sm font-medium">
          Published 21 Dec 2023
        </span>
        <h1 className="font-extrabold md:text-2xl hover:text-brand-yellow cursor-pointer text-xl">
          HTML & CSS foundations
        </h1>
        <p className="text-medium leading-6 text-brand-grey text-sm md:text-base">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <footer className="w-full flex items-center gap-3">
        <div className="relative">
          <img
            src="/images/image-avatar.webp"
            alt="avatar"
            className="w-8 h-8"
          />
        </div>
        <h2 className="font-bold text-sm text-brand-black">Greg Hooper</h2>
      </footer>
    </article>
  );
}
