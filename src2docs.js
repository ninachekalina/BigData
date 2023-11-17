import { run } from "@mermaid-js/mermaid-cli"

await run("src/c4-context.mmd", "docs/c4-context.svg")
await run("src/c4-context.mmd", "docs/c4-containers.svg")
await run("src/c4-components.mmd", "docs/c4-components.svg")
