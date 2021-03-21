const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
  return res.json(projects);
});

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project); 

  return res.status(201).json(project);
});

app.put('/projects/:id', (req, res) => {
  const {
    body: { title, owner },
    params: { id },
  } = req;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({
      error: 'Project does not exist',
    });
  }

  const project = { id, title, owner };

  projects[projectIndex] = project;

  return res.status(200).json(project);
});

app.delete('/projects/:id', (req, res) => {
  const {
    params: { id },
  } = req;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({
      error: 'Project does not exist',
    });
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(3333, () => console.log('🚀 Server is running!'));
