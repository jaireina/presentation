#!/usr/bin/env node
const figlet = require('figlet');
const colors = require('colors/safe');

figlet('Jair  Reina', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    log(data);
    log('\t\t--------------');
    log('\n');
    log(`Hi! I'm Jair (a.k.a. @jaireina) Thanks for reaching out. \nLet's connect in any of my social media channels:`)
    log('\n');
    log(`  > LinkedIn: https://www.linkedin.com/in/jaireina/`);
    log(`  > Instagram: https://www.instagram.com/jaireina/`);
    log(`  > Twitter: https://twitter.com/jaireina`);
    log(`  > Medium: https://medium.com/@jaireina`);
    log(`  > Quora: https://www.quora.com/profile/Jair-Reina`)
    log('\n');
});

function log(text){
  console.log(colors.black.bgCyan(text));
}