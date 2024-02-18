
export default function MonthlyReports({ params }: { params: { year: string, month: string } }) {

  return (
    <>{params.month} - {params.year}</>
  )
}