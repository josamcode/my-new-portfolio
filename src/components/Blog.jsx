import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  BookOpen,
  TrendingUp,
  Eye,
  Heart,
  Share2,
} from "lucide-react";

const Blog = ({ data }) => {
  const [visiblePosts, setVisiblePosts] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPost, setHoveredPost] = useState(null);
  const sectionRef = useRef(null);
  const postRefs = useRef([]);

  const mockData = data

  const blogData =
    data && data.posts && data.posts.length > 0
      ? {
        title: data.title || mockData.title,
        posts: data.posts.map((post, index) => ({
          ...post,
          author: post.author || mockData.posts[index]?.author || "Jo Sam",
          date:
            post.date ||
            mockData.posts[index]?.date ||
            new Date().toISOString().split("T")[0],
          readTime:
            post.readTime || mockData.posts[index]?.readTime || "5 min read",
          category:
            post.category || mockData.posts[index]?.category || "General",
          tags: post.tags || mockData.posts[index]?.tags || ["Blog"],
          views: post.views || mockData.posts[index]?.views || "1k",
          likes: post.likes || mockData.posts[index]?.likes || "50",
          featured: post.featured || false,
        })),
      }
      : null;

  useEffect(() => {
    if (!blogData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [blogData]);

  useEffect(() => {
    if (!blogData) return;

    const observers = postRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePosts((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [blogData]);

  if (!blogData) {
    return null;
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      React: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      "Web Development":
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      CSS: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      "Node.js":
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
      Design:
        "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
      TypeScript:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
      General:
        "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
    };
    return colors[category] || colors["General"];
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen size={16} />
              Latest Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              {blogData.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover insights, tutorials, and thoughts on web development,
              design, and technology trends.
            </p>
          </div>

          {/* Featured Posts (First 2 posts in larger cards) */}
          {blogData.posts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {blogData.posts.slice(0, 3).map((post, index) => {
                const isPostVisible = visiblePosts.has(index);
                const isHovered = hoveredPost === index;

                return (
                  <article
                    key={`featured-${index}`}
                    ref={(el) => (postRefs.current[index] = el)}
                    className={`group relative transform transition-all duration-700 ${isPostVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-12 opacity-0 scale-95"
                      } hover:-translate-y-2`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredPost(index)}
                    onMouseLeave={() => setHoveredPost(null)}
                  >
                    <div className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50 group-hover:shadow-2xl group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50 transition-all duration-500">
                      {/* Featured badge */}
                      {post.featured && (
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          <TrendingUp size={12} />
                          Featured
                        </div>
                      )}

                      {/* Image */}
                      {post.image && (
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={`/${post.image}`}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Category badge on image */}
                          <div
                            className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                              post.category
                            )} backdrop-blur-sm`}
                          >
                            {post.category}
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-8">
                        {/* Meta information */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                          {post.description}
                        </p>

                        {/* Tags */}
                        {post.tags && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-lg"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          {/* Stats */}
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <Eye size={14} />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart size={14} />
                              <span>{post.likes}</span>
                            </div>
                          </div>

                          {/* Read more link */}
                          {post.url && (
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm group/link transition-colors duration-300"
                            >
                              Read Article
                              <ArrowRight
                                size={14}
                                className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                              />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
