<?php
/**
 * Block template for HUB Team.
 *
 * @package hub-sipco2025
 */

defined( 'ABSPATH' ) || exit;

$team = get_field( 'team' );

?>
<section class="hub-team">
	<div class="container">
		<h3 class="col-sipco-red mb-4"><?= esc_html( $team->name ); ?></h3>
	</div>
	<div class="container py-4">
		<?php
		$q = new WP_Query(
			array(
				'post_type'      => 'person',
				'posts_per_page' => -1,
				'tax_query'      => array(
					array(
						'taxonomy' => 'team',
						'field'    => 'id',
						'terms'    => $team->term_id,
					),
				),
				'orderby'        => 'menu_order',
				'order'          => 'ASC',
			)
		);


		while ( $q->have_posts() ) {
			$q->the_post();
			?>
			<button
				id="<?= esc_attr( basename( get_permalink( get_the_ID() ) ) ); ?>"
				class="hub-team__card">
				<div class="hub-team__image-wrapper">
					<?= get_the_post_thumbnail( get_the_ID(), 'large', array( 'class' => 'hub-team__image' ) ); ?>
				</div>
				<div class="px-4 py-2">
					<div class="hub-team__name pb-2 fw-bold fs-h4-body-bold"><?= esc_html( get_the_title( get_the_ID() ) ); ?></div>
					<div class="hub-team__title"><?= wp_kses_post( get_field( 'title', get_the_ID() ) ); ?></div>
				</div>
			</button>
			<?php
			$bio       = get_the_content( get_the_ID() );
			$biodata[] = '<div class="bio-card" id="' . basename( get_permalink( get_the_ID() ) ) . '-info"><p>' . $bio . '</p></div>';
		}
		wp_reset_postdata();
		?>
	</div>
	<div class="bio-data">
        <?php
        foreach ( $biodata as $b ) {
            echo wp_kses_post( $b );
        }
		?>
    </div>
</section>
