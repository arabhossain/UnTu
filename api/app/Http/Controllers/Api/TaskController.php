<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskCollection;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $tasks = Task::pending()->get();//createdInFiveMinutes()

        return new TaskCollection($tasks);
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $data = $request->only(['details']);
       $data['user_id'] = User::all()->random()->id;
       Task::create($data);
       return $this->index();
    }

    /**
     * Remove the specified resource from storage.
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
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
