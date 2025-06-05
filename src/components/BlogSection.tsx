
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { Calendar, User, Tag } from "lucide-react";
import BlogDetail from "@/components/BlogDetail";

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Security <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of evolving threats with expert analysis, practical guides, and cutting-edge research from our cybersecurity specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Tag className="w-4 h-4 text-primary" />
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                  variant="outline"
                  onClick={() => handleReadMore(post)}
                >
                  Read Full Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 text-lg"
          >
            View All Articles
          </Button>
        </div>
      </div>
      
      <BlogDetail 
        post={selectedPost}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
};

export default BlogSection;
