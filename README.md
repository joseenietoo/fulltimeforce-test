## Before You Go - Prerequisites
You must have the following installed on your host
* Git > v2.25.1
* Node.js > v16.13.0 and <= 18.x.x
* Node Package Manager (NPM v8.1.0 or more)

You should have the following installed on your host
* Yarn v1.22.19 or more

## Open terminal or cmd, clone repository and access root directory
```
# clone repository
git clone https://github.com/joseenietoo/fulltimeforce-test.git

# access root directory
cd fulltimeforce-test
```

## Getting Started

Create .env file in project root directory with following
```
NEXT_PUBLIC_GITHUB_URL_REPO="https://github.com/joseenietoo/fulltimeforce-test.git"
GITHUB_API_TOKEN="PUT_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE"
```

# install dependencies
yarn

# init dev server
yarn dev

# or optionally make an optimized for production with
yarn build && yarn start

```

## See Results in the Frontend
Open your web browser and enter "localhost:3000" on search bar and press enter key. 

If you need to update data, please click the blue button (REFRESH) or press F5.

Enjoy!

