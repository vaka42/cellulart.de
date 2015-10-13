<?php if(!defined('KIRBY')) exit ?>

title: Page
pages:
  template:
    - page
    - filmblock
    - competition
    - jury
files:
  sortable: true
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
          text:
            label: Text
            type: textarea
      gallery:
        label: Gallery
        entry: >
          {{images}}
        fields:
          images:
            label: Images
            type:  selector
            mode:  multiple
            autoselect: all
            types:
              - image
