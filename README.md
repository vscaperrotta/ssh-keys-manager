[![Release](https://img.shields.io/badge/Release-1.0.0-brightgreen.svg)](https://github.com/vscaperrotta/react-ark.git) [![author](https://img.shields.io/badge/author-vscaperrotta-important)](https://github.com/vscaperrotta?)

# SSH Keys Manager

Tool to manage your SSH keys based on React and Electron.

## Table of Contents

- [SSH Keys Manager](#ssh-keys-manager)
  - [Table of Contents](#table-of-contents)
  - [What this boilerplate contains](#what-this-boilerplate-contains)
- [Develop Dependencies](#develop-dependencies)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
    - [Install from source](#install-from-source)
  - [Application Structure](#application-structure)
  - [Build System](#build-system)
    - [Configuration](#configuration)

## What this boilerplate contains

| ![react](docs/media/react.png) | ![redux](docs/media/redux.png) | ![router](docs/media/router.png) | ![sass](docs/media/logo-sass.png) | ![vitejs](docs/media/vite.svg) |
| - | - | - | - | - |
| React | Redux | Router | Sass | ViteJs |

# Develop Dependencies

## Requirements

- [Node](http://nodejs.org/download/) (version >= 22.16.x)

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements).

### Install from source

First, clone the project:

```bash
git clone https://github.com/vscaperrotta/ssh-manager.git
cd ssh-manager
```

Install all dependencies and start electron view

```bash
yarn install && yarn electron:dev
```

If everything works, you should see the homepage

While developing, you will probably rely mostly on `npm run dev`; however, there are additional scripts at your disposal:

| Command | Description |
| - | - |
| `build` | Compiles the application to disk (`~/dist`). |
| `commit` | Start the commit process from the command |
| `dev` | Serves your app at `localhost:5174`. |
| `generate` | Starts the generator prompt. Read more about this in [GENERATORS]. |
| `git-cz` | Start the commitizen flow. |
| `preview` | Vite Js preview |

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note,
however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and
patterns for building scalable applications. If you wish to read more about this pattern, please check out this
[awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

## Build System

### Configuration

Default project configuration can be found in `~/vite.config.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation
settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here
**without ever having to touch the actual webpack build configuration**.
