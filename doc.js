const Docma = require('docma');

const config = {
    src: [
        './dist/*.js',
        './README.md'
    ],
    dest: './docs'
};
Docma.create()
    .build(config)
    .catch(error => {
        console.log(error);
    });