# UM Nucleic Acid Test Reporting Platform - SKL-IOTSC
this is the template and exercise code for the NATR-Platform use NodeJS.

The reason for build this small platform :
In 2022/6/18 due to the new crown epidemic, the University of Macau need the staff and student report their Nucleic Acid Test Result , so I use around 4 hour built a small platform for store the nucleic acid test image because the platform is quick to build , so I suggest build in the internal network and use. 

### UM 核酸檢測報告平台 -SKL-IOTSC
這是一個個人分享的模板和練習代碼 - 核酸檢測報告平台 - 這使用了NodeJS去建設的。

搭建這個小平台的原因：
在2022/6/18由於新冠疫情的爆發，澳門大學需要教職工和學生上報核酸檢測結果，所以我用了4個小時左右搭建了一個小平台來存儲核酸檢測圖片，因為這個平台是快速構建的，所以我建議在內部網絡中構建並使用它。


need handle the image size and format in the nodejs , but I handle in the front end javascript , this is the secure problem, but this version havn't update.
需要在nodejs中處理上傳圖像大小和格式的問題，但在此項目中我在前端javascript中處理這些問題，這是一個安全的漏洞，但在這個版本中我沒有更新到。


### 使用方法：
把整個文案放到你的linux server上，需要提前安裝nodejs,之後用node去啓動就可以了。
put the entire folder copy on your linux server, you need to install nodejs in advance, and then use node to start it.


> nodejs install
```bash
	sudo apt install nodejs
```

```bash
	npm install
```

```bash
	node upload_project.js
```

> use nohub to hold this project in server
```bash
	nohup node upload_project.js&
```
