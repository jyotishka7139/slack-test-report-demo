import logo from "./logo.svg";
import "./App.css";

const content = {
  declaration: { attributes: { version: "1.0", encoding: "UTF-8" } },
  elements: [
    {
      type: "element",
      name: "testsuites",
      attributes: {
        name: "Parent Dashboard Test Suite",
        tests: "5",
        failures: "1",
        errors: "0",
        time: "2.414",
      },
      elements: [
        {
          type: "element",
          name: "testsuite",
          attributes: {
            name: "src/App.test.js",
            errors: "0",
            failures: "1",
            skipped: "0",
            timestamp: "2022-12-09T07:54:18",
            time: "1.774",
            tests: "5",
          },
          elements: [
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one",
                name: "renders declaration",
                time: "0.038",
              },
              elements: [],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one",
                name: "renders version",
                time: "0.008",
              },
              elements: [],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one › test nested format",
                name: "render fails",
                time: "0.007",
              },
              elements: [
                {
                  type: "element",
                  name: "failure",
                  elements: [
                    {
                      type: "text",
                      text:
                        "Error: expect(element).toHaveTextContent() \n" +
                        " \n " +
                        "Expected element to have text content:\n" +
                        "  :white_check_mart\n" +
                        "Received:\n" +
                        "  jest tests ALL TESTS PASSED: :white_check_mark: src/App.test.js test one :white_check_mark: renders learn react link :white_check_mark: renders learn rct test one › test nested :white_check_mark: renders learn react :white_check_mark: renders learnlink\n" +
                        "    at Object.<anonymous> (/home/runner/work/slack-test-report-demo/slack-test-report-demo/src/App.test.js:19:27)\n" +
                        "    at Promise.then.completed (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/utils.js:391:28)\n" +
                        "    at new Promise (<anonymous>)\n" +
                        "    at callAsyncCircusFn (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/utils.js:316:10)\n" +
                        "    at _callCircusTest (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/run.js:218:40)\n" +
                        "    at _runTest (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/run.js:155:3)\n" +
                        "    at _runTestsForDescribeBlock (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/run.js:66:9)\n" +
                        "    at _runTestsForDescribeBlock (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/run.js:60:9)\n" +
                        "    at _runTestsForDescribeBlock (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/run.js:60:9)\n" +
                        "    at run (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/run.js:25:3)\n" +
                        "    at runAndTransformResultsToJestFormat (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:170:21)\n" +
                        "    at jestAdapter (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:82:19)\n" +
                        "    at runTestInternal (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-runner/build/runTest.js:389:16)\n" +
                        "    at runTest (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-runner/build/runTest.js:475:34)\n" +
                        "    at TestRunner.runTests (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-runner/build/index.js:101:12)\n" +
                        "    at TestScheduler.scheduleTests (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/@jest/core/build/TestScheduler.js:333:13)\n" +
                        "    at runJest (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/@jest/core/build/runJest.js:404:19)\n" +
                        "    at _run10000 (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/@jest/core/build/cli/index.js:320:7)\n" +
                        "    at runCLI (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/@jest/core/build/cli/index.js:173:3)\n" +
                        "    at Object.run (/home/runner/work/slack-test-report-demo/slack-test-report-demo/node_modules/jest-cli/build/cli/index.js:155:37)",
                    },
                  ],
                },
              ],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one › test nested format",
                name: "renders declaration",
                time: "0.005",
              },
              elements: [],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one",
                name: "renders declaration",
                time: "0.005",
              },
              elements: [],
            },
          ],
        },
      ],
    },
  ],
};

function parseData(content) {
  let testReport = "";
  const testcases = content.elements[0].elements;
  console.log("content: ", content);
  console.log("content attributes: ", content.elements[0].attributes);
  console.log("content elements FAIL: ", content.elements[0].elements);

  console.log("calculating test results, deciding if abbreviate output");
  if (
    parseInt(content.elements[0].attributes.failures) == 0 &&
    parseInt(content.elements[0].attributes.errors) == 0
  ) {
    console.log(
      "building ALL PASS report for " + content.elements[0].attributes.name
    );
    let reportContent =
      ":white_check_mark: " +
      content.elements[0].attributes.name +
      " ALL TESTS PASSED";
    reportContent += "\r\n\r\n";
    testcases.forEach((testSuite) => {
      reportContent +=
        ":white_check_mark: " + testSuite.attributes.name + "\r\n\r\n";
      let testDescription = null;
      testSuite.elements.forEach((test) => {
        if (testDescription != test.attributes.classname) {
          testDescription = test.attributes.classname;
          reportContent += test.attributes.classname + "\r\n";
        }
        reportContent += " :white_check_mark: " + test.attributes.name + "\r\n";
      });
    });
    testReport += reportContent + "\r\n";
  } else {
    console.log(
      "building FAIL report for failed test: " +
        content.elements[0].attributes.name
    );
    let reportContent =
      ":x: " +
      content.elements[0].attributes.name +
      ": " +
      content.elements[0].attributes.failures +
      ` ${
        content.elements[0].attributes.failures == 1 ? "TEST" : "TESTS"
      } FAILED`;
    reportContent += "\r\n\r\n";

    //begin test case details
    testcases.forEach((testSuite) => {
      reportContent +=
        `${testSuite.attributes.failures ? ":x: " : ":white_check_mark: "}` +
        testSuite.attributes.name +
        "\r\n\r\n";
      let testDescription = null;
      testSuite.elements.forEach((test) => {
        if (testDescription != test.attributes.classname) {
          testDescription = test.attributes.classname;
          reportContent += test.attributes.classname + "\r\n";
        }
        //pass
        if (!test.elements.length)
          reportContent +=
            " :white_check_mark: " + test.attributes.name + "\r\n";
        //fail
        else {
          reportContent +=
            " :x: " +
            test.attributes.name +
            "\r\n\r\n" +
            "-------------------" +
            "\r\n\r\n";
          reportContent += "ERROR: " + "\r\n";
          const errorMessage = test.elements[0].elements[0].text;
          reportContent +=
            errorMessage.split("\n")[0] +
            "\r\n" +
            errorMessage.split("\n")[1] +
            "\r\n" +
            errorMessage.split("\n")[2] +
            "\r\n" +
            errorMessage.split("\n")[3] +
            "\r\n" +
            errorMessage.split("\n")[4] +
            "\r\n" +
            errorMessage.split("\n")[5];
          reportContent += "\r\n\r\n" + "-------------------" + "\r\n\r\n";
        }
      });
    });
    testReport += reportContent + "\r\n";
  }
  return testReport;
}

const data = parseData(content);

function App() {
  return (
    <div className="App">
      <div className="object">
        <div className="json" data-testid="json">
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </div>
        <div className="format" data-testid="format">
          <pre>{data}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
