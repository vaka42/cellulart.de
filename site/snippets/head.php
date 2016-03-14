<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <?php if ($page->template() == 'news_entry'): ?>
  <meta name="desciption" content="<?= $page->text()->excerpt(140) ?>">
  <meta property="og:description" content="<?= $page->text()->excerpt(420) ?>">
  <?php else: ?>
  <meta name="desciption" property="og:description" content="<?= !$page->meta_description()->isEmpty() ? $page->meta_description() : $site->meta_description() ?>">
  <?php endif; ?>
  <meta property="og:title" content="<?=$page->title()?>">
  <meta property="og:site_name" content="<?=$site->title()?>">
  <?php if ($page->template() == 'news_entry' AND $page->hasImages()): ?>
  <meta property="og:image" content="<?=$page->image()->url()?>">
  <?php else: ?>
  <meta property="og:image" content="<?=url('assets/images/fb-share-image.jpg')?>">
  <?php endif; ?>
  <meta property="og:url" content="<?=$page->url()?>">
<?php if($site->language()->code() == 'en') : ?>
  <meta property="og:locale" content="<?=$site->language('en')->locale()?>">
  <meta property="og:locale:alternate" content="<?=$site->language('de')->locale()?>">
<?php else: ?>
  <meta property="og:locale" content="<?=$site->language('de')->locale()?>">
  <meta property="og:locale:alternate" content="<?=$site->language('en')->locale()?>">
<?php endif ?>

  <link rel="stylesheet" href="<?=url('assets/css/style.css')?>">
<?php if($site->language()->code() == 'de') : ?>
  <link rel="alternate" hreflang="en" href="<?=$page->url('en')?>">
<?php else: ?>
  <link rel="alternate" hreflang="de" href="<?=$page->url('de')?>">
<?php endif ?>
<?php if ($page->isHomePage() || $page->uid() === 'news'): ?>
  <link rel="alternate" type="application/rss+xml" href="<?= url('news/rss') ?>" title="News Feed" />
<?php endif ?>
  <link rel="apple-touch-icon" href="<?=url('assets/images/apple-touch-icon.png')?>">

  <script src="<?=url('assets/js/script.js')?>" defer></script>

  <title><?= !$page->isHomePage() ? strtolower($page->title()->html()).' - ' : null ?><?=$site->title()->html()?></title>

</head>
