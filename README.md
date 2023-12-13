
[![Unwrapped Logo](https://github.com/middlewarehq/unwrapped/assets/7949047/b8a01018-e5dd-4d0f-a5da-ab3cfe039862)](https://unwrapped.dev)

<blockquote align="center">
  <h3>
    <i>
      Spotify Unwrapped - for devs
      <br/>
      Showcase your contributions just like you flex your music!
      <br />
      Check it out at https://unwrapped.dev
    </i>
  </h3>
</blockquote>

# Unwrapped - by Middleware      <a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/unwrapped/assets/7949047/10114508-10be-4a94-b950-2ffaed3cd3c8" width="5%" align='right' /></a>

![Stargazers](https://img.shields.io/github/stars/middlewarehq/unwrapped?style=social) 
![Forks](https://img.shields.io/github/forks/middlewarehq/unwrapped?style=social) 
![Contributors](https://img.shields.io/github/contributors/middlewarehq/unwrapped?color=dark-green) 
![Issues](https://img.shields.io/github/issues/middlewarehq/unwrapped) 
![License](https://img.shields.io/github/license/middlewarehq/unwrapped) 



Welcome to **Unwrapped - by Middleware**! This application is designed to provide software developers with insights into their coding activities throughout the year, much like Spotify Wrapped for developers.

---

<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/year-in-review/assets/7949047/8984725a-dcd0-4568-9922-9e50db20313f)](https://unwrapped.dev" width="100%" align='center' /></a>

<h1 align='center'>🚀 Features 🚀</h1>

- **Code Contributions 🎖️**: Explore a comprehensive summary of your contributions across various repositories over the past year. Discover where you stand among your peers!
- **Productivity Insights ⏱️**: Uncover the duration spent waiting for reviews and identify key collaborators who aided you the most with code reviews.
- **Repo Highlights 🌟**: Showcase standout projects you've engaged with throughout the year.
- **Coding Habits 🦉**: Gain insights into your coding patterns, including peak coding hours and most active days.
- **Contribution Styles 🌲**: Identify your contribution tendencies—whether you're actively pushing code or deeply involved in Pull Request Reviews.
- **Detecting Fires Early 🚒**: Proactively identify issues, request changes, and intercept bugs before they reach production.
- **And Much More 🚀**


<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/unwrapped/assets/7949047/390e9d7a-183e-41c6-bcde-599d91df732f" width="100%" /></a>

<h1 align='center'>🧑‍💻 Project Setup 🧑‍💻</h1>

### Environment Setup

 - Yarn Installation:
    - Open a terminal and run the following commands:
       ```
       curl -o- -L https://yarnpkg.com/install.sh | bash
       ```
      Then, add Yarn to your shell configuration file (e.g., .bashrc or `.zshrc):
      ```
      export PATH="$HOME/.yarn/bin:$PATH"
      ```
- Node.js Installation:
    - Use Node Version Manager (nvm) to install Node.js version 20.00:
      ```
       curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
      ```
      Rstart your terminal and install node.
      ```
      nvm install 20.10.0
      nvm use 20.10.0
      ```
### CodeBase Setup

1. [Fork](https://github.com/middlewarehq/unwrapped/fork) and [Clone](https://github.com/middlewarehq/unwrapped.git) the Repository.
2. Inside the project repository `/unwrapped`, install dependencies:
  ```bash
  yarn install
  ```

## Configuration Setup

1. [Setup a Github Oauth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app): Obtain `GITHUB_ID` and `GITHUB_SECRET`.
2. [ Next Auth Secret](https://next-auth.js.org/configuration/options): Configure NextAuth.
3. [RSA Key Pair Generation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent): Generate `TOKEN_ENC_PUB_KEY` and `TOKEN_ENC_PRI_KEY`.
4. Create a `.env.local` file with the following structure:
    ```bash
    NEXT_PUBLIC_APP_ENVIRONMENT="development"
    NEXT_PUBLIC_TEST_ENVIRONMENT="development"
    NEXTAUTH_URL=http://localhost:3000
    GITHUB_ID=GITHUB_ID
    GITHUB_SECRET=GITHUB_SECRET
    NEXTAUTH_SECRET=NEXTAUTH_SECRET
    NEXT_PUBLIC_MIXPANEL=NEXT_PUBLIC_MIXPANEL
    TOKEN_ENC_PUB_KEY=TOKEN_ENC_PUB_KEY
    TOKEN_ENC_PRI_KEY=TOKEN_ENC_PRI_KEY
    ```

## Optional Keys and Behaviors
You can append these extra keys to your env file to unlock more functioanlity offered by third party services.

 - AWS Credentials
    - These are optional, if you dont have an AWS account, just remove these keys fron the env file.
    - Without AWS creds, the generate cards are stored under `unwrapped-cards` directory under the project. This is generated by default, and stores the cards in nested directories of the format `{ROOT}/unwrapped/unwrapped-cards/[user_login]`
    ```
    AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY
    AWS_REGION=AWS_REGION
    UNWRAPPED_PERSISTENCE_BUCKET_NAME=UNWRAPPED_PERSISTENCE_BUCKET_NAME
    ```
    
  - [Mixpanel](https://mixpanel.com/) Creds can be added to track usage metrics.
    ```
    NEXT_PUBLIC_MIXPANEL=NEXT_PUBLIC_MIXPANEL
    ```
  - [Sentry](https://sentry.io/) Creds are optional for Issue Tracking.
    ```
    SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
    ```

# License

This project is licensed under the [MIT License](https://github.com/middlewarehq/unwrapped/blob/main/LICENSE.md) - see the LICENSE.md file for details.


<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/unwrapped/assets/7949047/49024f49-86bc-49d5-acb6-3cc8037bface" width="100%" /></a>
