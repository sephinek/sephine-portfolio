import Button from './Button';

export default function ProjectItem({
  to,
  type = 'left',
  numOfScreens = '1',
  img,
  circleColor,
  alt,
  title,
  description,
  imgWidth,
}) {
  return (
    <li className="flex gap-10 items-center">
      <div
        className={`${type === 'left' ? 'order-1' : 'order-2'} relative ${
          numOfScreens === '1' ? 'w-[30%]' : 'w-[55%]'
        } h-auto flex items-center justify-center`}
      >
        {/* <div
          className={`absolute w-[440px] h-[440px] rounded-full ${circleColor} shadow-xl`}
        ></div> */}
        <img
          className={`${
            imgWidth ? imgWidth : 'w-[80%]'
          } z-10 h-auto rounded-[33px]`}
          src={img}
          alt={alt}
        />
      </div>

      <div
        className={`${type === 'left' ? 'order-2' : 'order-1'} ${
          numOfScreens === '1' ? 'max-w-[45%]' : 'max-w-[40%]'
        } flex flex-col items-center gap-12 mx-auto`}
      >
        <div className="flex flex-col gap-6 w-[90%]">
          <h4 className="text-3xl text-lightestgrey tracking-wide">{title}</h4>
          <p className="text-base tracking-wider leading-snug text-lightgrey">
            {description}
          </p>
        </div>
        <Button to={to} label="Read more" w="w-[90%]" py="py-2" />
      </div>
    </li>
  );
}
