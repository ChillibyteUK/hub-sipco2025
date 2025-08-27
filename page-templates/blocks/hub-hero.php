<?php
/**
 * Block template for HUB Hero.
 *
 * @package hub-sipco2025
 */

defined( 'ABSPATH' ) || exit;
?>
<section class="hub-hero mb-5">
	<?= wp_get_attachment_image( get_field( 'background' ), 'full', false, array( 'alt' => '' ) ); ?>
</section>
