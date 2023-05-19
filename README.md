# Remove Duplicates From Mock Knack Application Schema

This coding exercise is Node.js application that programmatically remove all duplicate fields and objects from the given mock application schema and output a new sanitized version.

The "mock_application.json" file in this repository contains data which represents an actual Knack application 
schema including all currently existing properties. This process the data, remove any duplicates, 
and output a new JSON file "clean_application.json" which retains all other properties of the Knack application.

This application its focused to process the objects inside `versions` property which has 2 collections:
1. `objects`: an array of Knack "objects" which contains "fields"
2. `scenes`: an array of Knack "scenes" which contains "views"

In future releases, the app should process other properties outside `versions` property.

## Requirements

For development, you will only need Node.js and a node global package.

The app was been developed with following versions.
- Node.js >=14.21.1
- Npm >= 6.14.17


## Installation

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

Then you need to install all dependencies defined in package.json

    $ npm install


## Usage

Open your terminal on project's folder and run the command:

```
ts-node src/index.ts

```

You shoud view on console the message "Sanitization process finished" if all worked fine. 

Also, the project has a basic test in folder `__tests__` made with "Jest". Simply run `npm test` command script to run it.

```
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

__Please make sure to update tests as appropriate.__

## Author
Cesar Benitez
[Github](https://github.com/hymanoide)
[LinkedIn](https://www.linkedin.com/in/cesar-benitez-losada)
[Instagram](https://www.instagram.com/hymanoide/)



## License

No License 

