import React from "react";
import { motion } from "framer-motion";
import { HeartIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

interface Post {
  id: number;
  content: string;
  likes: number;
  comments: number;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Posts</h2>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post, index) => (
          <motion.li
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4"
          >
            <div className="flex space-x-3">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{post.content}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <HeartIcon className="h-5 w-5 text-red-400 mr-1" aria-hidden="true" />
                    {post.likes}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-blue-400 mr-1" aria-hidden="true" />
                    {post.comments}
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
