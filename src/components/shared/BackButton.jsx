import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

export default function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="max-w-6xl w-6xl mx-auto cursor-pointer flex items-center gap-1 p-4 hover:text-mediumgrey"
    >
      <IoChevronBack />
      <span className="text-sm">Back</span>
    </button>
  );
}
