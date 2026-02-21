
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCta = () => {
    window.location.href = '/consultation';
  };

  const trendingPosts = blogPosts.slice(0, 5);
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Get all unique categories
  const categoryNames = Array.from(new Set(blogPosts.map(p => p.category)));
  
  const categories = categoryNames.map(name => ({
    name,
    posts: blogPosts.filter(p => p.category === name)
  }));

  const popularPosts = blogPosts.slice(11, 14);

  const featuredPost = blogPosts[11]; // "The Future of Performance Marketing: AI-Driven Growth"

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Navbar onCtaClick={handleCta} />
      
      <main className="flex-grow py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Featured + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Featured Post */}
            <Link to={`/blog/${featuredPost.id}`} className="lg:col-span-2 group cursor-pointer">
              <div className="relative overflow-hidden aspect-video mb-6">
                <img 
                  src={featuredPost.image} 
                  alt="Featured Post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <p className="text-[#00C853] font-bold uppercase tracking-widest text-xs mb-2">Featured Article</p>
                  <h2 className="text-white text-3xl md:text-4xl font-montserrat font-black uppercase leading-tight">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>
              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-montserrat font-bold text-[#002266] mb-4">{featuredPost.title}</h3>
                <p className="text-[#002266]/70 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <span className="text-[#00C853] font-bold hover:underline">Read More »</span>
              </div>
            </Link>

            {/* Sidebar: Search + Trending */}
            <div className="space-y-8">
              {/* Search */}
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="flex-grow border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#00C853]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-[#00C853] text-white px-6 py-3 font-bold hover:bg-[#00B248] transition-colors">
                  Search
                </button>
              </div>

              {/* Trending Articles */}
              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h4 className="font-montserrat font-black text-[#002266] uppercase tracking-widest text-sm mb-6 border-b border-gray-100 pb-4">
                  Trending Articles
                </h4>
                <div className="space-y-6">
                  {trendingPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h5 className="text-[#002266] font-bold text-sm leading-snug group-hover:text-[#00C853] transition-colors">
                        {post.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category Sections */}
          {categories.map((category, idx) => {
            const isExpanded = expandedCategories[category.name];
            const displayedPosts = isExpanded ? category.posts : category.posts.slice(0, 3);
            const hasMore = category.posts.length > 3;
            
            return (
              <section key={idx} className="mb-20">
                <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                  <h2 className="text-3xl font-montserrat font-black text-[#002266] uppercase tracking-tight">
                    {category.name}
                  </h2>
                  {hasMore && (
                    <button 
                      onClick={() => toggleCategory(category.name)}
                      className="text-[#00C853] font-bold text-sm hover:underline"
                    >
                      {isExpanded ? `Show Less ${category.name} Posts ↑` : `See All ${category.name} Posts →`}
                    </button>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {displayedPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="bg-white shadow-sm border border-gray-100 group cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-montserrat font-bold text-[#002266] mb-3 group-hover:text-[#00C853] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#002266]/70 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <span className="text-[#00C853] font-bold text-xs hover:underline">Read More »</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Most Popular Posts */}
          <section className="mb-20">
            <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-montserrat font-black text-[#002266] uppercase tracking-tight">
                Most Popular Posts
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {popularPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="bg-white shadow-sm border border-gray-100 group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-montserrat font-bold text-[#002266] mb-3 group-hover:text-[#00C853] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#002266]/70 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-[#00C853] font-bold text-xs hover:underline">Read More »</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section className="bg-[#002266] text-white p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C853]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C853]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-black uppercase mb-6 leading-tight">
                  Need help with your<br />digital marketing?
                </h2>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00C853] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold">AI Automation & Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00C853] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold">Paid Advertising Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00C853] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold">TikTok Account Management</span>
                  </div>
                </div>
                <button 
                  onClick={handleCta}
                  className="bg-[#00C853] text-white px-10 py-5 rounded-none font-montserrat font-black uppercase text-lg flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
                >
                  Start Scaling Today
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="mt-6 text-xs text-white/50 font-bold uppercase tracking-widest">30 Days Money Back Guarantee</p>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                  <p className="text-xl font-montserrat font-bold italic text-white/90 leading-relaxed">
                    "Growllo gives hassle-free services to protect and promote your brand reputation through cutting-edge AI and performance marketing."
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
