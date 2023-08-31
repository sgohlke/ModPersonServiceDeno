// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./personservice.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@sgohlke/person-service",
    version: Deno.args[0] ?? '0.0.1',
    description: "Example code for Person Service Demo module",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/sgohlke/ModPersonServiceDeno.git",
    },
    bugs: {
      url: "https://github.com/sgohlke/ModPersonServiceDeno/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    // Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});