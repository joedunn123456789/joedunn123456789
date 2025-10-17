export default function Store() {
  const products = [
    {
      id: 1,
      name: "Cloud Infrastructure Audit",
      description: "Comprehensive assessment of your cloud environment with security and optimization recommendations.",
      price: "$2,500",
      category: "Consulting",
      features: ["Security Review", "Cost Optimization", "Performance Analysis", "Compliance Check"],
      popular: true
    },
    {
      id: 2,
      name: "Azure Migration Package",
      description: "End-to-end migration services from on-premises or other clouds to Microsoft Azure.",
      price: "$15,000",
      category: "Migration",
      features: ["Planning & Assessment", "Data Migration", "Application Refactoring", "30 Days Support"],
      popular: false
    },
    {
      id: 3,
      name: "ServiceNow Implementation",
      description: "Custom ServiceNow deployment tailored to your IT service management needs.",
      price: "$8,000",
      category: "Automation",
      features: ["ITSM Setup", "Workflow Automation", "Custom Reporting", "Team Training"],
      popular: true
    },
    {
      id: 4,
      name: "Cybersecurity Framework",
      description: "NIST SP 800-53 compliance framework implementation and documentation.",
      price: "$5,000",
      category: "Security",
      features: ["Gap Analysis", "Policy Development", "Control Implementation", "Audit Prep"],
      popular: false
    },
    {
      id: 5,
      name: "Salesforce Integration",
      description: "Seamless integration between Salesforce and your existing business systems.",
      price: "$3,500",
      category: "Integration",
      features: ["API Development", "Data Synchronization", "Custom Objects", "User Training"],
      popular: false
    },
    {
      id: 6,
      name: "Disaster Recovery Plan",
      description: "Complete DR strategy with failover testing and documentation.",
      price: "$4,200",
      category: "Infrastructure",
      features: ["Risk Assessment", "Recovery Strategy", "Testing Protocol", "Documentation"],
      popular: true
    }
  ];

  const categories = ["All", "Consulting", "Migration", "Automation", "Security", "Integration", "Infrastructure"];

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Professional Services Store</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enterprise-grade IT solutions and consulting services. Each package includes implementation, documentation, and post-deployment support.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(category => (
          <button
            key={category}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {product.popular && (
              <div className="bg-blue-600 text-white text-sm font-medium text-center py-1">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.popular && (
                  <span className="text-yellow-500">⭐</span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                <div className="text-sm text-gray-500">One-time implementation fee</div>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="w-full mt-2 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Summary (Fixed at bottom) */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div>
            <p className="text-sm font-medium">Cart</p>
            <p className="text-xs text-gray-500">$0.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
