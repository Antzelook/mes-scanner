"use client";

import Spinner from "@/components/spinner";
import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import toast from "react-hot-toast";
import { FiMapPin } from "react-icons/fi";

const LatLongForm = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [locationRequested, setLocationRequested] = useState(false);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const handleLocationClick = () => {
    if (!coords) {
      toast.error("Η τοποθεσία δεν είναι ακόμα έτοιμη...");
    }
    setLocationRequested(true);
  };

  useEffect(() => {
    if (isGeolocationAvailable === false) {
      toast.error("Το browser δεν υποστηρίζει τοποθεσία.");
    }
  }, [isGeolocationAvailable]);

  useEffect(() => {
    if (isGeolocationEnabled === false) {
      toast.error("Η τοποθεσία είναι απενεργοποιημένη στη συσκευή.");
    }
  }, [isGeolocationEnabled]);

  useEffect(() => {
    if (locationRequested && coords) {
      setLat(coords.latitude.toString());
      setLong(coords.longitude.toString());
      toast.success("Η τοποθεσία ενημερώθηκε!");
    }
  }, [locationRequested, coords]);

  return (
    <div className="flex gap-4 items-end mt-4">
      {/* LEFT SIDE — LAT ABOVE LONG */}
      <div className="flex flex-col flex-1 gap-3">
        <div>
          <label>Latitude:</label>
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            placeholder="Πατήστε το κουμπί τοποθεσίας →"
            className="border rounded-xl p-2 w-full"
          />
        </div>

        <div>
          <label>Longitude:</label>
          <input
            type="text"
            value={long}
            onChange={(e) => setLong(e.target.value)}
            placeholder="Πατήστε το κουμπί τοποθεσίας →"
            className="border rounded-xl p-2 w-full"
          />
        </div>
      </div>

      {/* RIGHT SIDE — LOCATION BOX SAME SIZE AS QR BOX */}
      <button
        onClick={handleLocationClick}
        className="w-30 h-30 flex items-center justify-center"
      >
        {!coords ? <Spinner /> : <FiMapPin size={40} />}
      </button>
    </div>
  );
};

export default LatLongForm;
