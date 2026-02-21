
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleCta = () => {
    window.location.href = '/consultation';
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar onCtaClick={handleCta} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-montserrat font-black text-[#002169] mb-4 uppercase">Post Not Found</h1>
            <Link to="/blog" className="text-[#00C853] font-bold hover:underline">Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const trendingPosts = blogPosts.slice(0, 5);
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onCtaClick={handleCta} />
      
      <main className="flex-grow">
        {/* Article Header */}
        <header className="pt-24 pb-12 md:pt-32 md:pb-20 bg-[#F8F9FA] px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-wrap items-center gap-6 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#002169]/40">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#00C853]" />
                {post.category}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00C853]" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#00C853]" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-black text-[#002169] uppercase leading-tight mb-8 max-w-4xl">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Main Content Area: Grid Layout */}
        <div className="max-w-[1200px] mx-auto px-4 -mt-12 md:-mt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-video overflow-hidden shadow-2xl mb-12"
              >
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </motion.div>

              <article className="pb-16">
                <div 
                  className="prose prose-lg md:prose-xl max-w-none prose-headings:font-montserrat prose-headings:font-black prose-headings:uppercase prose-headings:text-[#002169] prose-p:text-[#002169]/80 prose-p:leading-relaxed prose-li:text-[#002169]/80 prose-strong:text-[#002169] prose-a:text-[#00C853] prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Social Share */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#002169]/40">Share this article:</span>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#002169]/60 hover:bg-[#00C853] hover:text-white transition-all">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#002169]/60 hover:bg-[#00C853] hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#002169]/60 hover:bg-[#00C853] hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00C853] hover:underline">
                    <Share2 className="w-4 h-4" />
                    Copy Link
                  </button>
                </div>
              </article>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Trending Articles (Same as BlogPage) */}
              <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-24">
                <h4 className="font-montserrat font-black text-[#002266] uppercase tracking-widest text-sm mb-6 border-b border-gray-100 pb-4">
                  Trending Articles
                </h4>
                <div className="space-y-6">
                  {trendingPosts.map((trendingPost) => (
                    <Link key={trendingPost.id} to={`/blog/${trendingPost.id}`} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                        <img src={trendingPost.image} alt={trendingPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h5 className="text-[#002266] font-bold text-sm leading-snug group-hover:text-[#00C853] transition-colors">
                        {trendingPost.title}
                      </h5>
                    </Link>
                  ))}
                </div>

                {/* Sidebar CTA */}
                <div className="mt-12 p-6 bg-[#002169] text-white">
                  <h5 className="font-montserrat font-black uppercase text-lg mb-4">Ready to Scale?</h5>
                  <p className="text-white/70 text-sm mb-6">Get a free strategy audit for your business today.</p>
                  <button 
                    onClick={handleCta}
                    className="w-full bg-[#00C853] text-white py-3 font-bold uppercase text-xs hover:bg-[#00B248] transition-all"
                  >
                    Book Free Call
                  </button>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-24 bg-[#F8F9FA] px-4">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-3xl font-montserrat font-black text-[#002169] uppercase mb-12 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((p) => (
                  <Link key={p.id} to={`/blog/${p.id}`} className="bg-white shadow-sm border border-gray-100 group">
                    <div className="aspect-video overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-montserrat font-bold text-[#002169] mb-3 group-hover:text-[#00C853] transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-[#00C853] font-bold text-xs uppercase tracking-widest">Read More »</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="bg-[#002169] text-white py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-black uppercase mb-6">Ready to scale your business?</h2>
            <p className="text-white/70 mb-10 text-lg">
              Our experts are ready to help you implement the strategies you just read about.
            </p>
            <button 
              onClick={handleCta}
              className="bg-[#00C853] text-white px-10 py-5 rounded-none font-montserrat font-black uppercase text-lg hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
            >
              Book a Free Strategy Call
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
