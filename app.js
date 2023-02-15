const { readFile, writeFile } = require("fs").promises;

const readAndWrite = async () => {
  console.log("start readandwrite");
  const first = await readFile("./content/first.txt");
  const second = await readFile("./content/second.txt");
  await writeFile(
    "./content/result-async.txt",
    `Result of both op'sdasdasdsssss: ${first} ${second}`
  );
  console.log("end readandwrite");
};

console.log("start");

readAndWrite();

console.log("end");
