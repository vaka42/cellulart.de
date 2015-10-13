<?php if(!defined('KIRBY')) exit ?>

title: Association
pages:
  template:
    - page
    - becoma-a-member
    - member
    - sponsors
files:
  sanitize: false
  fields:
    caption:
      label: Caption
      type:  text
fields:
  title:
    label: Title
    type:  text
  meta_description:
    label: Meta Description
    type:  text
  team_photo:
    label: Team Photo
    type:  selector
    mode:  single
    autoselect: first
    types:
      - image
