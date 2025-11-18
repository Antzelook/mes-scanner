"use client";

import { useState } from "react";
import LatLongForm from "./latlong-form";
import QRScannerForm from "./qrscanner-form";

const InsertError = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [otherComment, setOtherComment] = useState("");
  const [actions, setActions] = useState<string[]>([]);

  const typeOptions = ["Βλάβη 1", "Βλάβη 2", "Βλάβη 3", "Βλάβη 4"];
  const actionOptions = [
    "Ενέργεια 1",
    "Ενέργεια 2",
    "Ενέργεια 3",
    "Ενέργεια 4",
  ];

  const toggleType = (type: string) => {
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAction = (action: string) => {
    setActions((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action]
    );
  };

  const currentDate = new Date().toLocaleDateString("el-GR");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord = {
      types,
      otherComment,
      actions,
    };
    console.log("Submitting:", newRecord);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Καταχώρηση Βλάβης</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* DATE */}
        <div>
          <label>Ημερομηνία:</label>
          <input value={currentDate} className="border rounded-xl p-2 w-full" />
        </div>

        {/* LAT / LONG */}
        <LatLongForm />

        {/* SERIAL + QR SCANNER + DEVEUI */}
        <QRScannerForm />

        {/* TYPE OPTIONS */}
        <div>
          <label className="font-semibold">Είδος Βλάβης:</label>
          <div className="flex flex-col mt-1">
            {typeOptions.map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={types.includes(type)}
                  onChange={() => toggleType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* OTHER COMMENT */}
        <div>
          <label>Άλλο σχόλιο:</label>
          <input
            type="text"
            value={otherComment}
            onChange={(e) => setOtherComment(e.target.value)}
            className="border rounded-xl p-2 w-full"
          />
        </div>

        {/* ACTIONS */}
        <div>
          <label className="font-semibold">Ενέργειες:</label>
          <div className="flex flex-col mt-1">
            {actionOptions.map((action) => (
              <label key={action} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={actions.includes(action)}
                  onChange={() => toggleAction(action)}
                />
                {action}
              </label>
            ))}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-blue-950 hover:bg-blue-600 text-white px-6 py-2 rounded-xl w-full"
        >
          Καταχώρηση
        </button>
      </form>
    </div>
  );
};

export default InsertError;
