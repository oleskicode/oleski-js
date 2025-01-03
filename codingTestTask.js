/*
You are given an array of objects representing test cases. 
Each test case has a unique ID, a description, and a status. 
Your task is to write a TypeScript function 
that processes this array to generate a summary object. 
The summary should count the number of test cases for each status and group all test descriptions by their status.

Input Example:
const testCases = [
    { id: 1, description: "Login with valid credentials", status: "passed" },
    { id: 2, description: "Login with invalid credentials", status: "failed" },
    { id: 3, description: "Forgot password flow", status: "skipped" },
    { id: 4, description: "Update profile", status: "passed" },
    { id: 5, description: "Delete account", status: "failed" },
];

Output Example:
{
    passed: {
        count: 2,
        descriptions: ["Login with valid credentials", "Update profile"]
    },
    failed: {
        count: 2,
        descriptions: ["Login with invalid credentials", "Delete account"]
    },
    skipped: {
        count: 1,
        descriptions: ["Forgot password flow"]
    }
}
*/

const testCases = [
    { id: 1, description: "Login with valid credentials", status: "passed" },
    { id: 2, description: "Login with invalid credentials", status: "failed" },
    { id: 3, description: "Forgot password flow", status: "skipped" },
    { id: 4, description: "Update profile", status: "passed" },
    { id: 5, description: "Delete account", status: "failed" },
];

const outputResult = {
    passed: { count: 0, descriptions: [] },
    failed: { count: 0, descriptions: [] },
    skipped: { count: 0, descriptions: [] }
};

function summarizeResults(testCases) {
    for (let i = 0; i < testCases.length; i++) {
        if (testCases[i].status === "passed") {
            outputResult.passed.descriptions.push(testCases[i].description)
            outputResult.passed.count++
        }
        if (testCases[i].status === "failed") {
            outputResult.failed.descriptions.push(testCases[i].description)
            outputResult.failed.count++
        }
        if (testCases[i].status === "skipped") {
            outputResult.skipped.descriptions.push(testCases[i].description)
            outputResult.skipped.count++
        }
    }
}

summarizeResults(testCases)

console.log(JSON.stringify(outputResult))
