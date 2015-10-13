<div class="events">
  <?php foreach(page('news/events')->children()->visible() as $item) : ?>
  <article itemscope itemtype="http://schema.org/Event">
    <header>
      <time itemprop="startDate" datetime="<?=$item->date('c')?>"><?=strftime('%e.<br>%b',$item->date('U'))?></time>
      <h1 itemprop="name"><?=$item->title()->html()?></h1>
      <?php if (!$item->time()->isEmpty()) : ?>
      <span class="time"><?=$item->time()->html()?></span>
      <?php endif ?>
      <?php if (!$item->time()->isEmpty() AND !$item->venue()->isEmpty()) : ?>
      –
      <?php endif ?>
      <?php if (!$item->venue()->isEmpty()) : ?>
      <span itemprop="location" itemscope itemtype="http://schema.org/Place"">
        <?= !$item->venue_link()->isEmpty() ? '<a href="'.$item->venue_link().'" target="_blank">' : null ?>
          <span itemprop="name"><?=$item->venue()?></span>
        <?= !$item->venue_link()->isEmpty() ? '</a>' : null ?>
        <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
          <meta itemprop="streetAddress" content="<?=$item->street()?>">
          <meta itemprop="postalCode" content="<?=$item->zip()?>">
          <meta itemprop="addressLocality" content="<?=$item->city()?>">
        </span>
      </span>
      <?php endif ?>
    </header>
    <div class="more">
      <?= !$item->text()->isEmpty() ? $item->text()->kirbytext() : null ?>
      <?= !$item->fb_link()->isEmpty() ? '<a itemprop="sameAs" href="'.$item->fb_link().'" class="button invert">FB-Event</a>' : null ?>
      <a href="<?=$item->url()?>" class="button invert">iCal</a>
    </div>
  </article>
  <?php endforeach ?>
</div>