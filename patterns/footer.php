<?php

/**
 * Title: footer
 * Slug: linkhub/footer
 * Categories: hidden
 * Inserter: no
 */
?>

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"},":hover":{"color":{"text":"var:preset|color|success"}}}},"spacing":{"margin":{"top":"1.5em","bottom":"0em"}}},"fontSize":"small"} -->
<p class="has-text-align-center has-link-color has-small-font-size" style="margin-top:1.5em;margin-bottom:0em"><?php echo __('Powered by <a href="https://github.com/digitalmalayali/linkhub-wordpress-theme">Linkhub</a>. Theme by <a href="https://links.digitalmalayali.in/">Digital Malayali</a>.', 'linkhub'); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0"}}}} -->
<p class="has-text-align-center" style="margin-top:0"><strong>&copy; <?php echo date('Y') . ' ' . get_bloginfo('name'); ?></strong></p>
<!-- /wp:paragraph -->