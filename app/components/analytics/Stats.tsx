import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserIcon, HeartIcon, PhotoIcon } from "@heroicons/react/24/solid";
import Modal from "../common/Modal";

interface StatsProps {
  followers: number;
  following: number;
  posts: number;
  likes: number;
}

const Stats: React.FC<StatsProps> = ({ followers, following, posts, likes }) => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  const stats = [
    { name: "Followers", value: followers, icon: UserIcon },
    { name: "Following", value: following, icon: UserIcon },
    { name: "Posts", value: posts, icon: PhotoIcon },
    { name: "Likes", value: likes, icon: HeartIcon },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-card dark:bg-dark-card overflow-hidden shadow rounded-lg cursor-pointer"
            onClick={() => setSelectedStat(item.name)}
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon
                    className="h-6 w-6 text-light-text-secondary dark:text-dark-text-secondary"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary truncate">
                      {item.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-light-text dark:text-dark-text">
                        {item.value.toLocaleString()}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedStat}
        onClose={() => setSelectedStat(null)}
        title={selectedStat || ""}
        content={`Detailed information about ${selectedStat} goes here.`}
      />
    </>
  );
};

export default Stats;
