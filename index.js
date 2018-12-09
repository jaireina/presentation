#!/usr/bin/env node
const figlet = require('figlet');

figlet('Jair  Reina', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    console.log('\t\t--------------');
    console.log('\n');
    console.log(`Hi! I'm Jair (a.k.a. @jaireina) Thanks for reaching out. \nLet's connect in any of my social media channels:`)
    console.log('\n');
    console.log(`  > LinkedIn: https://www.linkedin.com/in/jaireina/`);
    console.log(`  > Instagram: https://www.instagram.com/jaireina/`);
    console.log(`  > Twitter: https://twitter.com/jaireina`);
    console.log(`  > Medium: https://medium.com/@jaireina`);
    console.log(`  > Quora: https://www.quora.com/profile/Jair-Reina`)
    console.log('\n');
});