import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import BannerImg01 from '../../assets/lucid-carousel01.png';

export default function Lucid() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <button
        onClick={handleBack}
        className="cursor-pointer flex items-center gap-1 p-4 hover:text-mediumgrey"
      >
        <IoChevronBack className="text-xl" />
        <span>Back</span>
      </button>

      <section className="flex flex-col gap-20 w-[90%] mx-auto">
        <img
          src={BannerImg01}
          alt="Lucid app onboarding screens with vision input"
          className="border-2 border-lightgrey rounded-4xl"
        />
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="text-2xl font-medium text-grey">MVP Project</span>
            <h2 className="text-5xl font-medium">
              Lucid: Vision Management App
            </h2>
          </div>
          <p className="text-mediumgrey w-[50%] text-center text-lg">
            Lucid aligns users with their vision, boosting inner motivation and
            streamlining the achievement process to bridge the gap between
            mindset and goals.
          </p>
        </div>

        <div className="flex items-center justify-center gap-32">
          <div className="flex flex-col gap-1 items-center">
            <span className="font-medium text-lg text-lucid-opacity">
              My Role
            </span>
            <span className="text-lg text-mediumgrey">
              Product Designer, Frontend Developer
            </span>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="font-medium text-lg text-lucid-opacity">Team</span>
            <span className="text-lg text-mediumgrey">
              4 Product Designers, 2 Engineers
            </span>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="font-medium text-lg text-lucid-opacity">
              Timeline
            </span>
            <span className="text-lg text-mediumgrey">6 weeks (2025)</span>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="font-medium text-lg text-lucid-opacity">
              Tools Used
            </span>
            <span className="text-lg text-mediumgrey">
              Figma, FigJam, Google Form, Maze, React, CSS
            </span>
          </div>
        </div>
      </section>

      <section></section>
    </section>
  );
}
