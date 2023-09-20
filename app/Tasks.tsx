import React from "react";
import { data } from "./9_10_23.js";

export default function Tasks() {
  return (
    <div className="max-w-xl mx-auto flex flex-col">
      <h2 className="text-md text-center">This week tasks</h2>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Assigned</th>
                </tr>
              </thead>
              <tbody>
                {data().descriptionAssignedList.map((obj, i) => (
                  <tr key={i}>
                    <td>{obj.description}</td>
                    <td>{obj.assigned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
