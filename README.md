# flamebot
An Incomplete implementation of Telegram Bot SDK for Cloudflare.

## Why Develop Another Telegram Bot SDK?

While the Telegram Bot SDK NPM packages are excellent, they cannot be used in Cloudflare Workers due to their close association with the NodeJS runtime. As a result, I have **re-implemented** an incomplete SDK specifically for Cloudflare.

As I have limited time and energy, I have added features based on my own needs. However, anyone is welcome to submit Pull Requests if they require additional features.

## How to use
See [tests](./src/bots.test.ts)
