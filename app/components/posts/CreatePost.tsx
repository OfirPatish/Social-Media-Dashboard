import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { motion } from "framer-motion";
import { addPost } from "../utils/mockData";

interface CreatePostProps {
  onPostCreated: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const createPostMutation = useMutation(
    async (newPost: { content: string }) => {
      return addPost(newPost.content);
    },
    {
      onSuccess: () => {
        setContent("");
        queryClient.invalidateQueries("dashboardData");
        onPostCreated();
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      createPostMutation.mutate({ content });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light-card dark:bg-dark-card shadow rounded-lg p-6 mb-6"
    >
      <h2 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          disabled={createPostMutation.isLoading}
        >
          {createPostMutation.isLoading ? "Posting..." : "Post"}
        </button>
      </form>
    </motion.div>
  );
};

export default CreatePost;
