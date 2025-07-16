import React, { useEffect, useState } from 'react';
import api from '../api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.get('/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTasks(res.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.post('/tasks', { title }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTitle('');
      setSuccess('Task added!');
      fetchTasks();
    } catch (err) {
      setError('Failed to add task');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSuccess('Task deleted!');
      fetchTasks();
    } catch (err) {
      setError('Failed to delete task');
    }
    setLoading(false);
  };

  const handleEdit = (task) => {
    setEditId(task._id);
    setEditTitle(task.title);
  };

  const handleUpdate = async (id) => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.put(`/tasks/${id}`, { title: editTitle }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSuccess('Task updated!');
      setEditId(null);
      setEditTitle('');
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
    setLoading(false);
  };

  const handleComplete = async (task) => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.put(`/tasks/${task._id}`, { completed: !task.completed }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSuccess('Task updated!');
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Task Manager Dashboard</h2>
        {loading && <div className="text-blue-600 mb-2">Loading...</div>}
        {error && <div className="text-red-600 mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <form onSubmit={handleAddTask} className="mb-4 flex">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="New task"
            className="flex-1 px-3 py-2 border rounded-l focus:outline-none"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">Add</button>
        </form>
        <ul>
          {tasks.map(task => (
            <li key={task._id} className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleComplete(task)}
                  className="accent-blue-600"
                />
                {editId === task._id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    className="px-2 py-1 border rounded"
                  />
                ) : (
                  <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.title}</span>
                )}
              </div>
              <div className="flex space-x-2">
                {editId === task._id ? (
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard; 