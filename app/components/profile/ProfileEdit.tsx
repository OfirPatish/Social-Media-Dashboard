import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProfileEditProps {
  name: string;
  username: string;
  bio: string;
  onSave: (updatedProfile: { name: string; username: string; bio: string }) => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ name, username, bio, onSave }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedBio, setEditedBio] = useState(bio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name: editedName, username: editedUsername, bio: editedBio });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light-card dark:bg-dark-card shadow rounded-lg p-6"
    >
      <h2 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"
          >
            Bio
          </label>
          <textarea
            id="bio"
            value={editedBio}
            onChange={(e) => setEditedBio(e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </motion.div>
  );
};

export default ProfileEdit;
