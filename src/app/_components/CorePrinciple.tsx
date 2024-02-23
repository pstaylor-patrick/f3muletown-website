interface CorePrincipleProps {
  principle: string;
  description: string;
}

export default function CorePrinciple({
  principle,
  description,
}: CorePrincipleProps) {
  return (
    <li>
      <h3 className="font-sans text-xl normal-case font-medium">{principle}</h3>
      <p className="text-cmu text-sm mb-5">{description}</p>
    </li>
  );
}
