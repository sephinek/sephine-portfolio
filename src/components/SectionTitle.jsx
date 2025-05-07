export default function SectionTitle({
  title,
  align = 'center',
  color = 'lightestgrey',
}) {
  return (
    <h3
      className={`font-display tracking-normal font-normal text-4xl py-4 text-${align} text-${color}`}
    >
      {title}
    </h3>
  );
}
