export default function Analytics() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-600">Track performance metrics and business insights in real-time.</p>
      </div>

      {/* Date Range Selector */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Today</button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Week</button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Month</button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Quarter</button>
        </div>
        <div className="text-sm text-gray-500">Last updated: Today, 2:30 PM</div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-white rounded-lg shadow border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold mt-1">$284,250</p>
              <p className="text-sm text-green-600 mt-1">↑ 18.2% from last month</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-blue-600">💰</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">New Customers</p>
              <p className="text-2xl font-bold mt-1">1,247</p>
              <p className="text-sm text-green-600 mt-1">↑ 8.5% from last month</p>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600">👥</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-bold mt-1">3.2%</p>
              <p className="text-sm text-red-600 mt-1">↓ 0.4% from last month</p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <span className="text-purple-600">📈</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow border-l-4 border-orange-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Order Value</p>
              <p className="text-2xl font-bold mt-1">$428</p>
              <p className="text-sm text-green-600 mt-1">↑ 12.7% from last month</p>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg">
              <span className="text-orange-600">🛒</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-64 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">📊</div>
              <p>Revenue Chart Visualization</p>
              <p className="text-sm">Line chart showing monthly revenue trends</p>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <span className="text-gray-600">Jan: $42K</span>
            <span className="text-gray-600">Feb: $58K</span>
            <span className="text-gray-600">Mar: $67K</span>
            <span className="text-gray-600">Apr: $71K</span>
            <span className="text-gray-600">May: $89K</span>
            <span className="text-gray-600">Jun: $95K</span>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Organic Search</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-sm font-medium">45%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Direct</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <span className="text-sm font-medium">25%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Social Media</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="text-sm font-medium">15%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Email Campaigns</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <span className="text-sm font-medium">10%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">Referral</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <span className="text-sm font-medium">5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Performing Services</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">Cloud Infrastructure Audit</p>
                <p className="text-sm text-gray-600">24 sales • $60,000 revenue</p>
              </div>
              <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Best Seller</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">ServiceNow Implementation</p>
                <p className="text-sm text-gray-600">18 sales • $144,000 revenue</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Popular</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium">Azure Migration Package</p>
                <p className="text-sm text-gray-600">8 sales • $120,000 revenue</p>
              </div>
              <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">High Value</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">New enterprise sale: Cloud Migration - $45,000</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Website traffic peak: 2,847 visitors</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Conversion rate improved to 3.8%</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">New lead from enterprise client</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
          📥 Export PDF
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
          📊 Export CSV
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          🔄 Refresh Data
        </button>
      </div>
    </section>
  );
}