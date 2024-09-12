import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";

interface Notification {
  id: number;
  message: string;
  time: string;
}

interface NotificationsPanelProps {
  notifications: Notification[];
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ notifications }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4 flex items-center">
        <BellIcon className="h-6 w-6 mr-2" />
        Notifications
      </h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-light-text dark:text-dark-text">{notification.message}</p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
