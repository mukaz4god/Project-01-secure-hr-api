const app = require("./server");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // nosemgrep: semgrep-rules.sensitive-console-log
  console.log(`Secure HR API running on port ${port}`);
});
