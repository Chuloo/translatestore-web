import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function renameJsxToTsx(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      renameJsxToTsx(filePath);
    } else if (path.extname(file) === ".jsx") {
      const newPath = path.join(
        directory,
        `${path.basename(file, ".jsx")}.tsx`
      );
      fs.renameSync(filePath, newPath);
      console.log(`Renamed: $rename-jsx-to-tsx.js -> ${newPath}`);
    }
  });
}

const srcDir = path.join(__dirname, "src");
renameJsxToTsx(srcDir);
console.log("Renaming complete!");
