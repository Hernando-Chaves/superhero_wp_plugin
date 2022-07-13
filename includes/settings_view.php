<div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()) ?></h1>
    <form action="options.php" method="post">
        <?php
        settings_fields('hero_group');
        do_settings_sections('hero_page1');
        submit_button('Guardar configuración');
        ?>
    </form>
</div>