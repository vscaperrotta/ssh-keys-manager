[![Release](https://img.shields.io/badge/Release-1.0.0-brightgreen.svg)](https://github.com/vscaperrotta/react-ark.git) [![author](https://img.shields.io/badge/author-vscaperrotta-important)](https://github.com/vscaperrotta?)

<br/><br/>
<p align="center"><img src="build/icon.png" width="48" height="48"></p>
<br/><br/>

#  SSH Keys Manager

A modern desktop application for managing SSH keys with ease. Built with React and Electron, this tool provides a user-friendly interface to create, view, and delete SSH key pairs on your system.

## Table of Contents

- [SSH Keys Manager](#ssh-keys-manager)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [What this application contains](#what-this-application-contains)
- [Develop Dependencies](#develop-dependencies)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
    - [Install from source](#install-from-source)
  - [Application Structure](#application-structure)
  - [Build System](#build-system)
    - [Configuration](#configuration)
  - [How It Works](#how-it-works)
    - [Architecture](#architecture)
    - [SSH Key Operations](#ssh-key-operations)
    - [Internationalization](#internationalization)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Create SSH Keys**: Easily generate new SSH key pairs with customizable options
- **View Key Details**: Inspect both public and private keys with full details
- **Delete Keys**: Remove unwanted SSH keys with confirmation
- **Search Functionality**: Quickly find keys by name or content
- **Internationalization**: Available in English and Italian with automatic system language detection
- **Cross-Platform**: Works on macOS, Windows, and Linux (Electron-based)

## What this application contains

| ![react](docs/media/react.png) | ![redux](docs/media/redux.png) | ![router](docs/media/router.png) | ![sass](docs/media/logo-sass.png) | ![vitejs](docs/media/vite.svg) | ![Storybook](docs/media/storybook.png)
| - | - | - | - | - | - |
| React | Redux | Router | Sass | ViteJs | Storybook |

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

While developing, you will probably rely mostly on `yarn electron:serve`; however, there are additional scripts at your disposal:

| Command | Description |
| - | - |
| `yarn generate` | Generates new components, routes, and actions using plop templates |
| `yarn dev:client` | Starts the React client application in development mode |
| `yarn dev:server` | Starts the Express server in development mode |
| `yarn dev:storybook` | Runs Storybook for component development and documentation |
| `yarn build` | Builds the application for production |
| `yarn electron:serve` | Runs the application in Electron during development |
| `yarn electron:build` | Builds the Electron application for distribution |
| `yarn electron:start` | Starts Electron after the development server is ready |

## Application Structure

The application structure is **fractal**, where functionality is grouped primarily by feature rather than file type. The complete structure is documented in [MAP.md](./MAP.md).

Main directories overview:

```
/
├── config/           # Project configuration files
│   ├── global_vars.js
│   └── paths.js
├── docs/             # Documentation assets
├── generators/       # Code generators for components and routes
├── public/           # Public assets
├── src/              # Source code
│   ├── main/         # Electron main process
│   ├── preload/      # Electron preload scripts
│   ├── render/       # React application (renderer process)
│   │   ├── assets/   # Frontend assets
│   │   ├── components/ # UI components (Badge, Button, Modal, etc.)
│   │   ├── constants/  # Application constants
│   │   ├── containers/ # App container component
│   │   ├── i18n/     # Internationalization configuration and locales
│   │   ├── routes/   # Application routes
│   │   ├── stories/  # Storybook documentation
│   │   ├── styles/   # Global styles
│   │   └── utils/    # Frontend utilities
│   └── server/       # Express backend for SSH management
│       ├── index.js  # Server entry point
│       ├── keys.js   # SSH key routes handlers
│       ├── server.js # Express server configuration
│       └── utils.js  # Server utilities
└── utils/            # Global utility functions
```

## Build System

### Configuration

Default project configuration can be found in `~/vite.config.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation
settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here
**without ever having to touch the actual webpack build configuration**.

## How It Works

### Architecture

SSH Keys Manager follows a client-server architecture within the Electron application:

1. **Backend Server**: A Node.js Express server handles SSH key operations by interfacing with the filesystem.
2. **Frontend Client**: A React application provides the user interface and communicates with the server via REST API.
3. **Electron**: Packages everything into a native desktop application.

### SSH Key Operations

- **Listing Keys**: The app reads your `~/.ssh` directory and displays all key pairs.
- **Creating Keys**: Uses the `ssh-keygen` command with customizable parameters.
- **Viewing Keys**: Shows both public and private key contents with copy functionality.
- **Deleting Keys**: Removes the key files from your system after confirmation.

### Internationalization

The application automatically detects your system language and defaults to Italian or English accordingly. This is managed through the React-Intl library with translations stored in the `src/render/i18n/locales` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
