// src/app/layout/[layoutId]/page.js
import LayoutContent from "@/app/components/sections/Layout/LayoutContent";
import { dataLayout } from "@/app/utils/dataLayout";

const LayoutPage = ({ params }) => {
  const currentLayout = dataLayout.find((layout) =>
    layout.title.toLowerCase().includes(params.layoutId.replace("-", " "))
  );

  if (!currentLayout) {
    return <div>Layout not found</div>;
  }

  return (
    <>
      <LayoutContent title={currentLayout.title} images={currentLayout.image} />
    </>
  );
};

export default LayoutPage;
