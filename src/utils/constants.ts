import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(join(__filename, "../"));

export const templatePath = (name: string) =>
  `${__dirname}/templates/${name}.template`;

export const exampleTemplate = `
//Sometimes you might just need a basic template string for file creation
function exampleFunction(){
  return 'example';
}
`;
