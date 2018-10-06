import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // public storage = new StorageService();

  public content:any;
  public list = [];

  constructor(private storage:StorageService) {
    this.content = ''
    console.log(this.storage)

  }

  // 初始化
  ngOnInit() {
    // 每次刷新都获取 localStorage todolist的值
    var todolist = this.storage.getItem('todolist')
    if(todolist){
      this.list = todolist
    }
  }

  // 鼠标 add
  addData() {
    var obj = {
      content: this.content,
      status: 1
    }
    //1. 从 localStorage 获取 todoList 数据
    var todolist = this.storage.getItem('todolist')

    //2. 如果有数据，拿到数据 然后把新数据和数据拼接再重新写入 localStorage
    if(todolist) {
      todolist.push(obj)
      this.storage.setItem('todolist',todolist)
    } else {

    //3. 如果没有数据，直接写入 localStorage
      var arr = []
      arr.push(obj)
      this.storage.setItem('todolist',arr)
    }

    this.list.push(obj)
    this.content = ''
  }

  // 键盘 add
  addDataKeybord(e) {
    if(e.keyCode == 13) {
      var obj = {
        content: this.content,
        status: 1
      }
      //1. 从 localStorage 获取 todoList 数据
      var todolist = this.storage.getItem('todolist')

      //2. 如果有数据，拿到数据 然后把新数据和数据拼接再重新写入 localStorage
      if(todolist) {
        todolist.push(obj)
        this.storage.setItem('todolist',todolist)
      } else {

      //3. 如果没有数据，直接写入 localStorage
        var arr = []
        arr.push(obj)
        this.storage.setItem('todolist',arr)
      }

      this.list.push(obj)
      this.content = ''
    }
  }

  // 改变状态
  changeStatusDone(key) {
    this.list[key].status = 2
    this.storage.setItem('todolist',this.list);
  }

  changeStatusDoing(key) {
    this.list[key].status = 1
    this.storage.setItem('todolist',this.list);
  }

  deleteData(key){
    this.list.splice(key,1);   /*删除数组的数据*/
    this.storage.setItem('todolist',this.list);
  }

}
