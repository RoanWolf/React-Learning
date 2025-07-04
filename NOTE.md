## react note

### 0. git usage

branch rename

```
 git branch -m master main
```

### 1. experience

#### day1

1. 在jsx文件里可以写return 标签的语法。内部表达式用{}
2. 导入标签时要写成大写开头，因为react标签是大写的，小写会被认为时html标签。
3. 按钮点击要写阻止默认事件，不然会刷新页面。
4. css要写成小驼峰格式了，建议所有变量写法都写成小驼峰格式。
5. 条件渲染很简单：逻辑短路或者三目运算符。bool && <div />
6. label-htmlfor id 和 input id绑定可以实现点文字聚焦到输入框
7. js语法的空：null false 0 
8. string.trim()返回去首尾空格的字符串 
9. 受控组件的受控是指由React state管理，checkbox的不是val是checked。
10. filter和map的返回值是新数组，sort是原地排序。

### day2

1. hook是钩子函数。useState 用来管理状态，useEffect 在组件挂载时执行（有依赖参数变也执行）。

   ```javascript
   useEffect(() => {
       console.log('挂载时打印')
   }, []);
   ```

2. fetch是浏览器API用来发起异步http请求，返回的是一个 **`Promise`**，它会 **resolve** 成一个 `Response` 对象，表示请求已经完成，响应数据可用。fetch就是一个函数。至于async和await，前者声明的函数隐式返回值是promise对象，使用要加async接收，最好不要返回值直接调用，后者是.then的语法糖包装。Promise.all并行处理。

   ```javascript
   // 单个请求
   async function getData() {
       try {
           const response = await fetch('https://api.adviceslip.com/advice'); 
           const data = await response.json();  //json
           console.log(data);
       } catch (error) {
           console.error(error); 
       }
   }
   ```

   ```javascript
   //多条请求
   const promises = idArray.map(id => fetch(`https://api.adviceslip.com/advice/${id}`).then(res => res.json()))
                   const data = await Promise.all(promises);
                   setAdviceData(data);
   ```

3. 加载异常处理-等待时间显示。

   ```javascript
   if (loading) return <span>加载中...</span>;
   if (error) return <span>{error}</span>;
   ```

   
