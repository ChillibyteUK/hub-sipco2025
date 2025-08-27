<?php
/**
 * Block template for HUB Listing Details.
 *
 * @package hub-sipco2025
 */

defined( 'ABSPATH' ) || exit;

?>
<section class="three-col-grey-cards">
	<div class="container py-4">
		<div class="row g-3">
			<?php
			while ( have_rows( 'cards' ) ) {
				the_row();
				?>
				<div class="col-12 col-md-4">
					<div class="three-col-grey-cards__card">
						<div class="three-col-grey-cards__card-body">
							<div class="fs-body mb-3"><?php the_sub_field( 'title' ); ?></div>
							<div class="body-medium"><?php the_sub_field( 'content' ); ?></div>
						</div>
					</div>
				</div>
				<?php
			}
			?>
		</div>
	</div>
</section>