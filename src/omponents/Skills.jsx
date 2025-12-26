const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  Backend: ["Python", "Flask", "FastAPI", "Node.js"],
  Database: ["MySQL", "MongoDB", "SQLite"],
  "AI / ML": ["NumPy", "Pandas", "OpenCV", "TensorFlow", "PyTorch"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {Object.keys(skills).map((key) => (
          <div key={key} className="border p-4 rounded">
            <h3 className="font-semibold mb-2">{key}</h3>
            <ul>
              {skills[key].map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
