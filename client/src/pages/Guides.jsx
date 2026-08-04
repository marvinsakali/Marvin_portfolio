
import RecordList from "../components/RecordList";
import { sampleFeatures } from "../lib/features.queries";

const Guides = () => {
  const guides = sampleFeatures.filter(
    (record) => record.type === "guide"
  );

  return (
    <RecordList
      kind="guide"
      title="Field Guides"
      intro="Tutorials that assume you have a terminal open and a database to point at. Everything here is something I had to work out once."
      records={guides}
    />
  );
};

export default Guides;