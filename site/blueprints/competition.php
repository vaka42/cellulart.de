<?php if(!defined('KIRBY')) exit ?>

title: Competition
pages:
  template:
    - filmblock
files: true
fields:
  title:
    label: Title
    type:  text
  meta_description:
    label: Meta Description
    type:  text
  builder:
    label: Sections
    type: builder
    fieldsets:
      text:
        label: Text
        entry: >
          <h1>{{h1}}</h1>
          {{text}}
        fields:
          h1:
            label: Title
            type: textarea
            buttons:
              - link
          text:
            label: Text
            type: textarea
      gallery:
        label: Gallery
        entry: >
          {{images}}
        fields:
          title:
            label: Title
            type:  text
          images:
            label: Images
            type:  selector
            mode:  multiple
            autoselect: all
            types:
              - image