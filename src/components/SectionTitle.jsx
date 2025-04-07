export default function SectionTitle({
  title,
  align = 'center',
  color = 'darkgrey',
}) {
  return (
    <h3 className={`font-medium text-4xl py-4 text-${align} text-${color}`}>
      {title}
    </h3>
  );
}
