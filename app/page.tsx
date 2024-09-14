"use client";

import React from "react";
import { useQuery } from "react-query";
import Layout from "./components/common/Layout";
import Stats from "./components/analytics/Stats";
import EngagementChart from "./components/analytics/EngagementChart";
import RecentPosts from "./components/posts/RecentPosts";
import Loader from "./components/common/Loader";
import { userStats, recentPosts, engagementData } from "./components/utils/mockData";
import UserProfileSummary from "./components/profile/UserProfileSummary";
import NotificationsPanel from "./components/notifications/NotificationsPanel";
import { userProfile, notifications } from "./components/utils/mockData";
import CreatePost from "./components/posts/CreatePost";
import { useQueryClient } from "react-query";

const fetchDashboardData = async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { userStats, recentPosts, engagementData };
};

export default function Home() {
  const { data, isLoading, error } = useQuery("dashboardData", fetchDashboardData);
  const queryClient = useQueryClient();

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
            <div className="mt-6">
              <CreatePost onPostCreated={() => queryClient.invalidateQueries("dashboardData")} />
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
