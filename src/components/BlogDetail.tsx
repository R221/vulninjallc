
import React from 'react';
import { BlogPost } from '@/data/blogPosts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, User, Tag } from "lucide-react";

interface BlogDetailProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogDetail = ({ post, isOpen, onClose }: BlogDetailProps) => {
  if (!post) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border/50">
        <DialogHeader>
          <div className="relative h-64 overflow-hidden rounded-lg mb-6">
            <img 
              src={post.thumbnail} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <DialogTitle className="text-3xl font-bold mb-4 text-left">
            {post.title}
          </DialogTitle>
          
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Tag className="w-4 h-4 text-primary" />
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </DialogHeader>
        
        <div className="prose prose-invert max-w-none">
          <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {post.content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDetail;
