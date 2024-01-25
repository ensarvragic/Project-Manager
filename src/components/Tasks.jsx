import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="p-4 mt-6 rounded-md bg-stone-300">
              <div className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Očisti
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
