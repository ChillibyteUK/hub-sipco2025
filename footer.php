<?php
/**
 * Footer template for the Harrier Gates 2025 theme.
 *
 * This file contains the footer section of the theme, including navigation menus,
 * office addresses, and colophon information.
 *
 * @package hub-sipco2025
 */

defined( 'ABSPATH' ) || exit;
?>
<div id="footer-top"></div>

<footer class="footer pt-5 pb-4">
    <div class="container">
        <div class="row pb-4 g-4">
			<div class="col-sm-4">
				<?=
				wp_nav_menu(
					array(
						'theme_location' => 'footer_menu1',
						'menu_class'     => 'footer__menu',
					)
				);
				?>
            </div>
            <div class="col-sm-4 logo-grid">
				<div>Managed by:</div>
				<img src="<?= esc_url( get_stylesheet_directory_uri() . '/img/simcap-logo.png' ); ?>" alt="SIMCap Logo">
            </div>
            <div class="col-sm-4 logo-grid">
				<div>Sole Listing Agent, Overall Coordinator and Sole Global Coordinator:</div>
				<img src="<?= esc_url( get_stylesheet_directory_uri() . '/img/dbs-logo.png' ); ?>" alt="DBS Logo">
			</div>
		</div>
		<div class="row g-4 text-center text-sm-start mt-4">
			</div>
			<div class="col-12">&copy; <?= gmdate( 'Y' ); ?> SIMCo Infrastructure Private Credit OFC</div>
        </div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>

</html>