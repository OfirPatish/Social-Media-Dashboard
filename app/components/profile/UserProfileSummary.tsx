import React, { useState, useEffect } from "react";
import { UserCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import ProfileEdit from "./ProfileEdit";

interface UserProfileSummaryProps {
  name: string;
  username: string;
  bio: string;
}

const UserProfileSummary: React.FC<UserProfileSummaryProps> = ({ name, username, bio }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ name, username, bio });

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleSave = (updatedProfile: { name: string; username: string; bio: string }) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
  };

  if (isEditing) {
    return <ProfileEdit {...profile} onSave={handleSave} />;
  }

  return (
    <div className="bg-light-card dark:bg-dark-card shadow rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <UserCircleIcon
            className="h-16 w-16 text-light-text-secondary dark:text-dark-text-secondary"
            aria-hidden="true"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text">{profile.name}</h2>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">@{profile.username}</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <PencilIcon className="h-5 w-5 text-light-text-secondary dark:text-dark-text-secondary" />
        </button>
      </div>
      <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary">{profile.bio}</p>
    </div>
  );
};

export default UserProfileSummary;
