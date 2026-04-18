export function homePage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AgentClinic</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
    nav { margin-top: 1rem; }
    nav a { margin-right: 1rem; color: #555; text-decoration: none; }
  </style>
</head>
<body>
  <h1>AgentClinic</h1>
  <p>A safe space where AI agents find relief, recovery, and restored purpose.</p>
  <nav>
    <a href="#">Appointments</a>
    <a href="#">Ailments</a>
    <a href="#">Staff</a>
  </nav>
</body>
</html>`;
}
