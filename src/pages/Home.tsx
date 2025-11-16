import { Link } from "react-router-dom";

export default function Home() {
  const modules = [
    {
      title: "Professional Résumé",
      description: "View my complete work history, skills, and certifications",
      icon: "📄",
      link: "/resume",
      stats: "10+ Years Experience",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Knowledge Base",
      description: "Technical guides, best practices, and IT insights",
      icon: "📚",
      link: "/knowledge-base",
      stats: "3 Articles",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "CRM Dashboard",
      description: "Manage leads, contacts, and business opportunities",
      icon: "👥",
      link: "/crm",
      stats: "1,247 Leads",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Services Store",
      description: "Browse and purchase professional IT services",
      icon: "🛒",
      link: "/store",
      stats: "6 Services",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Analytics",
      description: "Track business performance and key metrics",
      icon: "📊",
      link: "/analytics",
      stats: "99.9% Uptime",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const quickStats = [
    { label: "Projects Completed", value: "250+" },
    { label: "Clients Served", value: "45" },
    { label: "Certifications", value: "9" },
    { label: "Systems Managed", value: "500+" }
  ];

  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Joseph Henry Dunn II
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cloud Systems Engineer & Infrastructure Manager
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Welcome to my professional suite. I specialize in cloud architecture, enterprise IT infrastructure, 
          and secure system automation across federal, defense, and corporate environments.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-white rounded-lg shadow border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Modules - FIXED: Changed <a> to <Link> */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Professional Suite</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link
              key={index}
              to={module.link}
              className="block p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${module.color} text-white text-xl`}>
                  {module.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {module.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {module.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-center mt-3 text-blue-600 text-sm font-medium">
                    <span>Explore</span>
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Recent Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-green-600 text-sm font-semibold">CRM</div>
            <p className="text-gray-700 mt-1">24 new leads added this week</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-purple-600 text-sm font-semibold">Store</div>
            <p className="text-gray-700 mt-1">3 new service inquiries</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-orange-600 text-sm font-semibold">Analytics</div>
            <p className="text-gray-700 mt-1">Revenue up 18.2% this month</p>
          </div>
        </div>
      </div>

      {/* Call to Action - FIXED: Changed <a> to <Link> */}
      <div className="text-center space-y-4">
        <div className="inline-flex gap-3">
          <Link
            to="/resume"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View My Résumé
          </Link>
          <Link
            to="/store"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Browse Services
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Ready to discuss your next project? Let's connect!
        </p>
      </div>
    </section>
  );
}