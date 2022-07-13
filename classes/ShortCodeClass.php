<?php

if (!defined('ABSPATH')) : die;
endif;

if (!class_exists('ShortCodeClass')) :
    // Token = 5239747982780015
    class ShortCodeClass
    {
        public function __construct()
        {
            add_shortcode('add_hero', [$this, 'hero_add_shortcode']);
        }
        /**
         * Recoge el token y los Atts de el shortcode y los envia via ajax a Vue
         */
        public function hero_add_shortcode($atts = [], $content = null, $tag = '')
        {
            $atts = array_change_key_case((array) $atts, CASE_LOWER);
            $token_api = isset(Settings::$options['hero_token']) ? esc_attr(Settings::$options['hero_token']) : '';
            extract(shortcode_atts([
                'id'    => '1',
            ], $atts));
            wp_enqueue_style('tailwind');
            wp_enqueue_style('custom');
            wp_localize_script('mainjs', 'SHORTCODE_ATTS', [
                'id'    => $id,
                'token' => trim($token_api)
            ]);

            echo '<div id="hero"></div>';
        }
    }

endif;
