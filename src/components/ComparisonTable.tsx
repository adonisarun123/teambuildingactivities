import type { ComparisonTable as TableData } from "@/data/landing-types";

export function ComparisonTable({ table }: { table: TableData }) {
  return (
    <div className="container-site mt-12">
      <div className="overflow-x-auto rounded-2xl border border-navy-900/10 shadow-card">
        <table className="w-full min-w-[560px] text-left text-sm">
          <caption className="bg-mist px-5 py-3 text-left text-sm font-semibold text-navy-900">
            {table.caption}
          </caption>
          <thead>
            <tr className="border-b border-navy-900/10 bg-mist text-xs uppercase tracking-wide text-navy-800/70">
              {table.headers.map((h) => (
                <th key={h} className="px-5 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-navy-900/5 last:border-0 hover:bg-electric-50/40">
                {row.map((cell, j) => (
                  <td key={j} className={`px-5 py-3 ${j === 0 ? "font-semibold text-navy-900" : "text-navy-800/80"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
