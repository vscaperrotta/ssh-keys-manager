# SSH Key Manager - Project Directory Layout

```bash
root_dir (ssh-manager-master)
│
├── src                      # Source code directory
│   ├── main                 # Main process (Electron)
│   │   └── index.js         # Main entry point
│   │
│   ├── preload              # Preload scripts (Electron)
│   │   └── index.js         # Preload script entry point
│   │
│   ├── render               # Renderer process (React application)
│   │   ├── index.jsx        # Renderer entry point
│   │   │
│   │   ├── assets           # Static assets
│   │   │   └── ...          # SVG and other assets
│   │   │
│   │   ├── components       # React components
│   │   │   ├── Badge        # UI Badge component
│   │   │   ├── Button       # UI Button component
│   │   │   ├── Card         # UI Card component
│   │   │   ├── Divider      # UI Divider component
│   │   │   ├── Header       # Header component
│   │   │   ├── LanguageSwitcher # Language switching component
│   │   │   ├── Modal        # Modal dialog component
│   │   │   ├── ModalDeleteKey # Key deletion modal
│   │   │   ├── ModalDetail  # Key detail modal
│   │   │   ├── ModalNewKey  # New key creation modal
│   │   │   ├── SearchBar    # Search component
│   │   │   └── Table        # Data table component
│   │   │
│   │   ├── constants        # App constants
│   │   │   └── config_env.js # Environment configuration
│   │   │
│   │   ├── containers       # App containers
│   │   │   └── App.jsx      # Main app container
│   │   │
│   │   ├── i18n             # Internationalization
│   │   │   ├── index.js     # i18n configuration
│   │   │   └── locales      # Language files
│   │   │       ├── en.js    # English translations
│   │   │       └── it.js    # Italian translations
│   │   │
│   │   ├── routes           # Application routes
│   │   │   ├── routes.jsx   # Route definitions
│   │   │   └── Home         # Home page component
│   │   │       ├── Home.jsx
│   │   │       └── Home.scss
│   │   │
│   │   ├── stories          # Storybook documentation
│   │   │   ├── colors.mdx
│   │   │   ├── iconography.mdx
│   │   │   ├── introduction.mdx
│   │   │   └── typography.mdx
│   │   │
│   │   ├── styles           # Global styles
│   │   │   ├── fonts.scss
│   │   │   ├── global.scss
│   │   │   ├── storybook.scss
│   │   │   ├── config       # Style configuration
│   │   │   └── layout       # Layout styles
│   │   │
│   │   └── utils            # Utility functions
│   │       ├── action.js
│   │       └── globalMethods.js
│   │
│   └── server               # Backend server
│       ├── index.js         # Server entry point
│       ├── server.js        # Express server setup
│       ├── keys.js          # SSH keys routes
│       └── utils.js         # Server utilities
│
├── config                   # Project configuration
│   ├── global_vars.js       # Global variables
│   └── paths.js             # Path configurations
│
├── docs                     # Documentation
│   └── media                # Documentation media files
│       └── ...              # Documentation images
│
├── generators               # Code generators
│   ├── index.js             # Generator entry point
│   ├── component            # Component generator
│   │   └── ...
│   └── route                # Route generator
│       └── ...
│
├── public                   # Public assets
│   └── env_config.js        # Public environment config
│
├── utils                    # Global utilities
│   ├── logger.js            # Logging utility
│   └── utils.js             # General utilities
│
├── .eslintrc.json          # ESLint configuration
├── .gitattributes          # Git attributes
├── .gitignore              # Git ignore patterns
├── .markdownlint.json      # Markdown linting config
├── .nvmrc                  # Node version manager config
├── .prettierrc             # Prettier code formatter config
├── AUTHORS.md              # Project authors
├── index.html              # HTML entry point
├── LICENSE.md              # Project license
├── MAP.md                  # This project map
├── package.json            # Node.js dependencies
├── README.md               # Project readme
├── TODO.md                 # Project todo list
└── vite.config.js          # Vite bundler configuration
```
```
