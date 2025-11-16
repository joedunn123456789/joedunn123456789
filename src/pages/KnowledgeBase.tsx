import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function KnowledgeBase() {
  // Group articles by category
  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Knowledge Base
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Technical guides, best practices, and insights from enterprise IT operations
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search articles..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">{articles.length}</div>
          <div className="text-sm opacity-90">Articles</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">{categories.length}</div>
          <div className="text-sm opacity-90">Categories</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">
            {Array.from(new Set(articles.flatMap(a => a.tags))).length}
          </div>
          <div className="text-sm opacity-90">Topics</div>
        </div>
      </div>

      {/* Featured Article */}
      {articles.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">⭐</span>
            <h2 className="text-xl font-bold text-gray-900">Featured Article</h2>
          </div>
          <Link
            to={`/knowledge-base/${articles[0].slug}`}
            className="block group"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {articles[0].title}
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {articles[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {articles[0].tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{articles[0].datePublished}</span>
                  <span>•</span>
                  <span>{articles[0].readTime} read</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Articles Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/knowledge-base/${article.slug}`}
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{article.datePublished}</span>
                    <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">Need Custom Solutions?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          These guides showcase my expertise in cloud infrastructure and enterprise IT.
          Let's discuss how I can help solve your technical challenges.
        </p>
        <Link
          to="/store"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}
