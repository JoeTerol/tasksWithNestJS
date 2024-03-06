/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from './tasks.entity'
import { TaskStatus } from './tasks.entity';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
        id: '1',
        title: 'first task',
        description: 'some tasks',
        status: TaskStatus.PENDING
        }
]



getAllTasks(){
    return this.tasks
}
createTask(title: string, description: string){
    const newTask = {
        id: new Date().toISOString(),
        title,
        description,
        status: TaskStatus.PENDING

    }
    this.tasks.push(newTask)
    return newTask

}
updateTask(){

}
deleteTask(id: string) {
    this.tasks =  this.tasks.filter(task => task.id !== id)
}

}
