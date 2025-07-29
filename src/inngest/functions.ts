import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert next.js.  You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: gemini({ model: "gemini-2.0-flash" }),
    });
    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );
    return { output };
  }
);
// 1:58:03
