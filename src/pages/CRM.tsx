export default function CRM() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">CRM Dashboard</h1>
        <p className="text-gray-600">Manage leads, contacts, and opportunities with real-time insights.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
          <p className="text-2xl font-bold">1,247</p>
          <p className="text-sm text-green-600">↑ 12% this month</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-sm font-medium text-gray-500">Active Contacts</h3>
          <p className="text-2xl font-bold">856</p>
          <p className="text-sm text-green-600">↑ 8% this month</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow border-l-4 border-purple-500">
          <h3 className="text-sm font-medium text-gray-500">Open Opportunities</h3>
          <p className="text-2xl font-bold">42</p>
          <p className="text-sm text-green-600">↑ 5% this month</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow border-l-4 border-orange-500">
          <h3 className="text-sm font-medium text-gray-500">Pipeline Value</h3>
          <p className="text-2xl font-bold">$2.8M</p>
          <p className="text-sm text-green-600">↑ 15% this month</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            + Add Lead
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            + Add Contact
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            + Create Opportunity
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Import Data
          </button>
        </div>
      </div>

      {/* Main CRM Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads Card */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Leads</h2>
            <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">24 New</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Tech Solutions Inc.</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Qualifying</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
              <div>
                <p className="font-medium">Mike Chen</p>
                <p className="text-sm text-gray-600">Global Enterprises</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Contacted</span>
            </div>
          </div>
          <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Leads →
          </button>
        </div>

        {/* Contacts Card */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Contacts</h2>
            <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">856 Total</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded">
              <div>
                <p className="font-medium">Lisa Rodriguez</p>
                <p className="text-sm text-gray-600">lisa@innovationlabs.com</p>
              </div>
              <span className="text-xs text-gray-500">Last contact: 2d ago</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded">
              <div>
                <p className="font-medium">David Kim</p>
                <p className="text-sm text-gray-600">david@techcorp.com</p>
              </div>
              <span className="text-xs text-gray-500">Last contact: 1h ago</span>
            </div>
          </div>
          <button className="w-full mt-4 text-green-600 hover:text-green-800 text-sm font-medium">
            View All Contacts →
          </button>
        </div>

        {/* Opportunities Card */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Opportunities</h2>
            <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">$2.8M Pipeline</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded">
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium">Enterprise Cloud Migration</p>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Proposal</span>
              </div>
              <p className="text-sm text-gray-600">Global Tech Corp</p>
              <p className="text-sm font-semibold text-purple-700">$450,000</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium">Security Suite Implementation</p>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Negotiation</span>
              </div>
              <p className="text-sm text-gray-600">Financial Services Ltd</p>
              <p className="text-sm font-semibold text-purple-700">$320,000</p>
            </div>
          </div>
          <button className="w-full mt-4 text-purple-600 hover:text-purple-800 text-sm font-medium">
            View All Opportunities →
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <p className="text-sm">New lead added: <span className="font-medium">Sarah Johnson</span></p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm">Opportunity stage changed: <span className="font-medium">Enterprise Cloud Migration</span></p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div>
              <p className="text-sm">Contact updated: <span className="font-medium">David Kim</span></p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
