#!/bin/sh
if [[ $1 ]]; then
    filename=$1
    touch ./src/js/$filename.js
    touch ./src/view/$filename.pug
    touch ./src/scss/$filename.scss
fi