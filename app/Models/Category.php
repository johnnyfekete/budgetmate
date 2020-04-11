<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'sequence', 'user_id'];

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at', 'user_id'];

    /**
     * Relations
     */
    public function monthly_budgets()
    {
        return $this->hasMany(MonthlyBudgetForCategory::class);
    }
}
