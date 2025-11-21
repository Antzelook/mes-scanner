"use client";

import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import toast from "react-hot-toast";
import Spinner from "@/components/spinner";
import QRScanner from "@/components/qrscanner";
import { FiMapPin } from "react-icons/fi";


const ErrorForm = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [locationRequested, setLocationRequested] = useState(false);
  const [serial, setSerial] = useState("");
  const [deveui, setDeveui] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [otherComment, setOtherComment] = useState("");
  const [actions, setActions] = useState<string[]>([]);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const handleLocationClick = () => {
    if (!coords) toast.error("Η τοποθεσία δεν είναι ακόμα έτοιμη...");
    setLocationRequested(true);
  };

  useEffect(() => {
    if (isGeolocationAvailable === false) {
      toast.error("Το browser δεν υποστηρίζει τοποθεσία.");
    }
    if (isGeolocationEnabled === false) {
      toast.error("Η τοποθεσία είναι απενεργοποιημένη στη συσκευή.");
    }
  }, [isGeolocationAvailable, isGeolocationEnabled]);

  useEffect(() => {
    if (locationRequested && coords) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLat(coords.latitude.toString());
      setLong(coords.longitude.toString());
      toast.success("Η τοποθεσία ενημερώθηκε!");
      setLocationRequested(false);
    }
  }, [coords, locationRequested]);

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
      date: currentDate,
      latitude: lat,
      longitude: long,
      serial,
      deveui,
      types,
      actions,
      otherComment,
    };

    console.log("Submitting:", newRecord);
    toast.success("Η βλάβη καταχωρήθηκε!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Καταχώρηση Βλάβης</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* DATE */}
        <div>
          <label className="font-semibold">Ημερομηνία:</label>
          <input
            value={currentDate}
            readOnly
            className="border rounded-xl p-2 w-full"
          />
        </div>

        {/* LAT / LONG */}
        <div className="flex gap-4 items-end mt-4">
          <div className="flex flex-col flex-1 gap-3">
            <div>
              <label className="font-semibold">Latitude:</label>
              <input
                type="text"
                value={lat}
                readOnly
                placeholder="Πατήστε το κουμπί τοποθεσίας →"
                className="border rounded-xl p-2 w-full"
              />
            </div>

            <div>
              <label className="font-semibold">Longitude:</label>
              <input
                type="text"
                value={long}
                readOnly
                placeholder="Πατήστε το κουμπί τοποθεσίας →"
                className="border rounded-xl p-2 w-full"
              />
            </div>
          </div>

          {/* LOCATION BUTTON */}
          <button
            onClick={handleLocationClick}
            type="button"
            className="w-30 h-30 flex items-center justify-center"
          >
            {!coords ? <Spinner /> : <FiMapPin size={40} />}
          </button>
        </div>

        {/* QR SCANNER */}
        <div className="flex gap-6 items-start">
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

          <div className="w-30 h-30">
            <QRScanner
              onScan={(serial: string, deveui: string) => {
                setSerial(serial);
                setDeveui(deveui);
              }}
            />
          </div>
        </div>

        {/* TYPES */}
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

        {/* COMMENT */}
        <div>
          <label className="font-semibold">Άλλο σχόλιο:</label>
          <textarea
            value={otherComment}
            onChange={(e) => setOtherComment(e.target.value)}
            className="border rounded-xl p-2 w-full h-25"
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

export default ErrorForm;
