"use client";

import { BarChart3 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/navigation/Navigation";

export default function BlogPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgba(245, 245, 247, 1)" }}>
      {/* Navigation */}
      <Navigation variant="home" ctaText="Book A Call" transparent={true} />

      {/* Blog Breadcrumb */}
      {/* <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">Blog</span>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <main className="px-6 py-16 h-[90vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="max-w-4xl relative">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-tight mb-8">
              <div className="text-balance">Automation</div>
              <div className="text-balance">Artificial Intelligence</div>
              <div className="text-balance">Analytics</div>
            </h1>

            <div className="flex md:absolute bottom-14 right-14 justify-start md:justify-end mt-0 md:mt-12">
              <button className="bg-[#0071e3] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                EMPOWER YOUR ENTERPRISE
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Blog Content Section */}
      {/* <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/future-of-business-automation">
              <article className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Future of Business Automation
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Discover how AI-powered automation is transforming enterprise
                  operations and driving unprecedented efficiency gains.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5 min read</span>
                  <div className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-analytics-beyond-traditional-metrics">
              <article className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI Analytics: Beyond Traditional Metrics
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Explore advanced analytics techniques that leverage artificial
                  intelligence to uncover hidden business insights.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">7 min read</span>
                  <div className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/enterprise-digital-transformation">
              <article className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise Digital Transformation
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Learn how leading companies are successfully implementing
                  comprehensive digital transformation strategies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">6 min read</span>
                  <div className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Featured Article Section */}
      {/* <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 text-balance">
                  Revolutionizing Business Intelligence
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Dive deep into the latest trends in business intelligence and
                  discover how AI-driven insights are reshaping decision-making
                  processes across industries.
                </p>
                <Link href="/blog/revolutionizing-business-intelligence">
                  <button
                    className="cta-button"
                    style={{
                      background:
                        "linear-gradient(135deg, #0071e3 40%, #764ba2 100%)",
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
                    }}>
                    Read Full Article
                  </button>
                </Link>
              </div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
