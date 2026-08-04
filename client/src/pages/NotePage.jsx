import { useParams } from "react-router-dom";
import { sampleFeatures } from "../lib/features.queries";
import ArticlePage from "../components/ArticlePage";


const NotePage = () => {
  const { slug } = useParams();

  const record = sampleFeatures.find(
    (item) => item.type === "note" && item.slug === slug
  );

  if (!record) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-3xl font-bold">Guide not found</h1>
        <p className="mt-2 text-muted-foreground">
          The guide you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return <ArticlePage record={record} />;
};

export default NotePage;