import React from "react";

export default function page({ params }: { params: { id: string } }) {
  console.log(params);

  return (
    <div>
      course:
      <p>{params.id}</p>
    </div>
  );
}
