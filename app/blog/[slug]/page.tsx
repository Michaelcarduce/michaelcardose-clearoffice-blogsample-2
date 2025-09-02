"use client"

import { BarChart3, Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "../../../components/navigation/Navigation"

const blogPosts = {
  "future-of-business-automation": {
    title: "The Future of Business Automation",
    excerpt:
      "Discover how AI-powered automation is transforming enterprise operations and driving unprecedented efficiency gains.",
    category: "Automation",
    readTime: "5 min read",
    date: "March 15, 2024",
    author: "Sarah Chen",
    authorRole: "Head of AI Strategy",
    content: `
      <p>The landscape of business automation is undergoing a revolutionary transformation. As we stand at the intersection of artificial intelligence and enterprise operations, we're witnessing unprecedented changes that are reshaping how organizations function at their core.</p>
      
      <h2>The Evolution of Automation</h2>
      <p>Traditional automation focused on simple, rule-based tasks. Today's AI-powered automation systems can handle complex decision-making processes, adapt to changing conditions, and learn from experience. This evolution represents a fundamental shift from reactive to proactive business operations.</p>
      
      <h3>Key Areas of Impact</h3>
      <p>Modern automation is transforming several critical business areas:</p>
      <ul>
        <li><strong>Customer Service:</strong> AI chatbots and virtual assistants now handle 80% of routine customer inquiries, freeing human agents to focus on complex problem-solving.</li>
        <li><strong>Supply Chain Management:</strong> Predictive analytics and automated inventory management reduce costs by up to 30% while improving delivery times.</li>
        <li><strong>Financial Operations:</strong> Automated invoice processing and expense management eliminate manual errors and reduce processing time by 75%.</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successful automation implementation requires a strategic approach. Organizations must identify high-impact processes, ensure proper change management, and maintain a focus on employee development and reskilling.</p>
      
      <p>The future belongs to organizations that can seamlessly blend human creativity with automated efficiency. By embracing this transformation, businesses can achieve new levels of productivity and innovation.</p>
    `,
    gradient: "from-blue-100 to-purple-100",
    iconColor: "text-blue-600",
  },
  "ai-analytics-beyond-traditional-metrics": {
    title: "AI Analytics: Beyond Traditional Metrics",
    excerpt:
      "Explore advanced analytics techniques that leverage artificial intelligence to uncover hidden business insights.",
    category: "Analytics",
    readTime: "7 min read",
    date: "March 12, 2024",
    author: "Michael Rodriguez",
    authorRole: "Chief Data Officer",
    content: `
      <p>The era of traditional business metrics is giving way to a new paradigm of AI-driven analytics that can uncover insights previously hidden in complex data patterns. This transformation is enabling organizations to make more informed decisions and predict future trends with unprecedented accuracy.</p>
      
      <h2>Beyond Surface-Level Metrics</h2>
      <p>Traditional analytics often focused on historical data and basic KPIs. AI analytics goes deeper, identifying correlations, predicting outcomes, and providing actionable insights that drive strategic decision-making.</p>
      
      <h3>Advanced Analytics Capabilities</h3>
      <p>Modern AI analytics platforms offer several breakthrough capabilities:</p>
      <ul>
        <li><strong>Predictive Modeling:</strong> Machine learning algorithms analyze historical patterns to forecast future trends and behaviors.</li>
        <li><strong>Anomaly Detection:</strong> AI systems automatically identify unusual patterns that might indicate opportunities or risks.</li>
        <li><strong>Natural Language Processing:</strong> Extract insights from unstructured data sources like customer feedback and social media.</li>
        <li><strong>Real-time Analysis:</strong> Process and analyze data streams in real-time for immediate decision-making.</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>Organizations across industries are leveraging AI analytics to transform their operations. From personalized marketing campaigns to predictive maintenance, the applications are virtually limitless.</p>
      
      <p>The key to success lies in combining domain expertise with advanced analytics capabilities, creating a synergy that drives meaningful business outcomes.</p>
    `,
    gradient: "from-purple-100 to-pink-100",
    iconColor: "text-purple-600",
  },
  "enterprise-digital-transformation": {
    title: "Enterprise Digital Transformation",
    excerpt:
      "Learn how leading companies are successfully implementing comprehensive digital transformation strategies.",
    category: "Digital Strategy",
    readTime: "6 min read",
    date: "March 10, 2024",
    author: "Jennifer Park",
    authorRole: "Digital Transformation Lead",
    content: `
      <p>Digital transformation has evolved from a buzzword to a business imperative. Organizations that successfully navigate this transformation are not just surviving—they're thriving in an increasingly digital world.</p>
      
      <h2>The Digital Imperative</h2>
      <p>Today's digital transformation goes beyond simply adopting new technologies. It requires a fundamental rethinking of business processes, customer experiences, and organizational culture.</p>
      
      <h3>Core Components of Successful Transformation</h3>
      <p>Leading organizations focus on several key areas:</p>
      <ul>
        <li><strong>Cloud Infrastructure:</strong> Scalable, flexible technology foundations that support rapid innovation and growth.</li>
        <li><strong>Data Strategy:</strong> Comprehensive approaches to data collection, analysis, and utilization across all business functions.</li>
        <li><strong>Customer Experience:</strong> Digital-first approaches to customer interaction and service delivery.</li>
        <li><strong>Workforce Development:</strong> Reskilling and upskilling programs to prepare employees for digital-first operations.</li>
      </ul>
      
      <h2>Overcoming Common Challenges</h2>
      <p>Digital transformation initiatives often face resistance to change, legacy system constraints, and skills gaps. Successful organizations address these challenges through strong leadership, clear communication, and phased implementation approaches.</p>
      
      <p>The organizations that emerge as leaders in the digital age will be those that view transformation not as a destination, but as an ongoing journey of innovation and adaptation.</p>
    `,
    gradient: "from-green-100 to-blue-100",
    iconColor: "text-green-600",
  },
  "revolutionizing-business-intelligence": {
    title: "Revolutionizing Business Intelligence",
    excerpt:
      "Dive deep into the latest trends in business intelligence and discover how AI-driven insights are reshaping decision-making processes.",
    category: "Business Intelligence",
    readTime: "8 min read",
    date: "March 8, 2024",
    author: "David Kim",
    authorRole: "VP of Business Intelligence",
    content: `
      <p>Business intelligence is undergoing a fundamental transformation. The integration of artificial intelligence and machine learning technologies is creating new possibilities for data analysis, insight generation, and strategic decision-making that were unimaginable just a few years ago.</p>
      
      <h2>The New Era of Business Intelligence</h2>
      <p>Traditional BI tools provided historical reporting and basic analytics. Today's AI-powered BI platforms offer predictive insights, automated analysis, and real-time decision support that transforms how organizations operate.</p>
      
      <h3>Revolutionary Capabilities</h3>
      <p>Modern business intelligence platforms deliver unprecedented capabilities:</p>
      <ul>
        <li><strong>Automated Insights:</strong> AI algorithms automatically identify trends, patterns, and anomalies in business data without human intervention.</li>
        <li><strong>Natural Language Queries:</strong> Business users can ask questions in plain English and receive instant, accurate answers from their data.</li>
        <li><strong>Predictive Analytics:</strong> Advanced models forecast future business outcomes with remarkable accuracy.</li>
        <li><strong>Real-time Decision Support:</strong> Instant alerts and recommendations enable immediate response to changing business conditions.</li>
      </ul>
      
      <h2>Transforming Decision-Making</h2>
      <p>The impact extends beyond technology to fundamentally change how organizations make decisions. Data-driven insights are becoming accessible to every employee, democratizing analytics and enabling faster, more informed decision-making at all levels.</p>
      
      <p>Organizations that embrace this revolution in business intelligence will gain significant competitive advantages through improved agility, better customer understanding, and more effective resource allocation.</p>
    `,
    gradient: "from-orange-100 to-red-100",
    iconColor: "text-orange-600",
  },
}

export default function BlogPostPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const params = useParams()
  const slug = params.slug as string

  const post = blogPosts[slug as keyof typeof blogPosts]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  if (!post) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "rgba(245, 245, 247, 1)" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgba(245, 245, 247, 1)" }}>
      {/* Add the Navigation component */}
      <Navigation variant="blog" ctaText="Contact Us" transparent={false} />

      {/* Blog Header */}
      <div className="bg-blue-50 pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Category and Date */}
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-blue-600">{post.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

          {/* Author */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                {post.author.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">{post.authorRole}</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <button className="p-2 rounded-full bg-white shadow-sm text-gray-700 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-sm text-gray-700 hover:text-blue-600 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <Link key={key} href={`/blog/${key}`}>
                  <article className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div
                      className={`w-full h-48 bg-gradient-to-br ${relatedPost.gradient} rounded-xl mb-4 flex items-center justify-center`}
                    >
                      <BarChart3 className={`w-12 h-12 ${relatedPost.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-balance">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{relatedPost.readTime}</span>
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
    </div>
  )
}
