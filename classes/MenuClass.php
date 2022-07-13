<?php

if (!defined('ABSPATH')) : die;
endif;

if (!class_exists('MenuClass')) :

    class MenuClass
    {
        protected $slug;
        protected $capability;

        public function __construct()
        {
            $this->slug       = 'hero_menu';
            $this->capability = 'manage_options';
            add_action('admin_menu', [$this, 'hero_sl_add_menu_items']);
        }

        public function hero_sl_add_menu_items()
        {
            $this->hero_sl_add_menus();
        }
        /**
         * Agrega el item de menú al escritorio de wordpres
         *
         * @return void
         */
        public function hero_sl_add_menus()
        {
            add_menu_page(
                esc_html('Configuración'),
                esc_html('Super Hero API'),
                $this->capability,
                $this->slug,
                [$this, 'hero_sl_settings_view'],
                'dashicons-superhero-alt',
                20
            );
        }
        /**
         * Vista HTML de la página de opciones
         *
         * @return void
         */
        public function hero_sl_settings_view()
        {
            if (!current_user_can('manage_options')) :
                return;
            endif;
            if (isset($_GET['settings-updated'])) :
                add_settings_error('hero_sl_options', 'hero_sl_classes', 'Opciones guardadas correctamente', 'success');
            endif;
            settings_errors('hero_sl_options');
            require_once HERO_PATH . '/includes/settings_view.php';

            if (file_exists(HERO_PATH . '/includes/settings_view.php')) :
                require_once HERO_PATH . '/includes/settings_view.php';
            endif;
        }
    }

endif;
