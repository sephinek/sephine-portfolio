import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

export default function NotFound() {
  return (
    <section className="flex flex-col gap-12 p-14 pb-32 max-w-7xl mx-auto">
      <SectionTitle title="404 Page Not Found" />
      <div className="self-center flex flex-col items-center gap-10">
        <div className="flex gap-3 items-end">
          <span className="text-[#4ff0b7] text-7xl">Sorry,</span>{' '}
          <div className="font-medium flex flex-col leading-tight">
            <span>the page you're looking for can't be found.</span>
            <span>Would you like to go back to home?</span>
          </div>
        </div>
        <Button label="Go Home" w="w-[140px]" py="py-2" to="/" />
      </div>
    </section>
  );
}
