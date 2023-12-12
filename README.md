<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/unwrapped/assets/7949047/b8a01018-e5dd-4d0f-a5da-ab3cfe039862" width="100%" /></a>

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

---

<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/year-in-review/assets/7949047/8984725a-dcd0-4568-9922-9e50db20313f" width="100%" /></a>

## Welcome to **Unwrapped - by Middleware** :technologist:!  
This app is designed to provide you with insights into your coding activities throughout the year, think Spotify  Wrapped but for software developers.  

<h2 align='center'>🚀 Features 🚀</h2>

- **Code Contributions :medal_military:**: View a summary of your contributions to various repositories over the past year. See where you stand !
- **Productivity Insights :woman_technologist:**: Discover how long you spent waiting for reviews, and who helped you out the most with code reviews.
- **Repo Highlights**: Highlight noteworthy projects you worked on during the year.
- **Coding Habits :owl:**: Gain insights into your coding habits, such as peak coding hours and most active days.
- **Cobtribtuion Styles :evergreen_tree:**: Are you pushing your code, or are you stuck in Pull Request Reviews ?
- **Catching fires before they spread :firefighter:**: Are you often requesting changes and finding bugs before they reach production ?
- **And Much More :woman_astronaut:**

<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/unwrapped/assets/7949047/390e9d7a-183e-41c6-bcde-599d91df732f" width="100%" /></a>

<h2 align='center'>🧑‍💻 Project Setup 🧑‍💻</h2>

<h3>Environment Setup</h3>

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
  
<h3>CodeBase Setup</h3>

- [Fork and Clone the Repository.](https://foundations.projectpythia.org/foundations/github/github-cloning-forking.html)
- In the project repostory `/unwrapped` install dependancies.
   ```
   yarn install
   ```
- [Setup a Github Oauth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) for `GITHUB_ID` and `GITHUB_SECRET`.
- [Obtain Next Auth Secret](https://next-auth.js.org/configuration/options)
- [Generating `TOKEN_ENC_PUB_KEY` and `TOKEN_ENC_PRI_KEY` RSA Key pair](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- Add a config file names `.env.local` with the following structure:
  ```
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

<h3>Optional Keys and Behaviors</h3>

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


## License
This project is licensed under the MIT License - see the LICENSE.md file for details.


<a href="https://unwrapped.dev"><img src="https://github.com/middlewarehq/unwrapped/assets/7949047/49024f49-86bc-49d5-acb6-3cc8037bface" width="100%" /></a>
