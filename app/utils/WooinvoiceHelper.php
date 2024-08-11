<?php

namespace Wooinvoice\utils;

use function Avifinfo\read;

final class WooinvoiceHelper
{
    private self $instance;
    private array $icons;

    public function __construct()
    {
        $this->load_icon();
    }


    public static function instance()
    {
        if (isset(self::$instance)) {
            return self::$instance;
        }

        self::$instance = new self;

        return self::$instance;
    }
    private function load_icon()
    {
        $this->icons = [
            'heading' => [
                'path' => WOOINVOICE_PLUGIN_PATH . 'public/assets/icons/heading.svg',
                'url' => WOOINVOICE_PLUGIN_URL . 'public/assets/icons/heading.svg'
            ],
            'grid' => [
                'path' => WOOINVOICE_PLUGIN_PATH . 'public/assets/icons/grid.svg',
                'url' => WOOINVOICE_PLUGIN_URL . 'public/assets/icons/grid.svg'
            ],
        ];
    }
    public function get_icon_url($icon)
    {
        if (!isset($this->icons[$icon])) return false;
        return $this->icons[$icon]['url'];
    }
    public function get_icon($icon)
    {
        if (!isset($this->icons[$icon])) return false;

        if (!isset($this->icons[$icon]['content'])) {
            $this->icons[$icon]['content'] = file_get_contents($this->icons[$icon]['path']);
        }
        return $this->icons[$icon]['content'];
    }
}
