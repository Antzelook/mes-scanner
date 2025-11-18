"use client";

import { useState } from "react";
import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { AiOutlineQrcode } from "react-icons/ai";

interface QRScannerProps {
  onScan: (serial: string, deveui: string) => void;
}

const QRScanner = ({ onScan }: QRScannerProps) => {
  const [open, setOpen] = useState(false);

  const handleScan = (codes: IDetectedBarcode[]) => {
    if (!codes.length) return;

    const text = codes[0].rawValue;
    if (!text) return;

    const [serial, deveui] = text.split("_");
    onScan(serial ?? "", deveui ?? "");
    setOpen(false);
  };

  return (
    <>
      {/* CLICKABLE QR ICON BOX */}
      <div
        onClick={() => setOpen(true)}
        className="w-30 h-30 cursor-pointer flex items-center justify-center mt-6"
      >
        <AiOutlineQrcode size={60} />
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl w-[350px]">
            <Scanner
              onScan={handleScan}
              onError={(err) => console.error(err)}
            />

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full bg-red-600 text-white py-2 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QRScanner;
