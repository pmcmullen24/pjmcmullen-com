import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Pin the project root; a stray package-lock.json in the home folder confuses Next otherwise.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
};

export default nextConfig;
