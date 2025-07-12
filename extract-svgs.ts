import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const svgDir = path.join(__dirname, "public");

function getAllSvgFiles(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllSvgFiles(filePath, fileList);
    } else if (file.endsWith(".svg")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const svgFiles = getAllSvgFiles(svgDir);

svgFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  console.log(`// ${path.basename(file)}\n${content}\n`);
});