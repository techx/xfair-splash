# xfair-splash

This is the xFair 2020 splash page: [https://xfair.io](https://xfair.io)

It's built using [Jekyll](https://jekyllrb.com/), a static site generator written in Ruby and natively supported by Github pages.

Most things are hard coded into `index.html`, but some links are stored in `_config.yml`.

Styles are written in SCSS and broken up into partials in the `_sass` directory.

**To run locally**, you'll need Jekyll installed. See [instructions](https://jekyllrb.com/docs/installation/). `cd` into the project folder and run `jekyll serve`. This will compile and serve the website on `localhost:4000` and also generate the static files in `_site`.