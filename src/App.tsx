import { useState } from "react";
import "./App.css";
// import type { Clock } from "clock";
// import clock from "clock";
import taskList, { type taskListType } from "./assets/taskList";
import DisplayTaskTotal from "./components/DisplayTaskTotal";

type completeTaskTypes = (task_id: number) => void;

function App() {
  const initialTaskList = taskList;
  const [tasks, setTasks] = useState<taskListType>(initialTaskList);
  const [filter, setFilter] = useState<"daily" | "weekly" | "monthly">("daily");

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalAmountofDailyTasks = taskList.filter(
    (task) => task.frequency === "daily"
  ).length;
  const completedDailyTasks =
    tasks?.filter((task) => task.frequency === "daily" && task.completed)
      .length || 0;

  const totalAmountofWeeklyTasks = taskList.filter(
    (task) => task.frequency === "weekly"
  ).length;
  const completedWeeklyTasks =
    tasks?.filter((task) => task.frequency === "weekly" && task.completed)
      .length || 0;

  const totalAmountofMonthlyTasks = taskList.filter(
    (task) => task.frequency === "monthly"
  ).length;
  const completedMonthlyTasks =
    tasks?.filter((task) => task.frequency === "monthly" && task.completed)
      .length || 0;

  const completeTask: completeTaskTypes = (task_id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.taskId !== task_id) return t;

        const toggleCompleted = !t.completed;

        // if completing → set dateCompleted
        // if undoing → reset to null
        return {
          ...t,
          completed: toggleCompleted,
          dateCompleted: toggleCompleted ? new Date() : null,
        };
      })
    );
  };

  return (
    <>
      {/* 
          Display task complete / total 
            Dont allow more than 20 task in a 7 day cycle
        */}
      <div className="flex flex-col justify-self-center w-[80vw] mb-3">
        <section className="flex w-full justify-evenly text-xs text-center gap-12 pb-4">
          <p>
            Daily: <br />
            {completedDailyTasks} / {totalAmountofDailyTasks}
          </p>
          <p>
            Weekly: <br />
            {completedWeeklyTasks} / {totalAmountofWeeklyTasks}
          </p>
          <p>
            Monthly: <br />
            {completedMonthlyTasks} / {totalAmountofMonthlyTasks}
          </p>
        </section>
      </div>

      {/* 
          Display task description
            onClick: completeTask(task_id)
        */}
      <div className="flex flex-col justify-center h-[690px]">
        <div className="flex flex-row justify-center gap-4">
          {["daily", "weekly", "monthly"].map((option) => (
            <div>
              <button
                className="w-[25vw] rounded bg-blue-500 text-white"
                onClick={() =>
                  setFilter(option as "daily" | "weekly" | "monthly")
                }
              >
                {option}
              </button>
            </div>
          ))}
        </div>
        <DisplayTaskTotal
          completeTask={completeTask}
          tasks={tasks}
          taskFilter={filter}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>

      {/* 
          Display button if other person completed task 
            onClick: completeTask(task_id)
        */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Other User Actions</h2>
        <button
          className="mt-2 px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => completeTask(1)} // Example: Other user completed task with ID 1
        >
          Somone Else Completed "{tasks[currentIndex].name}"
        </button>
      </div>
    </>
  );
}

export default App;
