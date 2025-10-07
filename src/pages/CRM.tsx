export default function CRM() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">CRM Module</h1>
      <p className="text-gray-600">Manage leads, contacts, and opportunities.</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Leads</div>
        <div className="p-4 bg-white rounded shadow">Contacts</div>
        <div className="p-4 bg-white rounded shadow">Opportunities</div>
      </div>
    </section>
  )
}
