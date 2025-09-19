import { useState, useEffect } from "react";
import { useQRStore } from "../../store/useQRStore";

export default function UPIForm() {
  const setUPI = useQRStore((s) => s.setUPI);

  const [form, setForm] = useState({
    id: "",
    name: "",
    amount: "",
    note: "",
  });

  useEffect(() => {
    setUPI({
      id: form.id,
      name: form.name,
      amount: form.amount,
      note: form.note,
    });
  }, [form, setUPI]);

  const inputClass =
    "w-full px-3 py-2 rounded-md bg-white/6 border border-white/10 text-sm text-white placeholder:text-gray-400";

  return (
    <div className="grid grid-cols-1 gap-3">
      <input
        className={inputClass}
        placeholder="UPI ID"
        value={form.id}
        onChange={(e) => setForm((p) => ({ ...p, id: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="Payee name"
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="Amount (optional)"
        type="number"
        value={form.amount}
        onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="Transaction note (optional)"
        value={form.note}
        onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
      />
    </div>
  );
}
