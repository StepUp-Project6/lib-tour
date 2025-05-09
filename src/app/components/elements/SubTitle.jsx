"use client"

import React from 'react'

const SubTitle = ({ title }) => {
  const firstItem = title.find(item => item.first);
  const otherItems = title.filter(item => !item.first);
  const orderedItems = firstItem ? [firstItem, ...otherItems] : title;

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-baseline gap-x-2">
        {orderedItems.map((item, index) => (
          <div key={index} className="inline-flex flex-col text-[28px] font-bold">
            <span className={`relative ${item.color || ""}`}>
              {item.text}
              {item.underline && (
                <img 
                  src="/svg/title-underline.svg" 
                  alt=""
                  className="absolute -bottom-1 left-0 w-full h-1 -mb-1 scale-[3]" 
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubTitle