export default function SectionTitle({
  title,
  align = 'center',
  color = 'lightestgrey',
}) {
  return (
    <h3
      className={`font-display tracking-normal font-normal text-4xl mb-8 text-${align} text-${color}`}
    >
      {title}
    </h3>
  );
}
