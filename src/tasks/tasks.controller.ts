/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'; 
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){

    }

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks()

    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) { 
    return this.taskService.createTask(newTask.title,  newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string ) {
        this.taskService.deleteTask(id)
    }
}
