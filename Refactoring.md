# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepraed to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In my refactored version of the deterministicPartitionKey function, I made several changes to improve its readability. First, I simplified the function by initializing the candidate variable to the trivial partition key value at the beginning, which eliminated the need for a separate check to assign a default value to candidate. Next, I combined the two nested if statements that checked whether event exists and event.partitionKey exists into a single if...else if statement, which reduced the code's nesting level and improved its readability. Finally, I reordered the conditional blocks so that the check for candidate.length > MAX_PARTITION_KEY_LENGTH was last, which made the code easier to read and ensured that the final candidate value returned was guaranteed to be within the maximum partition key length.

Overall, my refactored code is more readable than the original because it simplifies the logic and reduces the nesting level, making it easier to understand the function's behavior. By reordering the conditional blocks, it is also easier to see the overall flow of the function and how the different conditions are evaluated. Finally, by ensuring that the final candidate value returned is guaranteed to be within the maximum partition key length, the code is more robust and less prone to errors.

Here are the changes made to the original code:

1. Initialize candidate to TRIVIAL_PARTITION_KEY at the beginning of the function. This simplifies the code and avoids the need for a separate check later to assign a default value to candidate.
2. Combine the two if statements that check whether event exists and event.partitionKey exists into an if...else if statement. This improves the readability of the code and reduces the nesting level.
3. Move the check for typeof candidate !== "string" after the if...else if statement. This ensures that the candidate value is properly set before it is checked.
4. Reorder the conditional blocks so that the check for candidate.length > MAX_PARTITION_KEY_LENGTH is the last one. This makes the code easier to read and ensures that the final candidate value returned is guaranteed to be within the maximum partition key length.

This test suite includes three tests:

1. The first test checks that the function returns the trivial partition key of "0" when no input is provided.
2. The second test checks that the function returns the partition key that is given in the input event when it has a partition key.
3. The third test checks that the function returns a partition key for a valid input event. In this test, we're only checking that the result is a non-empty string, since we can't predict the exact hash value that the function will produce for this test case.
