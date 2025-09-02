"use client"

import { BarChart3, ChevronDown, Calendar, Clock, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Navigation } from "../../components/navigation/Navigation"

export default function BlogListingPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
  
  const blogPosts = [
    {
      id: 1,
      slug: "future-of-business-automation",
      title: "The Future of Business Automation",
      excerpt:
        "Discover how AI-powered automation is transforming enterprise operations and driving unprecedented efficiency gains across industries.",
      category: "Automation",
      readTime: "5 min read",
      date: "March 15, 2024",
      featured: true,
      gradient: "from-blue-100 to-purple-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      slug: "ai-analytics-beyond-traditional-metrics",
      title: "AI Analytics: Beyond Traditional Metrics",
      excerpt:
        "Explore advanced analytics techniques that leverage artificial intelligence to uncover hidden business insights and drive data-driven decisions.",
      category: "Analytics",
      readTime: "7 min read",
      date: "March 12, 2024",
      featured: false,
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      slug: "enterprise-digital-transformation",
      title: "Enterprise Digital Transformation",
      excerpt:
        "Learn how leading companies are successfully implementing comprehensive digital transformation strategies in the modern business landscape.",
      category: "Digital Strategy",
      readTime: "6 min read",
      date: "March 10, 2024",
      featured: false,
      gradient: "from-green-100 to-blue-100",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      slug: "revolutionizing-business-intelligence",
      title: "Revolutionizing Business Intelligence",
      excerpt:
        "Dive deep into the latest trends in business intelligence and discover how AI-driven insights are reshaping decision-making processes.",
      category: "Business Intelligence",
      readTime: "8 min read",
      date: "March 8, 2024",
      featured: true,
      gradient: "from-orange-100 to-red-100",
      iconColor: "text-orange-600",
    },
    {
      id: 5,
      slug: "machine-learning-enterprise-operations",
      title: "Machine Learning in Enterprise Operations",
      excerpt:
        "Understanding how machine learning algorithms are optimizing business processes and creating competitive advantages.",
      category: "Machine Learning",
      readTime: "9 min read",
      date: "March 5, 2024",
      featured: false,
      gradient: "from-teal-100 to-cyan-100",
      iconColor: "text-teal-600",
    },
    {
      id: 6,
      slug: "data-driven-decision-making-framework",
      title: "Data-Driven Decision Making Framework",
      excerpt:
        "A comprehensive guide to building robust data-driven decision making processes that scale with your organization.",
      category: "Data Strategy",
      readTime: "6 min read",
      date: "March 3, 2024",
      featured: false,
      gradient: "from-indigo-100 to-purple-100",
      iconColor: "text-indigo-600",
    },
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgba(245, 245, 247, 1)" }}>
      {/* Add the Navigation component */}
      <Navigation variant="blog" ctaText="Contact Us" transparent={false} />
      
      {/* Blog Header */}
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 mb-8">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Blog</span>
          </div>

          <div className="max-w-4xl mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-6">
              <div className="text-balance">Insights &</div>
              <div className="text-balance">Innovation</div>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore the latest trends in automation, artificial intelligence, and analytics that are shaping the
              future of enterprise technology.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div
                    className={`w-full h-64 bg-gradient-to-br ${post.gradient} rounded-2xl mb-6 flex items-center justify-center`}
                  >
                    <BarChart3 className={`w-16 h-16 ${post.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-balance">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${post.gradient} rounded-xl mb-4 flex items-center justify-center`}
                  >
                    <BarChart3 className={`w-12 h-12 ${post.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-balance">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      Read More →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white/20 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 text-balance">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights on automation, AI, and analytics delivered directly to your inbox. Join thousands
              of industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                className="cta-button"
                style={{
                  background: "linear-gradient(135deg, #0071e3 40%, #764ba2 100%)",
                  color: "white",
                  padding: "12px 28px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
