# CHANGE LOG

### v8.25
- 请求凭证 token 改为放到 header 中


### v8.24
- fix 银行卡复制
- 银行卡列表显示自定义信息，调整银行卡显示
- 添加预置加载动画
- fix 日记添加失败时不显示错误信息
- 添加服务器无法访问时的页面提示
- 日记内容展示的字体优化
- 优化暗黑模式显示

### v8.23
- 账单文字颜色调整

### v8.22
- 列表中的账单条目显示当日总额
- fix detail category 高度偏差

### v8.21
- 类别颜色根据数据库颜色动态显示
- 规范变量命名、书写
- PWA 设置
- 优化统计显示

### v8.10 `2022-10-28`
- 银行卡添加银行对应图标

### v8.08 `2022-10-19`
- 编辑页面，移动端：点击内容扩大空间

### v8.07 `2022-09-07`
- 优化登录验证提醒
- 优化银行卡显示


### v8.06 `2022-08-26`
- 组件化菜单一些元素
- 菜单添加图标


### v8.05 `2022-08-17`
- pc mobile 按钮图标大小区别
- 加大移动端列表文字大小
- 日记内容显示实际的空格缩进
- 

### v8.04 `2022-08-12`
- 用户统计中时间根据最后访问时间的远近显示不同颜色

fix:
- 搜索框弹出后自动 focus
- vue3 后不设 deep:true 数组不更新的问题

### v8.03 `2022-08-11`
- 统计页面，人员信息放前面
- 账单暗黑模式
fix:
- 刷新页面后共享筛选标题不显示的问题

### v8.02 `2022-08-06`
- 项目结构调整
- 图标优化
- 独立出银行卡列表
- 优化银行卡显示效果

fix:
- 列表第一个为分享日记时，图标非彩色
- 详细内容的列表时，不显示第一个日记的日期

### v8.01 `2022-07-23`
- 账单：悬停查看具体内容
- 账单：显示吃饭统计
- 优化统计页面显示
- 优化账单详情显示

fix:
- 修改、添加、删除日记后，列表未更新

### v8.00 `2022-07-19`
- 修改成 vue3 版本
- date-picker 变换成 vue3 版本的

### v7.35 `2022-07-18`
- 添加常用类别快捷筛选
- 最后一版 vue2 的系统

### v7.34 `2022-07-11`
- tab-icon 组件化
- 优化菜单统计小面板样式
- 登录注册页面高度自适应

**优化**
- 日记变化的判断条件
- 菜单动画

### v7.33 `2022-06-30`
- 统计页面对应各类别的颜色
fix:
- 刷新统计页面时显示不正常的问题
- 分享链接直接打开时，显示类别

### v7.32 `2022-06-22`
- 添加账单页面，根据月份划分

### v7.31 `2022-05-24`
- 日记类别使用数据库数据

### v7.30 `2022-05-18`
- 改用 nodejs 后台

### v7.24 `2022-03-01`
add：
- 保存日记时显示 `Loading`
- CHANGELOG.md

fix: 
- 分享页面加载显示效果
- 新建日记时，不更新 logo 的问题

### v7.23 `2022-01-07`
add：
- 周报自动载入工作日志内容
- <kbd>ctrl</kbd> + <kbd>s</kbd> 保存日记内容

### v7.20 `2022-01-02`
add：
- 移动端与PC端同分支