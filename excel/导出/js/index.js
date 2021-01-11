/**
 * 合并单元格数据处理
Sheet Object
每一个Sheet Object表示一张表格，只要不是!开头的都表示普通cell，否则，表示一些特殊含义，具体如下：
sheet['!ref']：表示所有单元格的范围，例如从A1到F8则记录为A1:F8；
sheet[!merges]：存放一些单元格合并信息，是一个数组，每个数组由包含s和e构成的对象组成，s表示开始，e表示结束，r表示行，c表示列；
等等；
关于单元格合并，看懂下面这张图基本上就没问题了：
*/
// 导出事件
function exportSpecialExcel() {
  var data = [
    ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
    ['姓名', '性别', '年龄', '注册时间'],
    ['张三', '男', 18, new Date()],
    ['李四', '女', 22, new Date()]
  ];
  var sheet = XLSX.utils.aoa_to_sheet(data);
  // sheet[!merges]：存放一些单元格合并信息，是一个数组，每个数组由包含s和e构成的对象组成，s表示开始，e表示结束，r表示行，c表示列；
  sheet['!merges'] = [
    // 设置A1-C1的单元格合并
    {
      s: {r: 0,c: 0},
      e: {r: 0,c: 2}
    }
  ];
  console.log('sheet',sheet)
  openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
};
/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
function openDownloadDialog(url, saveName) {
  if (typeof url == 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
  }
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if (window.MouseEvent) event = new MouseEvent('click');
  else {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
};
// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
  sheetName = sheetName || 'sheet1';
  var workbook = {
    SheetNames: [sheetName],
    Sheets: {}
  };
  workbook.Sheets[sheetName] = sheet;
  console.log('workbook',workbook)
  // 生成excel的配置项
  var wopts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  };
  var wbout = XLSX.write(workbook, wopts);
  var blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  });
  // 字符串转ArrayBuffer
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
  return blob;
};