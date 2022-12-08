import logo from "./logo.svg";
import "./App.css";

const content = {
  declaration: { attributes: { version: "1.0", encoding: "UTF-8" } },
  elements: [
    {
      type: "element",
      name: "testsuites",
      attributes: {
        name: "jest tests",
        tests: "4",
        failures: "0",
        errors: "0",
        time: "1.661",
      },
      elements: [
        {
          type: "element",
          name: "testsuite",
          attributes: {
            name: "src/App.test.js",
            errors: "0",
            failures: "0",
            skipped: "0",
            timestamp: "2022-12-08T20:20:14",
            time: "1.21",
            tests: "4",
          },
          elements: [
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one",
                name: "renders learn react link",
                time: "0.034",
              },
              elements: [],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one",
                name: "renders learn rct",
                time: "0.007",
              },
              elements: [],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one › test nested",
                name: "renders learn react",
                time: "0.005",
              },
              elements: [],
            },
            {
              type: "element",
              name: "testcase",
              attributes: {
                classname: "test one › test nested",
                name: "renders learnlink",
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
  console.log("content: ", content);
  console.log("content attributes: ", content.elements[0].attributes);
  console.log("content elements FAIL: ", content.elements[0].elements);

  console.log("calculating test results, deciding if abbreviate output");
  if (
    parseInt(content.elements[0].attributes.failures) == 0 &&
    parseInt(content.elements[0].attributes.errors) == 0
  ) {
    console.log(
      "building abbreviated string for " + content.elements[0].attributes.name
    );
    let reportContent =
      "" + content.elements[0].attributes.name + " ALL TESTS PASSED:";
    reportContent += "\r\n\r\n";
    content.elements[0].elements.forEach((testSuite) => {
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
    reportContent += "\r\n";
    testReport += reportContent;
  } else {
    console.log(
      "building long string for failed test: " +
        content.elements[0].attributes.name
    );
    let OUTPUTSTR = "";
    OUTPUTSTR += content.elements[0].attributes.name;
    OUTPUTSTR += " HAS ERRORS:";
    OUTPUTSTR += "\r\n";

    //begin test case details
    const testcases = content.elements[0].elements;
    testcases.forEach(function (item) {
      if (item.name == "testcase") {
        var testCaseNameResult = item.attributes.name;
        testCaseNameResult += getTestCaseResult(item);
        if (testCaseNameResult.includes("skipped")) {
          testCaseNameResult = ":pineapple: " + testCaseNameResult;
        } else if (testCaseNameResult.includes("failure")) {
          var errorMessage = item.elements[0].attributes.message;
          var shortMessage = errorMessage.split(/\r?\n/)[0];
          testCaseNameResult =
            ":apple: " + testCaseNameResult + " " + shortMessage;
        } else {
          testCaseNameResult = ":green_apple: " + testCaseNameResult;
        }
        testCaseNameResult = "    " + testCaseNameResult;
        testCaseNameResult += "\r\n";
        OUTPUTSTR += testCaseNameResult;
      }
    });
    testReport += OUTPUTSTR + "\r\n";
  }
  return testReport;
}
function getTestCaseResult(inXML) {
  var outStr = "";
  inXML.elements.forEach(function (result) {
    outStr += " ";
    outStr += result.name;
  });
  return outStr;
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
