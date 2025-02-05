import InjectionPipeline, { statements } from "tscodeinject";
import checkFiles from "../../../utils/fileChecker";
import { templatePath } from "../../../utils/constants";

type ExampleProps = {
  useOtherFile: boolean;
};

export default async function exampleInjectionPipeline(props: ExampleProps) {
  // runs file checker if configured
  checkFiles();
  // start injection with a file
  const examplePipeline = new InjectionPipeline(`src/somefile.ts`);

  // injects an import e.g import { someFunc } from "src/otherfile.ts"
  examplePipeline.injectImport({
    importName: "someFunc",
    source: "src/otherfile.ts",
  });

  if (props.useOtherFile) {
    // You can also continue the pipeline on another file and save it as another var
    const example2Pipeline = examplePipeline.parse("src/otherfile.ts");

    // injects a default import e.g import otherFunc from "src/otherotherfile.ts"
    example2Pipeline.injectImport({
      importName: "otherFucnc",
      source: "src/otherotherfile.ts",
      isDefault: true,
    });
    // opens the following file in the editor when the program is finished
    example2Pipeline.finish(["src/somefile.ts"]);
  } else examplePipeline.finish();
}
