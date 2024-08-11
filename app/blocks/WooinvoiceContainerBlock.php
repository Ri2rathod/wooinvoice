<?php

namespace Wooinvoice\blocks;

use Stringable;
use Wooinvoice\classes\WooinvoiceBlocksHandler;
use Wooinvoice\utils\WooinvoiceHelper;

final class WooinvoiceContainerBlock extends WooinvoiceBlocksHandler
{
    public function get_name(): string
    {
        return esc_html__('container', 'wooinvoice');
    }
    public function get_slug(): string
    {
        return  'container';
    }
    public function get_category(): string
    {
        return 'layout';
    }
    public function get_icon(): string
    {
        return WooinvoiceHelper::instance()->get_icon('grid');
    }
    public function register_controls_on_layout(): array
    {

        return [
            [
                'slug' => "content-width-type",
                'label' => esc_html__("Contetn Width", 'wooinvoice'),
                'type' => 'select',
                'options' => [
                    'full-width' => esc_html__("Full Width", 'wooinvoice'),
                    'boxed' => esc_html__("Boxed", 'wooinvoice')
                ]
            ],
            [
                'slug' => "content-width",
                'label' => esc_html__("Width", 'wooinvoice'),
                'type' => 'range',
                'min' => '0',
                'max' => '100',
                'value_in' => '%'
            ],


        ];
    }
    public function register_controls_on_style(): array
    {
        return [
            [
                'slug' => "background-color",
                'label' => esc_html__("Background Color", 'wooinvoice'),
                'type' => 'color',
            ],
        ];
    }
}
