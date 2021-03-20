import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/projects");

      setProjects(data);
    })();
  }, []);

  async function handleAddProject() {
    const response = await api.post("/projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Mardeson Pereira",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} {project.owner}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
