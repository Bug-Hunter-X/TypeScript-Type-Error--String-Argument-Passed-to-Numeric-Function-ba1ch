# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript where a string is passed as an argument to a function that expects a number. The error is caught by the TypeScript compiler, preventing runtime errors.

## Bug

The `bug.ts` file contains a function `add` that expects two numbers. However, it's called with a string and a number which causes a type error.

## Solution

The `bugSolution.ts` file demonstrates how to fix this type error by ensuring the correct types are used.