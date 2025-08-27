<?php
/**
 * Block template for HUB Text Image.
 *
 * @package hub-sipco2025
 */

defined( 'ABSPATH' ) || exit;

$col_order   = get_field( 'order' );
$image_order = ( 'Image' === $col_order ) ? 'order-1' : 'order-2';
$text_order  = ( 'Image' === $col_order ) ? 'order-2' : 'order-1';
?>
<section class="text-image">
	<div class="container py-5">
		<div class="row g-5">
			<div class="col-md-6 <?= esc_attr( $text_order ); ?>">
				<h2><?= wp_kses_post( get_field( 'title' ) ); ?></h2>
				<?= wp_kses_post( get_field( 'content' ) ); ?>
			</div>
			<div class="col-md-6 <?= esc_attr( $image_order ); ?>">
				<div class="image-16x9">
					<?= wp_get_attachment_image( get_field( 'image' ), 'full', false, array( 'class' => '' ) ); ?>
				</div>
			</div>
		</div>
	</div>
</section>