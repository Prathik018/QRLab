import { useState, useEffect } from "react";
import { useQRStore } from "../../store/useQRStore";

export default function ContactForm() {
  const setContact = useQRStore((s) => s.setContact);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    instagram: "",
    twitter: "",
    youtube: "",
    discord: "",
  });

  useEffect(() => {
    setContact({
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      address: form.address,
      insta: form.instagram,
      x: form.twitter,
      yt: form.youtube,
      discord: form.discord,
    });
  }, [form, setContact]);

  const inputClass =
    "w-full px-3 py-2 rounded-md bg-white/6 border border-white/10 text-sm text-white placeholder:text-gray-400";

  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="flex gap-2">
        <input
          className={inputClass}
          placeholder="First name"
          value={form.firstName}
          onChange={(e) =>
            setForm((p) => ({ ...p, firstName: e.target.value }))
          }
        />
        <input
          className={inputClass}
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
        />
      </div>
      <input
        className={inputClass}
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
      />
      <div className="text-sm text-gray-300">Social links (optional)</div>
      <input
        className={inputClass}
        placeholder="Instagram"
        value={form.instagram}
        onChange={(e) => setForm((p) => ({ ...p, instagram: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="X / Twitter"
        value={form.twitter}
        onChange={(e) => setForm((p) => ({ ...p, twitter: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="YouTube"
        value={form.youtube}
        onChange={(e) => setForm((p) => ({ ...p, youtube: e.target.value }))}
      />
      <input
        className={inputClass}
        placeholder="Discord"
        value={form.discord}
        onChange={(e) => setForm((p) => ({ ...p, discord: e.target.value }))}
      />
    </div>
  );
}
