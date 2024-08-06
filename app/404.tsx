import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Preview from "../components/pages/404";

const Index: React.FC = () => {
  return (
    <>
      <Seo pageTitle="Page Not Found" font={undefined} />
      <Preview />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
