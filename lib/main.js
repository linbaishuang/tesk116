"use strict";
import Student from "./student.js"
module.exports = () => {
    var flag = true;
    var student = [];
    var all = 0;
    var average = 0;
    var stu_all = 0;
    var median = 0;
    var index = 0;
    var stu_all_aver = 0;
    var allscore = 0;
    var allscores = 0;
    var allss = 0;

    while(flag === true){
        var median_arr = [];
        console.log(
            `1. 添加学生    
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
        var print = `
                            成绩单
                            姓名|语文|数学|英语|平均分|总分 
                            ========================
                            `;
        var query = require('cli-interact').question();
        if(query === '1'){
            var input = require('cli-interact').question('请输入添加学生的信息以及成绩：（格式如下：姓名，学号，民族，班级，语文，数学，英语）');
            var students = input.split(',');
            var information = new Student(students[0], students[1], students[2], students[3], students[4], students[5], students[6]);
            student.push(information);
            console.log("添加成功！");
            students = "";
        } else if(query === '2'){
            var check = require('cli-interact').question('请输入所查询学生的学号：');
            var num = check.split(',');
            for(var i=0;i<student.length;i++){
                if(num.length < 2){
                    if(num[0] === student[i].num){
                        var all = parseInt(student[i].chisscore) + parseInt(student[i].mathscore ) + parseInt(student[i].engscore);
                        var average = all / 3;
                        print += ` ${student[i].name} | ${student[i].chisscore} | ${student[i].mathscore} | ${student[i].engscore} | ${average} | ${all}
                            `;
                    }
                } else {
                    for(var j=0;j<num.length;j++){
                        if(num[j] === student[i].num){
                            all = parseInt(student[i].chisscore) + parseInt(student[i].mathscore ) + parseInt(student[i].engscore);
                            average = all / 3;
                            print += `${student[i].name} | ${student[i].chisscore} | ${student[i].mathscore} | ${student[i].engscore} | ${average} | ${all}
                            `;
                            stu_all += all;
                        }
                    }
                }
            }
            for(var m=0;m<student.length;m++){
                allscores += parseInt(student[m].chisscore) + parseInt(student[m].mathscore ) + parseInt(student[m].engscore);
                stu_all_aver = allscores/student.length;
                allss = parseInt(student[m].chisscore) + parseInt(student[m].mathscore ) + parseInt(student[m].engscore);
                median_arr.push(allss);
                median_arr.sort();
            }
            console.log(median_arr.length);
            var len = median_arr.length;
            if(len % 2 === 0){
                index = parseInt(len/2);
                median = (median_arr[index] + median_arr[index-1]) / 2;
            } else {
                index = parseInt(len/2);
                median = median_arr[index];
            }
            print += `========================
                            全班总分平均数：${stu_all_aver}
                            全班总分中位数：${median}
                            `;
            console.log(print);
            print = "";
            stu_all_aver = 0;
            median = 0;
            allscores = 0;
            allss = 0;
        }else if(query === '3'){
            flag = false;
        }else {
            console.log("请按提示输入正确的数字！！");
        }
    }

}