import inquirer from "inquirer";

// here we can define prompts for the program

const namePrompt = async () =>
  (
    await inquirer.prompt({
      name: "fullName",
      type: "input",
      message: "What is the typescript type of this property?",
    })
  ).fullName;

const optionsPrompt = async () =>
  (
    await inquirer.prompt({
      name: "optionsPrompt",
      type: "list",
      message: "Example of options prompt",
      default: 0,
      loop: true,
      choices: [
        { value: "eat", name: "Eat lasagna" },
        { value: "drive", name: "Drive to airport" },
      ],
    })
  ).optionsPrompt;

const examplePrompts = { optionsPrompt, namePrompt };

export default examplePrompts;
