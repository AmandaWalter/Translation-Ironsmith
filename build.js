var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    templates = require('metalsmith-templates');

Metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .destination('./build')
  .build(function (err) {if(err) console.log(err) })

Handlebars = require('handlebars'),
fs = require('fs');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

