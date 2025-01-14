<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk and Express Quickstart
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

To run the repo locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart) and create an application.

3. Run this command in your terminal:
```bash
git clone https://github.com/clerk/clerk-express-quickstart
cd clerk-express-quickstart
```

4. In one tab of your terminal, navigate into the `server` directory. This is where the Clerk Express SDK runs.
```bash
cd server
```

5. Set the required Clerk environment variables as shown in [the example `env.example` file](./.env.example). You can find your Clerk environment variables on the [**API Keys**](https://dashboard.clerk.com/last-active?path=api-keys) page in the Clerk Dashboard.

7. `npm install` the required dependencies.

8. `npm run dev` to launch the development server.

9. In another tab of your terminal, navigate into the `client` directory. This is where the Clerk React SDK runs.
```bash
cd clerk-express-quickstart
cd client
```
> [!NOTE]
> You must have both the client and server running at the same time.

10. Set the required Clerk environment variables as shown in [the example `env.example` file](./.env.example). You can find your Clerk environment variables on the [**API Keys**](https://dashboard.clerk.com/last-active?path=api-keys) page in the Clerk Dashboard.

11. `npm install` the required dependencies.

12. `npm run dev` to launch the development server.

13. In one browser tab, isit `localhost:5173` and click the sign-in button to sign in.

14. In another browser tab, visit `localhost:3000/protected` and your user's `User` object should be displayed.

## Learn more

To learn more about Clerk and Express or Clerk and React, check out the following resources:

- [Quickstart: Get started with Clerk and Express](https://clerk.com/docs/quickstarts/express?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart)
- [Express reference documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart)
- [React reference documentation](https://clerk.com/docs/references/react/overview?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart)

## Found an issue?

If you have found an issue with the quickstart, please create an [issue](https://github.com/clerk/clerk-express-quickstart/issues).

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue.
Go ahead and create a [pull request](https://github.com/clerk/clerk-express-quickstart/pulls) with the solution. :rocket:

## Want to leave feedback?

Feel free to create an [issue](https://github.com/clerk/clerk-express-quickstart/issues) with the **feedback** label. Our team will take a look at it and get back to you as soon as we can!

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
