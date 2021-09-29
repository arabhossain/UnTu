<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'details', 'completed'];

    public function scopePending($query)
    {
        return $query->where('completed', 0)->orderBy('created_at','DESC');
    }

    public function scopeCreatedInFiveMinutes($query)
    {
        return $query->where('created_at', '>', Carbon::now()->subMinutes(5)->toDateTimeString());
    }
}
