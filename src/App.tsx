import { useState } from 'react'
import type { Clock } from 'clock';
// If you have a Clock implementation, import it here. Otherwise, you can use a placeholder or remove related code.
// Example placeholder implementation:
import './App.css'
import clock from 'clock';

type completeTaskTypes = (task_id: number) => void;



function App() {

  
  const [dailyTaskCompleted, setDailyTaskCompleted] = useState<taskList>()
  const [weeklyTaskCompleted, setWeeklyTaskCompleted] = useState<taskList>()
  const [monthlyTaskCompleted, setMonthlyTaskCompleted] = useState<taskList>()



  const totalAmountofDailyTasks = taskList.filter(task => task.frequency === 'daily').length;
  const completedDailyTasks = dailyTaskCompleted?.filter(task => task.frequency === 'daily' && task.completed).length || 0;

  const totalAmountofWeeklyTasks = taskList.filter(task => task.frequency === 'weekly').length;
  const completedWeeklyTasks = weeklyTaskCompleted?.filter(task => task.frequency === 'weekly' && task.completed).length || 0;

  const totalAmountofMonthlyTasks = taskList.filter(task => task.frequency === 'monthly').length;
  const completedMonthlyTasks = monthlyTaskCompleted?.filter(task => task.frequency === 'monthly' && task.completed).length || 0;

  const totalTasks = taskList.length;
  const completedTasks = dailyTaskCompleted?.filter(task => task.completed).length || 0;




  const completeTask: completeTaskTypes = (task_id) => {
    for (const task of taskList) {
      if (task.taskId === task_id && task.completed) {
        switch (task.frequency) {
          case 'daily':
            if (completedDailyTasks >= 20) return;
            setDailyTaskCompleted(prevTasks =>
              prevTasks?.map(task =>
                task.taskId === task_id ? { ...task, completed: false } : task
              )
            );
            break;
          case 'weekly':
            if (completedWeeklyTasks >= 20) return;
            setWeeklyTaskCompleted(prevTasks =>
              prevTasks?.map(task =>
                task.taskId === task_id ? { ...task, completed: false } : task
              )
            );
            break;
          case 'monthly':
            if (completedMonthlyTasks >= 20) return;
            setMonthlyTaskCompleted(prevTasks =>
              prevTasks?.map(task =>
                task.taskId === task_id ? { ...task, completed: false } : task
              )
            );
            break;
          default:
            break;
        }
      }
    setDailyTaskCompleted(prevTasks =>
      prevTasks?.map(task =>
        task.taskId === task_id ? { ...task, completed: true } : task
      )
    );
  }

}

  return (
    <>
      {/* 
        Display task complete / total 
          Dont allow more than 20 task in a 7 day cycle
      */}
      <div>
        <h1 className="text-3xl font-bold underline">
          Chores Game
        </h1>
        <p>Daily Tasks Completed: {completedDailyTasks} / {totalAmountofDailyTasks}</p>
        <p>Weekly Tasks Completed: {completedWeeklyTasks} / {totalAmountofWeeklyTasks}</p>
        <p>Monthly Tasks Completed: {completedMonthlyTasks} / {totalAmountofMonthlyTasks}</p>
        <p>Total Tasks Completed: {completedTasks} / {totalTasks}</p>
      </div>

      {/* 
        Display task description
          onClick: completeTask(task_id)
      */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <ul>
          {taskList.map(task => (
            <li key={task.taskId} className="mb-2">
              <div className="p-4 border rounded shadow">
                <h3 className="text-xl font-semibold">{task.name}</h3>
                <p>{task.description}</p>
                <p>Category: {task.category}</p>
                <p>Frequency: {task.frequency}</p>
                <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
                <button
                  className={`mt-2 px-4 py-2 rounded ${task.completed ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                  onClick={() => completeTask(task.taskId)}
                  disabled={task.completed}
                >
                  {task.completed ? 'Undo Complete' : 'Complete Task'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 
        Display button if other person completed task 
          onClick: completeTask(task_id)
      */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Other User Actions</h2>
        <button
          className="mt-2 px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => completeTask(1)} // Example: Other user completed task with ID 1
        >
          Other User Completed "Clean kitchen counters"
        </button>
      </div>
    </>
  )
}

export default App
