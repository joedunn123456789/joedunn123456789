export default function Store() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Store Module</h1>
      <p className="text-gray-600">Display products or services here.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Product 1</div>
        <div className="p-4 bg-white rounded shadow">Product 2</div>
        <div className="p-4 bg-white rounded shadow">Product 3</div>
      </div>
    </section>
  )
}
