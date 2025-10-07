export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="text-gray-700">
        Welcome to your modular suite. Use the navigation above to explore each section.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">Résumé Preview</div>
        <div className="p-4 bg-white rounded shadow">CRM Dashboard</div>
        <div className="p-4 bg-white rounded shadow">Storefront</div>
        <div className="p-4 bg-white rounded shadow">Analytics</div>
      </div>
    </section>
  )
}
