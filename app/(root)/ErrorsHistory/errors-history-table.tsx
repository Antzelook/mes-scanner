"use client";

import React from "react";
// Adjust path as needed
// Adjust path as needed

import { useGetErrorsHistoryQuery } from "@/app/redux/api";
import { ErrorForm } from "@/types";
import Spinner from "@/components/spinner";

const ErrorsHistoryTable = () => {
  const { data, isLoading, isError } = useGetErrorsHistoryQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-10">
        <Spinner />
        <span className="ml-2">Loading records...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center">
        <span>Failed to load history. Please try again later.</span>
      </div>
    );
  }

  const records: ErrorForm[] = data?.data || [];

  return (
    <div className="shadow-md sm:rounded-lg border border-gray-200 w-full m-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th className="p-1">Date</th>
            <th className="p-1">Device (S/N & DevEUI)</th>
            <th className="p-1">Location</th>
            <th className="p-1">Issue Types</th>
            <th className="p-1">Actions Taken</th>
            <th className="p-1">Comment</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-10 text-center text-gray-400">
                No error records found.
              </td>
            </tr>
          ) : (
            records.map((record) => (
              <tr
                key={record.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="whitespace-nowrap">
                  {new Date(record.date).toLocaleDateString()} <br />
                  <span className="text-xs text-gray-400">
                    {new Date(record.date).toLocaleTimeString()}
                  </span>
                </td>
                <td className="">
                  <div className="font-medium text-gray-900">
                    {record.serialNumber}
                  </div>
                  <div className="text-xs text-gray-400">{record.deveui}</div>
                </td>
                <td className="">
                  <div className="flex items-center text-blue-600">
                    {record.latitude.toFixed(4)}, {record.longitude.toFixed(4)}
                  </div>
                </td>
                <td className="">
                  <div className="flex flex-wrap gap-1">
                    {record.types.map((type, i) => (
                      <span
                        key={i}
                        className="bg-red-200 text-red-800 text-[10px] px-2 py-0.5 rounded uppercase font-bold"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="">
                  <ul className="list-disc list-inside">
                    {record.actions.map((action, i) => (
                      <li key={i}>{action}</li>
                    ))}
                  </ul>
                </td>
                <td className="italic text-gray-600 max-w-xs truncate">
                  {record.comment || "—"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ErrorsHistoryTable;
