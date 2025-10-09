import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    label?: string;
    amount: number;
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-xl font-bold text-blue-600">
        {label && `${label}: `} 
        <span className="text-black font-bold">{formatCurrency(amount)}</span>
    </p>
  )
}
