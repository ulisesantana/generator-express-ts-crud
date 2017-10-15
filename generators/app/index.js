'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sublime ' + chalk.red('generator-express-ts-crud') + ' generator!'
    ));

    // const prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('src/app.ts'),
      this.destinationPath('src/app.ts')
    );
    this.fs.copy(
      this.templatePath('src/index.ts'),
      this.destinationPath('src/index.ts')
    );
    this.fs.copy(
      this.templatePath('src/config.ts'),
      this.destinationPath('src/config.ts')
    );
    this.fs.copy(
      this.templatePath('src/task/task.model.ts'),
      this.destinationPath('src/task/task.model.ts')
    );
    this.fs.copy(
      this.templatePath('src/task/task.router.ts'),
      this.destinationPath('src/task/task.router.ts')
    );
  }

  install() {
    console.log(git.user);
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
