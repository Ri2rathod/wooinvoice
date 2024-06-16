<?php

namespace Wooinvoice\models;

use TenQuality\WP\Database\Abstracts\DataModel;
use TenQuality\WP\Database\Traits\DataModelTrait;

class WooinvoiceTemplatesModel extends DataModel
{
    use DataModelTrait;
    /**
     * Data table name in database (without prefix).
     * @var string
     */
    const TABLE = 'wooinvoice_templates';
    /**
     * Data table name in database (without prefix).
     * @var string
     */
    protected $table = self::TABLE;

    /**
     * Primary key column name. Default ID
     * @var string
     */
    protected $primary_key = 'id';
}
