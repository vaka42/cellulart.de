<?php if(!defined('KIRBY')) exit ?>

title: Film (Award)
pages: false
preview: parent
files:
  type:
    - image
    - video
fields:
  subtitle:
    label: Actor/DoP (who whon the award)
    type:  text
  title:
    label: Title
    type:  text
  still:
    label: Film Still
    type:  selector
    mode:  single
    autoselect: first
    width: 1/2
    types:
      - image
  video:
    label: Film Video
    type:  selector
    mode:  single
    autoselect: first
    width: 1/2
    types:
      - video
  type:
    label: Type
    type:  select
    default: false
    options:
      Feature Film: Feauture Film
      Animation: Animation
      Documentation: Documentation
      Mockumentary: Mockumentary
      Experimental: Experimental
      Music Video: Music Video
    width: 1/2
  country:
    label: Country
    type:  multiselect
    default: Germany
    options:
      Germany: Germany
      France: France
      Spain: Spain
      Portugal: Portugal
      USA: USA
      United Kingdom: United Kingdom
      Great Britain: Great Britain
      England: England
      Switzerland: Switzerland
      Austria: Austria
      Canada: Canada
      The Netherlands: The Netherlands
      Belgium: Belgium
      Kosovo: Kosovo
      Romania: Romania
      Brasil: Brasil
      Ireland: Ireland
      Northern Ireland: Northern Ireland
      Iran: Iran
      Norway: Norway
      Italy: Italy
      Armenia: Armenia
      Scotland: Scotland
      Denmark: Denmark
      Luxembourg: Luxembourg
      Indonesia: Indonesia
      China: China
      Turkey: Turkey
      Afghanistan: Afghanistan
      Croatia: Croatia
      Poland: Poland
    width: 1/2
  year:
    label: Year
    type:  number
    placeholder: YYYY
    default: false
    width: 1/2
  duration:
    label: Duration
    type:  text
    placeholder: M:SS
    width: 1/2
  book:
    label: Book
    type:  text
    width: 1/2
  direction:
    label: Direction
    type:  text
    width: 1/2
  camera:
    label: Camera
    type:  text
    width: 1/2
  animation:
    label: Animation
    type:  text
    width: 1/2
  text:
    label: Text
    type:  textarea
    buttons: false