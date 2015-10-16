<?php if(!defined('KIRBY')) exit ?>

title: Member Entry
pages: false
preview: parent
files:
  types:
    - image
fields:
  title:
    label: Title
    type:  text
  assignment:
    label: Assignment
    type:  text
  text:
    label: Text
    type:  textarea
    buttons:
      - link
      - email
  photo:
    label: Photo
    type:  selector
    mode:  single
    autoselect: first
    types:
      - image
