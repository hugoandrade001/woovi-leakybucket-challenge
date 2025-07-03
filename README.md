

# Woovi - Leaky Bucket Challenge

This is my solution for the Woovi Leaky Bucket Challenge.  
It implements the Leaky Bucket algorithm in TypeScript with unit tests using Jest.

## What is the Leaky Bucket?

The Leaky Bucket is a rate-limiting algorithm.  
Imagine a bucket with a small hole at the bottom — it leaks water at a fixed rate.

If the bucket overflows (too many requests), it rejects the excess.

## Project Structure

src/  
├── LeakyBucket.ts         - Core implementation of the Leaky Bucket  
├── LeakyBucket.test.ts    - Unit tests using Jest

## How to Run

1. Install dependencies

```bash
npm install

Run tests
npm test
You should see all unit tests pass.

*Features*
Accepts requests until the bucket is full

Leaks over time

Error handling for invalid inputs

Fully tested with Jest

Example Test Output
PASS src/LeakyBucket.test.ts
✓ allows requests when not full
✓ blocks requests when full
✓ leaks properly over time
✓ throws on negative tick time

✓ throws on negative config values

Author
Hugo Andrade,
GitHub: https://github.com/hugoandrade001
Linkedin: https://www.linkedin.com/in/hugo-andrade-barbosa-784943265/

Notes
This challenge was completed as part of the hiring process at Woovi.
The project was implemented with care, following the challenge instructions and good coding practices.
