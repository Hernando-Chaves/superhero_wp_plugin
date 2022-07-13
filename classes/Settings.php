<?php

if (!defined('ABSPATH')) : die;
endif;

if (!class_exists('Settings')) :

    class Settings
    {
        public static $options;
        public function __construct()
        {
            self::$options = get_option('hero_options');
            add_action('admin_init', [$this, 'hero_admn_init']);
        }
        /**
         * Registra los campos
         *
         * @return void
         */
        public function hero_admn_init()
        {
            register_setting('hero_group', 'hero_options', [$this, 'hero_sanitize_fields']);
            add_settings_section(
                'hero_main_section',
                esc_html('Como funciona?', HERO_DOMAIN),
                null,
                'hero_page1'
            );

            add_settings_field(
                'hero_shortcode',
                esc_html('Shortcode', HERO_DOMAIN),
                [$this, 'hero_shoortcode_cb'],
                'hero_page1',
                'hero_main_section',
            );

            add_settings_section(
                'hero_other_options',
                esc_html(''),
                null,
                'hero_page2'
            );

            add_settings_field(
                'hero_token',
                esc_html('Token de la API'),
                [$this, 'hero_token_api'],
                'hero_page1',
                'hero_main_section',
                [
                    'label_for' => 'hero_token',
                ]
            );
        }
        /**
         * Instruciones de uso del shortcode
         *
         * @return void
         */
        public function hero_shoortcode_cb()
        { ?>

            <span>Usa el shortcode <code>[add_hero id="COLOCA AQUÍ EL HERO ID"]</code> para mostrar el super héroe en cualquier pagina, post o widget</span> <br>
            <p>Consulta la lista de IDs de los super héroes <a href="https://www.superheroapi.com/ids.html" target="_blank">AQUI</a></p>

        <?php }
        /**
         * Guarda el token de la API
         *
         * @param [type] $args
         * @return void
         */
        public function hero_token_api($args)
        { ?>
            <input class="regular-text" id="hero_token" type="text" name="hero_options[hero_token] " placeholder="Ingresa aquí el token de la API" value="<?php echo isset(self::$options['hero_token']) ? esc_attr(self::$options['hero_token']) : ''  ?>">
            <p class="description">Genera el token de la API <a href="https://www.superheroapi.com/" target="_blank">AQUÍ</a></p>

<?php }
        /**
         * Sanitiza los campos
         *
         * @param [type] $input
         * @return void
         */
        public function hero_sanitize_fields($input)
        {
            $clean_inputs = [];
            foreach ($input as $key => $val) :
                switch ($key):
                    case ('hero_token'):
                        $clean_inputs[$key] = sanitize_text_field($val);
                        break;
                    default:
                        $clean_inputs[$key] = sanitize_text_field($val);
                        break;
                endswitch;
            endforeach;
            return $clean_inputs;
        }

        public function hero_remove_options()
        {
            $token_api = isset(Settings::$options['hero_token']) ? esc_attr(Settings::$options['hero_token']) : '';
            delete_option($token_api);
        }
    }



endif;
