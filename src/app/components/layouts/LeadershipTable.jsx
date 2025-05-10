// src/app/components/sections/LeadershipTable.js
"use client";

const LeadershipTable = ({ data }) => {
  const leftColumn = data.slice(0, 10);
  const rightColumn = data.slice(10);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full  border-0 text-left">
        <thead>
          <tr className="h-[73px] text-base font-semibold">
            {/* Left section headers */}
            <th className="w-[120px] px-2 py-4">No</th>
            <th className="w-[268px] px-2 py-4">{`Nama Ka.UPT Perpustakaan UPN "Veteran" Yogyakarta`}</th>
            <th className="w-[177px] px-2 py-4 mr-[106px]">Tahun Kepemimpinan</th>
            <th className="w-[100px]"></th>
            {/* Right section headers */}
            <th className="w-[120px] px-2 py-4">No</th>
            <th className="w-[268px] px-2 py-4">{`Nama Ka.UPT Perpustakaan UPN "Veteran" Yogyakarta`}</th>
            <th className="w-[177px] px-2 py-4">Tahun Kepemimpinan</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.max(leftColumn.length, rightColumn.length),
          }).map((_, index) => (
            <tr key={index} className="text-sm ">
              {/* Left column data */}
              <td className=" px-2 py-4">{leftColumn[index]?.no || ""}</td>
              <td className=" px-2 py-4">{leftColumn[index]?.name || ""}</td>
              <td className=" px-2 py-4">{leftColumn[index]?.period || ""}</td>
              <td className="w-[100px]"></td>

              {/* Right column data */}
              <td className=" px-2 py-4">{rightColumn[index]?.no || ""}</td>
              <td className=" px-2 py-4">{rightColumn[index]?.name || ""}</td>
              <td className=" px-2 py-4">{rightColumn[index]?.period || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadershipTable;
