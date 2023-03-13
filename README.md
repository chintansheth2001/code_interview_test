## Code test

# Preparation: Install VS Code + Live share extension.

Run from project root: "yarn install", "yarn test" to get started. This is not UI related and it is not needed for finishing these tests. It is about building basic React components making the test cases run. Most test cases are disabled by default, you will have to enable the rest of the test-cases manually by un-commenting.

# Instructions:

In /src/codetest you'll find the folders - 1, 2 and 3.

These contains

1 > Test1.tsx, Test1.test.tsx
2 > Test2.tsx, Test2.test.tsx
3 > Test3.tsx, Test3.test.tsx

Your goal is to make every test pass in every \*.test.tsx file.

Test1 is React focused
Test2 is TypeScript focused
Test3 is a more advanced level of the above

You are NOT allowed to alter the actual TESTS in the .test.tsx files (of course removing the comments and enabling the tests are ok), they should remain as they are, all code you write should be added in Test1.tsx, Test2.tsx and Test3.tsx.

Recommendation is to start with Test1 and uncomment every test one by one and make the code run for each test case until you have finished all.

There should be no warnings, errors from either Typescript or eslint present.

# Disclaimer

Test 1

The import: import { useGetItems } from "@/data/useGetItems"; Is needed to finish this test.
