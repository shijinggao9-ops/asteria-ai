export default function Dashboard() {
  const projects = [
    "Luckin Coffee Growth Strategy",
    "BYD Overseas Expansion",
    "Starbucks Market Analysis",
  ];

  return (
    <main>
      <h1>Asteria</h1>

      <p>AI-native Workspace for Business Research</p>

      <button>+ New Research Project</button>

      <h2>Recent Projects</h2>

      <div>
        {projects.map((project) => (
          <div key={project}>{project}</div>
        ))}
      </div>
    </main>
  );
}