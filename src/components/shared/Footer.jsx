export default function Footer() {
  return (
    <footer className="p-6 pb-10 border-t-[1px] border-t-gray-50 flex flex-col items-center gap-4 justify-center bg-lightgrey text-mediumgrey">
      <div className="flex justify-between items-center w-full">
        <span className="self-start font-medium">
          Thank you for checking in!
        </span>
        <div className="flex flex-col text-xs gap-1">
          <span>sephine.k31@gmail.com</span>
          <span>+1 213.378.5068</span>
        </div>
      </div>
      <span className="text-sm">ⓒ 2025 Soo Hyun (Sephine) Kang</span>
    </footer>
  );
}
