export default function Resume() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Résumé</h1>
      <p className="text-gray-600">Showcase your experience and skills here.</p>
      <div className="space-y-2">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold">Job Title — Company</h2>
          <p className="text-sm text-gray-500">2020 – Present</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Key achievement 1</li>
            <li>Key achievement 2</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
