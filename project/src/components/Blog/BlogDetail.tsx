import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './blogData'; // Assuming blog data is imported from a data file

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the blog id from the URL params
  const blogPost = blogPosts.find(post => post.id.toString() === id); // Find the blog post using the id

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{blogPost.title}</h2>
        <div className="flex justify-center mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full md:w-2/3 h-64 object-cover"
          />
        </div>
        <p className="text-lg text-gray-800">{blogPost.content}</p> {/* Assuming content is available */}
      </div>
    </section>
  );
};

export default BlogDetail;
