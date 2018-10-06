import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = "你好 angular"; //数据
  msg: any;  // 另一种定义属性的方法
  msg1: string = '这是一个 string 类型的 msg'


  // 修饰符
  public firstName = "even";  // name 可以使任意类型
  public lastName: string = 'yao';

  // 属性
  public id = 'content';
  public msg2 = '暂停查看';
  public h = "<h2>新闻<h2>"

  constructor() {
    this.msg = "另一种定义属性的方法"
  }

  ngOnInit() {
  }

}
