import React from "react";
import { useParams } from "react-router-dom";

export default function ResearcherDetail() {
  let { id } = useParams();

  return (
    <div>
      <h1>Researcher detail {id}</h1>
    </div>
  );
}
