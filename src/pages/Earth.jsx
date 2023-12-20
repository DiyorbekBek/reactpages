function Earth() {
  return (
    <div className="my-32 flex items-center justify-between">
      <img className="w-[290px] h-[290px]" src="../public/earth.svg" alt="" />
      <div className="w-[348px]">
        <h2 className="uppercase font-antonio font-normal text-7xl mb-6 ">
          Earth
        </h2>
        <p className="text-sm leading-6 opacity-85 mb-6">
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </p>
        <div className="flex items-center mb-10">
          <span className="opacity-50">Source: </span>
          <a
            className="opacity-90"
            href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BA%D1%83%D1%80%D0%B8%D0%B9"
          >
            Wikipediya
            <i className=" opacity-90 fa-solid fa-square-arrow-up-right"></i>
          </a>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-6 border p-3 hover:bg-blue-700 cursor-pointer">
            <span className="font-spartan text-sm opacity-60 font-bold leading-6">
              01
            </span>
            <h5 className="font-spartan text-base opacity-85 uppercase font-bold leading-6">
              OVERVIEW
            </h5>
          </li>
          <li className="flex items-center gap-6 border p-3 hover:bg-blue-700 cursor-pointer">
            <span className="font-spartan text-sm opacity-60 font-bold leading-6">
              02
            </span>
            <h5 className="font-spartan text-base opacity-85 uppercase font-bold leading-6">
              Internal Structure
            </h5>
          </li>
          <li className="flex items-center gap-6 border p-3 hover:bg-blue-700 cursor-pointer">
            <span className="font-spartan text-sm opacity-60 font-bold leading-6">
              03
            </span>
            <h5 className="font-spartan text-base opacity-85 uppercase font-bold leading-6">
              Surface Geology
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Earth;
