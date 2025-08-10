#!/usr/bin/env node
/**
 * One-time app setup:
 * - Adds recommended runtime deps if missing
 * - Ensures useful scripts exist
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const root = process.cwd();
const pkgPath = path.join(root, "package.json");
if (!fs.existsSync(pkgPath)) {
  console.error("package.json not found — run this from your repo root.");
  process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
pkg.scripts = {
  dev: pkg.scripts?.dev || "vite",
  build: pkg.scripts?.build || "vite build",
  preview: pkg.scripts?.preview || "vite preview",
  lint: pkg.scripts?.lint || "eslint .",
  format: pkg.scripts?.format || "prettier -w .",
  "prettier:check": pkg.scripts?.["prettier:check"] || "prettier -c .",
  ...(pkg.scripts || {}),
};
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log("Updated package.json scripts.");

const ensureDeps = ["dayjs", "@tanstack/react-virtual", "zod"];
const missing = ensureDeps.filter((d) => !(pkg.dependencies && pkg.dependencies[d]));
if (missing.length) {
  console.log("Installing:", missing.join(", "));
  try {
    execSync(
pm i , { stdio: "inherit" });
  } catch (e) {
    console.error("Install failed. Try running manually:", 
pm i );
    process.exit(1);
  }
} else {
  console.log("All recommended dependencies already present.");
}

console.log("\\nSetup complete.");
