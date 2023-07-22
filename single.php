<?php get_header(); ?>

<div class="container mx-auto">
  <?php	if ( have_posts() ) {
    while ( have_posts() ) { the_post(); ?>
      <div class="text-3xl text-info mb-5">
        <?php the_time('Y.m.d'); ?>
      </div>
      <h1 class="text-4xl font-bold mb-10"><?php the_title(); ?></h1>
      <?php the_content(); ?>
      <?php if (is_user_logged_in()) { ?> 
        <div class="text-end mt-10">
          <button class="btn rounded-full ms-3"><?php edit_post_link(); ?></button>
        </div>
      <?php } ?>
    <?php }
  }	?>
</div>

<?php get_footer(); ?>
