<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskCollection;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return new TaskCollection(Task::createdInFiveMinutes()->pending()->get());
    }

    public function store(Request $request)
    {
       $data = $request->only(['details']);
       $data['user_id'] = User::all()->random()->id;
       Task::create($data);
       return $this->index();
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return $this->index();
    }

    public function bulkMarkAsCompleted(Request $request)
    {
        $payloads = $request->get('payloads');
        foreach ($payloads as $task)
            Task::where('id', $task['id'])->update(['completed' => $task['completed']]);

        return $this->index();
    }
}
