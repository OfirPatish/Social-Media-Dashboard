export const userStats = {
  followers: 10500,
  following: 523,
  posts: 248,
  likes: 15320,
};

const getStoredPosts = () => {
  if (typeof window !== "undefined") {
    const storedPosts = localStorage.getItem("recentPosts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  }
  return [];
};

export let recentPosts =
  getStoredPosts().length > 0
    ? getStoredPosts()
    : [
        { id: 1, content: "Just launched my new project!", likes: 42, comments: 7 },
        { id: 2, content: "Beautiful sunset at the beach 🌅", likes: 89, comments: 12 },
        { id: 3, content: "Excited for the upcoming tech conference!", likes: 31, comments: 5 },
      ];

export const engagementData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Likes",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Comments",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const userProfile = {
  name: "John Doe",
  username: "johndoe",
  bio: "Passionate about technology and social media. Always learning and sharing!",
};

export const notifications = [
  { id: 1, message: "Your post received 100 likes!", time: "2 hours ago" },
  { id: 2, message: "@jane_smith mentioned you in a comment", time: "5 hours ago" },
  { id: 3, message: "You have a new follower", time: "1 day ago" },
];

export const addPost = (content: string) => {
  const newPost = {
    id: Date.now(),
    content,
    likes: 0,
    comments: 0,
  };
  recentPosts = [newPost, ...recentPosts].slice(0, 5); // Keep only the 5 most recent posts
  if (typeof window !== "undefined") {
    localStorage.setItem("recentPosts", JSON.stringify(recentPosts));
  }
  return newPost;
};

export const fetchDashboardData = async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { userStats, recentPosts, engagementData };
};
