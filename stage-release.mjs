/* eslint-disable no-undef */
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const version =
  process.argv[process.argv.length - 1].match(/^\d.\d.\d$/gm)?.[0];

const fileName = "package.json";

if (!version) {
  throw new Error("Version not provided");
}

const file = JSON.parse(readFileSync(fileName, "utf8"));

if (!file) {
  throw new Error("package.json not found");
}

file.version = version;
const branchName = `release/${version}`;

writeFileSync(fileName, JSON.stringify(file, null, 2));
console.log("Версия указана");
execSync("git add *");
execSync(`git commit -m prerelease/${branchName}`);
execSync(`git push origin develop`);
console.log("Собираю проект...");
try {
  execSync("npm run build");
} catch (e) {
  console.log("error", e);
}
execSync('move "./build" "./docs"');
console.log("Сборка готова");
try {
  execSync(`git checkout -b ${branchName}`);
} catch {
  execSync(`git branch -D ${branchName}`);
  execSync(`git checkout -b ${branchName}`);
}
execSync("git add *");
execSync(`git commit -m ${branchName}`);
execSync(`git push origin ${branchName}`);
console.log(`Ветка ${branchName} запушена`);
execSync(`git checkout main`);
try {
  execSync('rmdir /s /q "./docs"');
  execSync("git add *");
  execSync(`git commit -m deleteFolder`);
  execSync(`git push origin main`);
} catch {
  console.log("Отсутствует папка для удаления. Продолжаем...");
}

execSync(`git pull -X theirs origin ${branchName}`);
execSync("git push origin main");
console.log("Ветка main запушена");
execSync("git checkout develop");
process.exit(0);
