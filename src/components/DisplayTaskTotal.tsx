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

  const allTaskComplete = filteredTasks.every((task) => task.completed);
  const completedCount = filteredTasks.filter((task) => task.completed).length;

  return (
    <div className="h-full">
      <button
        className="mt-2 px-4 py-2 rounded w-full h-[60vh] text-white"
        onClick={() => handleClick(visibleTask.taskId)}
        disabled={allTaskComplete}
      >
        <h3 className="text-xl font-semibold">{visibleTask.name}</h3>
        <p>{visibleTask.description}</p>
        <p className="animate-pulse pt-12 text-green-200">
          Click when complete
        </p>
      </button>
      <p className="mt-2 text-md text-gray-400">
        Task {completedCount} of {filteredTasks.length}
      </p>
    </div>
  );
}
