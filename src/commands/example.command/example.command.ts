import { Command } from "commander";
import prompts from "./example.prompts";
import exampleInjectionPipeline from "./pipelines/example.injection";

export default function exampleCommand(program: Command) {
  program
    .command("example <name>")
    .description("Example command description")
    // dash syntax resolves to camel case --first-name=firstName except for --no-<something> which resolves to the word after no
    .option("-a --add <string>", "variable option description")
    // if an argument is NOT specified in the option signature then it defaults to a boolean value
    // if the option is passed when the command called then the default of the option will be false
    // adding --no-<something> will change the default of an unused option to be true
    .option("-O --no-other", "boolean option description")
    .action(async (name, opts) => {
      console.log(name, opts);
      // You can use the input from the prompts to add to your injection or direct flow
      const fullName = await prompts.namePrompt();
      const chosen = await prompts.optionsPrompt();
      console.log(fullName, chosen);
      await exampleInjectionPipeline({ useOtherFile: opts.other });
      process.exit(0);
    });
}
