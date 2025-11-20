"use client";

import QRScanner from "@/components/qrscanner";
import { useState } from "react";

const QRScannerForm = () => {
  const [serial, setSerial] = useState("");
  const [deveui, setDeveui] = useState("");

  return (
    <div className="flex gap-6 items-start ">
      {/* Left side – inputs */}
      <div className="flex-1 space-y-4">
        <div>
          <label className="font-semibold">Serial Number:</label>
          <input
            type="text"
            placeholder="Πατήστε για σάρωση →"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            className="border rounded-xl p-1 w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Deveui:</label>
          <input
            type="text"
            placeholder="Πατήστε για σάρωση →"
            value={deveui}
            onChange={(e) => setDeveui(e.target.value)}
            className="border rounded-xl p-1 w-full"
          />
        </div>
      </div>
      {/* Right side – QR scanner box */}
      <div className="w-30 h-30 ">
        <QRScanner
          onScan={(serial: string, deveui: string) => {
            setSerial(serial);
            setDeveui(deveui);
          }}
        />
      </div>
    </div>
  );
};

export default QRScannerForm;
