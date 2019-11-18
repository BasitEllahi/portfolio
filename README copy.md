# APPEEL.IO

The homepage of our wonderful company called Appeel.io.

Technologies used:

-   Node.js
-   Yarn (package manager)
-   Gatsby (React)
-   ESLint (to have consistent pretty code)
-   Prettier (extension to ESLint)
-   Husky (for pre-commit hooks, and other potential uses)
-   Wordpress (as backend for our blogposts)
-   Netlify (to deploy the website easily)

Here's how you can set up your own local version of this project:

## 🚀 Quick start

**Install the Gatsby CLI.**

The Gatsby CLI helps you create new sites using Gatsby starters or deploy local and/or live versions of Gatsby projects.

```sh
# install the Gatsby CLI globally
npm install -g gatsby-cli
```

**Clone the Appeel.io project**

Clone the Appeel.io project and navigate into the newly made folder

```sh
# Clone the project
git clone git@bitbucket.org:appeelio/appeel.io.git

# Navigate to our cloned project folder
cd appeel.io
```

**Install dependencies**

Assuming Yarn is installed on your device, execute the command to install all dependencies. ([Get Yarn](https://yarnpkg.com/en/docs/install))

```sh
# Install dependencies
yarn
```

**Deploy website locally**

```sh
# Deploy development website
gatsby develop
```

**Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

Open the the `appeel.io` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Setting up Wordpress

The blogposts are retrieved from an external Wordpress website.  
To show the blogposts, and update the website on a new/updated post, there are a couple of things that work in tandem:

1. gatsby-source-wordpress plugin takes care of fetching blogposts, and dynamically creating the required pages
2. Netlify with a build hook url
3. Separate Wordpress website with the following plugins:
    - [Better REST API Featured Images](https://nl.wordpress.org/plugins/better-rest-api-featured-images/) (4.6.12)
    - [Notification](https://nl.wordpress.org/plugins/notification/) (5.4.2)
    - A theme that supports a Featured Image (uitgelichte afbeelding)

**Configure gatsby-source-wordpress**

In `gatsby-config.js`, make sure the `baseUrl` and `protocol` are correct and referring to your Wordpress blog.  
This is pretty much all you have to do in order to generate your blogposts.

**Configure Netlify**

In your Netlify control panel, navigate to your website and `Site Settings`

On the `Site Settings`, go to `Build & Deploy` and find the `Build hooks` section.

Click `Add build hook`, choose the branch you want to build from, give it a name and press save.

You should see your newly built hook name, and a url next to it. Copy this url for later.

**Configure Wordpress**

Make sure the plugins mentioned earlier are installed on your blog.

`Better REST API Featured Images` doesn't need any configuration.

`Notification` does require some setting up:

-   Navigate to `Notifications` in your wp-admin dashboard.
-   We have to create 3 notifications for our purposes:
    -   Update on new post
    -   Update on updated post
    -   Update on delete post

For each notification, go through the following steps:

-   Press `Add New Notification`
-   Give it a name
-   Choose the trigger (for the 3 notifications respectively):
    -   Post Published
    -   Post Updated
    -   Post Trashed
-   Toggle the `Webhook` option, so it's active
-   In the `Webhook` settings, all we need to do is `Add URL`
    -   Type is `POST`
    -   URL is the webhook url we made earlier on Netlify
-   Save it

Once set up, your Wordpress will automatically `POST` to the Netlify build hook when the blog gets updated, which then causes a new Netlify build to be deployed.

## 🧐 What's inside?

A quick look at the top-level files and directories currently present in the project:

    .
    ├── node_modules
    ├── src
        ├── assets
        ├── components
        ├── containers
        ├── helpers
        ├── layouts
        ├── pages
        ├── sections
        ├── styles
        ├── style-utils.js
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock

1. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.
2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
4. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
9. **`LICENSE`**: Gatsby is licensed under the MIT license.
10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
11. **`README.md`**: A text file containing useful reference information about your project.
12. **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.
