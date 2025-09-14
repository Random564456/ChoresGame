import React from "react";
import { type taskType } from "../assets/taskList";

interface DisplayTaskTotalProps {
  tasks: taskType[];
  taskFilter: "daily" | "weekly" | "monthly";
  completeTask: (taskId: number) => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
}

export default function DisplayTaskTotal({
  tasks,
  completeTask,
  currentIndex,
  taskFilter,
  setCurrentIndex,
}: DisplayTaskTotalProps) {
  // filter tasks first
  const filteredTasks = tasks.filter((task) => task.frequency === taskFilter);
  const visibleTask = filteredTasks[currentIndex];

  const handleClick = (taskId: number) => {
    completeTask(taskId);
    if (currentIndex < filteredTasks.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (!visibleTask) {
    return <p className="text-lg font-semibold">🎉 All {taskFilter} tasks done!</p>;
  }

  return (
    <div className="h-full">
      <button
        className={`mt-2 px-4 py-2 rounded w-full h-[60vh] ${
          visibleTask.completed ? "bg-red-500" : "bg-green-500"
        } text-white`}
        onClick={() => handleClick(visibleTask.taskId)}
      >
      <h3 className="text-xl font-semibold">{visibleTask.name}</h3>
      <p>{visibleTask.description}</p>
      <p className={`${visibleTask.frequency === "daily" && "text-green-200" || visibleTask.frequency === "weekly" && "text-yellow-200" || visibleTask.frequency === "monthly" && "text-purple-200"}  `}>{visibleTask.frequency}</p>
      
      <h3 className="pt-5 animate-pulse"> Click to complete </h3>
      </button>

      <p className="mt-2 text-md text-gray-400">
        Task {currentIndex + 1} of {filteredTasks.length}
      </p>
    </div>
  );
}
