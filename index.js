#!/usr/bin/env node
const figlet = require('figlet');
const inquirer = require('inquirer');
const colors = require('colors/safe');

const COLORS = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white'
];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's your name"
    },
    {
      type: 'list',
      name: 'color',
      message: 'Choose a text color',
      choices: COLORS,
      default: 'white'
    },
    {
      type: 'list',
      name: 'bgColor',
      message: 'Choose a background color',
      choices: COLORS,
      default: 'black'
    }

  ]).then(({name, color, bgColor})=>{
    name = name.trim()==='' ? "C3PO":name;
    bgColor = `bg${bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}`;

    figlet(name, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(colors[color][bgColor](data));
    });
  })