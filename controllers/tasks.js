const getAllTasks = (req, res) => {
  res.send("all items!");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("single item");
};

const updateTask = (req, res) => {
  res.send("update item");
};

const deleteTask = (req, res) => {
  res.send("delete item");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
