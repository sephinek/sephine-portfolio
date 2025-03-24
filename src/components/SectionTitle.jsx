export default function SectionTitle({ title, align = 'center' }) {
  return (
    <h3 className={`font-medium text-4xl py-4 text-${align} text-darkgrey`}>
      {title}
    </h3>
  );
}
