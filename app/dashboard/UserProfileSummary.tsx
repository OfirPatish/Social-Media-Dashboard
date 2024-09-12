import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface UserProfileSummaryProps {
  name: string;
  username: string;
  bio: string;
}

const UserProfileSummary: React.FC<UserProfileSummaryProps> = ({ name, username, bio }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card shadow rounded-lg p-6">
      <div className="flex items-center">
        <UserCircleIcon
          className="h-16 w-16 text-light-text-secondary dark:text-dark-text-secondary"
          aria-hidden="true"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-light-text dark:text-dark-text">{name}</h2>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">@{username}</p>
        </div>
      </div>
      <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary">{bio}</p>
    </div>
  );
};

export default UserProfileSummary;
