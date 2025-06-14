import { useNavigate } from 'react-router';
// import Button from './Button';

export default function ProjectItem({
  to,
  // type = 'left',
  // numOfScreens = '1',
  img,
  // circleColor,
  category,
  alt,
  title,
  description,
  // imgWidth,
}) {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col gap-10 items-center w-full rounded-4xl bg-white-opacity p-10 border-1 border-transparent hover:border-primary text-lightestgrey hover:text-primary transition-all ease-in-out duration-350 cursor-pointer"
      onClick={() => navigate(to)}
    >
      <div className="flex flex-col items-center gap-12 w-full">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-3xl font-medium tracking-normal leading-snug font-display">
            {title}
          </h4>
          <span className="font-light text-base text-lightestgrey">
            {category}
          </span>
        </div>
        <div className="relative flex items-center justify-center w-full max-w-[360px] h-[360px]">
          <img
            className="z-10 object-contain w-full h-full"
            src={img}
            alt={alt}
          />
        </div>

        <div className="flex flex-col items-start gap-4 w-full max-w-[72%]">
          <div className="flex flex-col gap-2 text-base"></div>
          <p className="text-lg leading-snug text-lightgrey">{description}</p>
        </div>

        {/* <Button to={to} label="Read more" w="w-[90%]" py="py-2" /> */}
      </div>
    </li>
  );
}

// import Button from './Button';

// export default function ProjectItem({
//   to,
//   type = 'left',
//   numOfScreens = '1',
//   img,
//   circleColor,
//   alt,
//   title,
//   description,
//   imgWidth,
// }) {
//   return (
//     <li className="flex gap-10 items-center">
//       <div
//         className={`${type === 'left' ? 'order-1' : 'order-2'} relative ${
//           numOfScreens === '1' ? 'w-[30%]' : 'w-[55%]'
//         } h-auto flex items-center justify-center`}
//       >
//         <div
//           className={`absolute w-[440px] h-[440px] rounded-full ${circleColor} shadow-xl`}
//         ></div>
//         <img
//           className={`${
//             imgWidth ? imgWidth : 'w-[80%]'
//           } z-10 h-auto rounded-[33px]`}
//           src={img}
//           alt={alt}
//         />
//       </div>

//       <div
//         className={`${type === 'left' ? 'order-2' : 'order-1'} ${
//           numOfScreens === '1' ? 'max-w-[45%]' : 'max-w-[40%]'
//         } flex flex-col items-center gap-12 mx-auto`}
//       >
//         <div className="flex flex-col gap-6 w-[90%]">
//           <h4 className="text-3xl text-lightergrey font-medium tracking-normal">
//             {title}
//           </h4>
//           <p className="text-base leading-snug text-grey">{description}</p>
//         </div>
//         <Button to={to} label="Read more" w="w-[90%]" py="py-2" />
//       </div>
//     </li>
//   );
// }
