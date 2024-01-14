# OAuth Testing App 🚀

## 🎯 Overview

Built by [RankRush.gg](https://rankrush.gg) during the Starknet Fellowship, Cohort 1.

This app is a playground for learning OAuth flows. It's designed to verify chess.com accounts and interface with Cairo contracts, proving user reputations on-chain. Currently featuring Instagram API integration, this tool is a stepping stone towards seamless digital identity verification. Crafted with Bun and Next.js, it's our first foray into connecting gaming prowess to the blockchain realm. 🎮⛓️

## 🌟 Features

- OAuth Login
- Account verification for instagram.com
- Instagram API integration for fetching user and media insights
- Local server tunneling via ngrok for development and testing

## 🛠 Installation

You'll need a couple of things:

- Bun, your speedy JavaScript buddy
- An Instagram dev account for those secret keys
- An ngrok account to make your local server famous

### 🗝️ Setup API Keys

Follow the Instagram [documentation](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started) to setup your app and get your keys. Also, it's recommended that your redirect_uri ends with /auth.

Rename `.env.example` to `.env.local` and fill it with your details:

```plaintext
CLIENT_ID=your-instagram-client-id
CLIENT_SECRET=yout-instagram-client-secret
REDIRECT_URI=your-ngrok-redirect-uri
BASE_URL=your-ngrok-base-url
```

### 🦾 Install & Run

With Bun:

```sh
bun install
```

And then let it run:

```sh
bun dev
```

## 🚧 Setup Ngrok

This is needed to work on localhost with Instagram's redirect_uri. This is because localhost does not run https. Ngrok will create a tunnel to your local server and provide you with a https url.

1. Sign up at [ngrok's website](https://ngrok.com/).
2. Download and connect your account.
3. Start your tunnel:

```sh
ngrok http --domain=<yourdomain.ngrok-free.app> 3000
```

## 🚗💨 Test Drive Instagram

After adding a user from the API portal, make sure you accept dev invite in your instagram Settings>Website Permissions>TesterInvites. Then set up, log in, and marvel at your Instagram insights!

## 📷 Screenshots

Check these out to see what's in store:

## Contribute 🌟

Got a bright idea? Jump in and share!
