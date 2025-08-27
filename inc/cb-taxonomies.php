<?php
/**
 * Custom taxonomies for the Hub Sipco theme.
 *
 * This file defines and registers custom taxonomies such as 'Teams' and 'Offices'.
 *
 * @package hub-sipco2025
 */

/**
 * Register custom taxonomies for the theme.
 *
 * @return void
 */
function cb_register_taxes() {

    $args = array(
        'labels'             => array(
            'name'          => 'Work Types',
            'singular_name' => 'Work Type',
        ),
        'public'             => true,
        'publicly_queryable' => true,
        'hierarchical'       => true,
        'show_ui'            => true,
        'show_in_nav_menus'  => true,
        'show_tagcloud'      => false,
        'show_in_quick_edit' => true,
        'show_admin_column'  => false,
        'show_in_rest'       => true,
        'rewrite'            => false,
    );
    register_taxonomy( 'work_type', array( 'attachment' ), $args );
}
// add_action( 'init', 'cb_register_taxes' );
