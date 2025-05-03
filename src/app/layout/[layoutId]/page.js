"use client"

import React from "react";
import { useParams } from "next/navigation";
const LayoutId = () => {
  const { layoutId } = useParams();
  return <div>LayoutId {layoutId}</div>;
};

export default LayoutId;
