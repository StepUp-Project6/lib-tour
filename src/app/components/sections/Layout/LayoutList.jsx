import React from 'react'
import LayoutThumbnail from '../../fragments/LayoutThumbnail'

const LayoutList = () => {
    const layouts = [
        {
            name : "🏛 Lantai 1",
            image : "/images/layout/lantai-1/main.png",
            link : "/layout/lantai-1"
        },
        {
            name : "🏢 Lantai 2",
            image : "/images/layout/lantai-2/main.png",
            link : "/layout/lantai-2"
        },
        {
            name : "🌳 Bagian Luar",
            image : "/images/layout/luar/main.png",
            link : "/layout/bagian-luar"
        },
    ]
  return (
    <div className="flex flex-col px-[70px] gap-[60px] py-20 bg-gradient-to-bl gradient-color-xl">
        {layouts.map((item, index) => (
            <LayoutThumbnail key={index} item={item} />
        ))}
    </div>
  )
}

export default LayoutList