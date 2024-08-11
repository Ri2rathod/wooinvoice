<?php

namespace Wooinvoice\classes;

interface WooinvoiceBlocksInterface
{
    public function get_slug(): string;
    public function get_name(): string;
    public function get_category(): string;
    public function get_icon(): string;
    public function register_controls_on_layout(): array;
    public function register_controls_on_style(): array;
}
