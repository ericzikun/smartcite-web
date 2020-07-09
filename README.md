## Smartcite-web 本地部署

* 1. 本地终端输入以下，克隆代码到本地：

```git clone https://github.com/ericzikun/smartcite-web.git ```

* 2. 本地调试代码(编译器建议使用Vscode)，启动项目：

```yarn start```

* 3. 如果后端地址接口发生更改，则需要修改前端代码相应位置，如下：

Home.js文件下action处替换即可：

```javascript
const props = {
        name: 'file',//name得看接口需求，name与接口需要的name一致
        // action: '/test/upload/file',//接口路径
        action: 'http://114.55.101.144:8080/extract',//接口路径
        // action: '/extract',
        data: {file} ,//接口需要的参数，无参数可以不写
        multiple: false,//支持多个文件
        showUploadList: true,//展示文件列表
        headers: {
          // "Content-Type": "multipart/form-data"
        },
    }
```

Result.js文件下action处，同上：

```javascript
const file = []
  const props = {
    name: 'file',//name得看接口需求，name与接口需要的name一致
    action: 'http://114.55.101.144:8080/extract',//接口路径
    data: {file} ,//接口需要的参数，无参数可以不写
    multiple: false,//支持多个文件
    showUploadList: true,//展示文件列表
    headers: {
      // "Content-Type": "multipart/form-data"
    },
  }
```

* 4.如果代码已修改，需要重新部署服务器，则需要再次生成build包覆盖之前的build包，即：

```yarn build```

## Smartcite-web 前端部署(Linux版本)

* 1.在服务器上安装linux版本的nginx
* 2.在服务器上建立一个项目文件夹，例如：```/home/smartcite```
* 3.将本地React项目的build包传到linux下的项目文件夹```/home/smartcite```
* 4.修改linux服务器上的nignx配置：
  找到default.conf文件，一般在```/etc/nginx/sites-available```里面，有的也可能在```/etc/nginx/conf.d```下
  修改配置采用：```vi default```，修改里面对应的root地址(这个地址就是你的项目在linux服务器上的路径)，端口(listen)根据需要修改，一般默认80端口
  <img src="https://img-blog.csdnimg.cn/20200607121106613.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3BvcG9mems=,size_16,color_FFFFFF,t_70#pic_center =400x400" alt="在这里插入图片描述" style="zoom:50%;" />

* 5.重启nginx：在```/usr/sbin```下输入```./nginx -s reload```重启nginx服务(只要重新修改了nginx配置，都需要重启)