<?php if(!defined('KIRBY')) exit ?>

title: Site
pages:
  template:
    - default
    - page
files: false
fields:
  title:
    label: Title
    type:  text
  meta_description:
    label: Meta Description
    type:  text
    required: true
  email:
    label: E-Mail
    type:  email
  facebook:
    label: Facebook Link
    type:  url
  twitter:
    label: Twitter Link
    type:  url
  vimeo:
    label: Vimeo Link
    type:  url
  startdate:
    label: Start Date
    type:  date
    width: 1/2
  enddate:
    label: End Date
    type:  date
    width: 1/2
  venue:
    label: Venue
    type:  text
