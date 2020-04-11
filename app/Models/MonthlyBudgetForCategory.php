<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MonthlyBudgetForCategory extends Model
{
    protected $table = 'monthly_budget_for_categories';

    protected $fillable = [
        'category_id',
        'budget',
        'month',
        'is_recurring',
        'comment'
    ];

    protected $dates = ['created_at', 'updated_at'];

    protected $hidden = ['created_at', 'updated_at'];
}
