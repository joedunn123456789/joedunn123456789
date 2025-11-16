import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import type { ArticleSection } from '../types/article';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/knowledge-base" replace />;
  }

  const renderSection = (section: ArticleSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const level = section.level || 2;
        const headingStyles = {
          2: 'text-3xl font-bold text-gray-900 mt-8 mb-4',
          3: 'text-2xl font-bold text-gray-900 mt-6 mb-3',
          4: 'text-xl font-bold text-gray-900 mt-4 mb-2'
        };
        const className = headingStyles[level as keyof typeof headingStyles] || headingStyles[2];

        if (level === 2) {
          return <h2 key={index} className={className}>{section.content as string}</h2>;
        } else if (level === 3) {
          return <h3 key={index} className={className}>{section.content as string}</h3>;
        } else {
          return <h4 key={index} className={className}>{section.content as string}</h4>;
        }

      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {section.content as string}
          </p>
        );

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700 ml-4">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );

      case 'code':
        return (
          <div key={index} className="mb-6">
            <div className="bg-gray-800 text-gray-100 rounded-t-lg px-4 py-2 text-sm font-mono border-b border-gray-700">
              {section.language || 'code'}
            </div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
              <code className="text-sm font-mono">{section.content as string}</code>
            </pre>
          </div>
        );

      case 'callout':
        const calloutStyles = {
          info: 'bg-blue-50 border-blue-200 text-blue-900',
          warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
          success: 'bg-green-50 border-green-200 text-green-900',
          tip: 'bg-purple-50 border-purple-200 text-purple-900'
        };
        const calloutIcons = {
          info: 'ℹ️',
          warning: '⚠️',
          success: '✅',
          tip: '💡'
        };
        const type = section.calloutType || 'info';
        return (
          <div
            key={index}
            className={`border-l-4 p-4 mb-4 rounded-r-lg ${calloutStyles[type]}`}
          >
            <div className="flex gap-3">
              <span className="text-xl">{calloutIcons[type]}</span>
              <p className="leading-relaxed">{section.content as string}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link to="/knowledge-base" className="text-blue-600 hover:text-blue-800">
          ← Back to Knowledge Base
        </Link>
      </nav>

      {/* Article Header */}
      <article className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
              {article.category}
            </span>
            <span className="text-white/80">•</span>
            <span className="text-white/80">{article.readTime} read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-white/90 leading-relaxed mb-6">
            {article.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-white/80">
            <div>
              <span className="font-semibold text-white">{article.author.name}</span>
              <span className="mx-2">•</span>
              <span>{article.author.title}</span>
            </div>
            <span>•</span>
            <span>{article.datePublished}</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => renderSection(section, index))}
          </div>
        </div>

        {/* Article Footer */}
        <div className="bg-gray-50 p-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 text-sm">Written by</p>
              <p className="font-semibold text-gray-900">{article.author.name}</p>
              <p className="text-sm text-gray-600">{article.author.title}</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/store"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </Link>
              <Link
                to="/knowledge-base"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(related => (
              <Link
                key={related.id}
                to={`/knowledge-base/${related.slug}`}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all hover:scale-105 group"
              >
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  {related.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {related.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {related.description}
                </p>
                <div className="text-sm text-gray-500">
                  {related.readTime} read
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
