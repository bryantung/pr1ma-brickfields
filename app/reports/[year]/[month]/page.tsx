export async function generateStaticParams() {
  return [
    {year: "2023", month: "May"},
    {year: "2023", month: "June"},
    {year: "2023", month: "July"},
    {year: "2023", month: "August"},
    {year: "2023", month: "September"},
    {year: "2023", month: "October"},
    {year: "2023", month: "November"},
    {year: "2023", month: "December"},
    {year: "2024", month: "January"},
    {year: "2024", month: "February"},
  ]
}

export default function MonthlyReports({ params }: { params: { year: string, month: string } }) {

  return (
    <>{params.month} - {params.year}</>
  )
}