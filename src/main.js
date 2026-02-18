import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();
mv src/src/main.js src/main.js
mv src/src/joke.js src/joke.js
git add src/main.js src/joke.js
git rm src/src/main.js src/src/joke.js
git commit -m "Move files to correct directory structure"
git push
