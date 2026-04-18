import { header } from "./header";
import { footer } from "./footer";

export function layout(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AgentClinic</title>
  <link rel="stylesheet" href="/static/styles.css" />
</head>
<body>
  ${header()}
  <main>${content}</main>
  ${footer()}
</body>
</html>`;
}
