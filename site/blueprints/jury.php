<?php if(!defined('KIRBY')) exit ?>

title: Jury
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  meta_description:
    label: Meta Description
    type:  text
  builder:
    label: Jury
    type:  builder
    fieldsets:
      jury-title:
        label: Title
        entry: >
          <h1>{{title}}</h1>
        fields:
          title:
            label: Title
            type:  text
      jury-member:
        label: Jury Member
        entry: >
          {{name}}
        fields:
          name:
            label: Name
            type:  text
          image:
            label: Image
            type:  selector
            mode:  single
            types:
              - image
          text:
            label: Text
            type:  textarea
