"use client";

import { useGetErrorsHistoryQuery } from "@/app/redux/api";
import { ErrorForm } from "@/types";
import Spinner from "@/components/spinner";

const HistoryTable = () => {
  const { data, isLoading, isError } = useGetErrorsHistoryQuery([]);
  const records: ErrorForm[] = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center p-20">
        <Spinner />
        <span className="ml-2 mt-4 text-gray-500 animate-pulse">
          Loading records...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="m-4 bg-red-50 text-red-700 p-10 rounded-lg flex flex-col items-center border border-red-200">
        <span className="font-bold">Oops! Something went wrong.</span>
        <span className="text-sm">
          Failed to load history. Please try again later.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full p-2 md:p-5">
      {/* MOBILE VIEW: Cards (Visible on small screens, hidden on md+) */}
      <div className="md:hidden flex flex-col space-y-4">
        {records.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            No error records found.
          </p>
        ) : (
          records.map((record) => (
            <div
              key={record.id}
              className="bg-white border-gray-200 rounded-xl p-4 shadow-xl"
            >
              <div className="flex justify-between items-start py-2 ">
                <div>
                  <div className="text-xs font-bold text-gray-400">DATE</div>
                  <div className="text-sm font-medium">
                    {new Date(record.date).toLocaleDateString()}
                    <span className="ml-2 text-gray-400 font-normal">
                      {new Date(record.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-400">
                    LOCATION
                  </div>
                  <div className="text-xs font-mono text-blue-600">
                    {record.latitude.toFixed(4)}, {record.longitude.toFixed(4)}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-gray-900 font-bold">
                  {record.serialNumber}
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  {record.deveui}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 ">
                    ISSUES
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {record.types.map((type, i) => (
                      <span
                        key={i}
                        className="bg-red-100 text-red-700 text-[9px] px-2 py-0.5 rounded-xl font-bold border border-red-200"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400">
                    ACTIONS
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {record.actions.map((action, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-xl font-bold border border-green-200"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {record.comment && (
                <div className="mt-3 pt-3">
                  <span className="text-[10px] font-bold text-gray-400 italic">
                    COMMENT
                  </span>
                  <p className="text-sm text-gray-600 italic leading-tight">
                    {record.comment}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* DESKTOP VIEW: Table (Hidden on small screens, visible on md+) */}
      <div className="hidden md:block overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Device (S/N & DevEUI)</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Issue Types</th>
              <th className="px-4 py-3">Actions Taken</th>
              <th className="px-4 py-3">Comment</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  No error records found.
                </td>
              </tr>
            ) : (
              records.map((record) => (
                <tr
                  key={record.id}
                  className="bg-white border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-medium text-gray-700">
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(record.date).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">
                      {record.serialNumber}
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {record.deveui}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-blue-600 text-xs">
                    {record.latitude.toFixed(4)}, {record.longitude.toFixed(4)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {record.types.map((type, i) => (
                        <span
                          key={i}
                          className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded uppercase font-bold border border-red-200"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {record.actions.map((action, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded uppercase font-bold border border-green-200"
                        >
                          {action}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td
                    className="px-4 py-3 italic text-gray-600 max-w-[200px] truncate"
                    title={record.comment || ""}
                  >
                    {record.comment || "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
