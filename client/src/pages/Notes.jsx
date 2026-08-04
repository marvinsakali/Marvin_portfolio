import React from "react";
import { sampleFeatures } from "../lib/features.queries";
import RecordList from "../components/RecordList";

const Notes = () => {
  const notes = sampleFeatures.filter((record) => record.type === "note");
  return(
     <RecordList
      kind="note"
      title="Field Notes"
      intro="Working notes from spatial and fullstack engineering. Each one is pinned to a place — sometimes the subject, sometimes just where it was written."
      records={notes}
    />
  )
};

export default Notes;
