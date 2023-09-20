import React from "react";
import Tasks from "./Tasks";

export default function Page() {
  return (
    <>
      <h1 className="text-5xl font-bold  text-center border-black border-solid border-b">
        Planner
      </h1>
      <Tasks />
    </>
  );
}
