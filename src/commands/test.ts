import exampleInjectionPipeline from "./example.command/pipelines/example.injection";

const injections = { exampleInjectionPipeline };

// simple area to test injections
async function runInjections() {
  await exampleInjectionPipeline({ useOtherFile: false });
}
runInjections();

export default injections;
