"use client";

import React from "react";
import { useQuery } from "react-query";
import Layout from "./shared/Layout";
import Stats from "./dashboard/Stats";
import EngagementChart from "./dashboard/EngagementChart";
import RecentPosts from "./dashboard/RecentPosts";
import Loader from "./shared/Loader";
import { userStats, recentPosts, engagementData } from "./utils/mockData";
import UserProfileSummary from "./dashboard/UserProfileSummary";
import NotificationsPanel from "./dashboard/NotificationsPanel";
import { userProfile, notifications } from "./utils/mockData";

const fetchDashboardData = async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { userStats, recentPosts, engagementData };
};

export default function Home() {
  const { data, isLoading, error } = useQuery("dashboardData", fetchDashboardData);

  if (isLoading) return <Loader />;
  if (error) return <div>An error occurred</div>;
  if (!data) return <div>No data available</div>;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <UserProfileSummary {...userProfile} />
            <div className="mt-6">
              <Stats {...data.userStats} />
            </div>
          </div>
          <NotificationsPanel notifications={notifications} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementChart data={data.engagementData} />
          <RecentPosts posts={data.recentPosts} />
        </div>
      </div>
    </Layout>
  );
}
