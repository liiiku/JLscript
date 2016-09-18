/**
 * Created by Liiiku on 2016/9/8.兼容以及封装
 */

//通过ID获取标签
function $(id) {
    return document.getElementById(id);
}

//通过Class获取标签(让然没有兼容ie6)
function getElementsByClassName(ele,className) {
    if(ele.getElementsByClassName) {
        return ele.getElementsByClassName(className);
    } else {
        var list = ele.getElementsByTagName('*');
        var result = [];
        for(var i=0 ; i<list.length ; i++) {
            if((' ' + list[i].className + ' ').indexOf(' ' + className + ' ') != -1) {
                result.push(list[i]);
            }
        }
        return result;
    }
}
//通过标签名获取标签
function getElementsByTagName(tag) {
    return document.getElementsByTagName(tag);
}

//创建一个标签
function createElement(tag) {
    return document.createElement(tag);
}


//获取可视区域的宽度
function cW() {
    return document.documentElement.clientWidth || document.body.clientWidth;
}

//获取可视区域的高度
function cH() {
    return document.documentElement.clientHeight || document.body.clientHeight;
}

//获取上下滚动的时候，距离顶部的距离
function sT() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

//获取左右滚动的时候，距离左边的距离
function sL() {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
}

/* 下面获取节点的这四个方法，均是要先判断火狐和chrome，再判断ie */
//获取下一个兄弟节点
function getNextSib(obj) {
    if(obj.nextElementSibling) { //这里要先兼容ff、chrome,后判断ie
        return obj.nextElementSibling;
    } else {
        return obj.nextSibling;
    }
}

//获取前一个兄弟节点
function getPreSib(obj) {
    if(obj.previousElementSibling) {
        return obj.previousElementSibling;
    } else {
        return obj.previousSibling;
    }
}

//获取第一个孩子节点
function getFirstChild(obj) {
    if(obj.firstElementChild) {
        return obj.firstElementChild;
    } else {
        return obj.firstChild;
    }
}

//获取最后一个孩子节点
function getLastChild(obj) {
    if(obj.lastElementChild) {
        return obj.lastElementChild;
    } else {
        return obj.lastChild;
    }
}

/* 上面获取节点的这四个方法，均是要先判断火狐和chrome，再判断ie */

//获取内部、外部样式表中的样式
function getStyle(obj,attr) {
    if(obj.currentStyle) {  //IE6-8
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj,null)[attr];
    }
}

//绑定事件
function addEvent(obj,type,fn) {
    if(obj.attachEvent) { //先判断IE
        return obj.attachEvent('on' + type,fn);
    } else {
        return obj.addEventListener(type,fn);
    }
}

//删除事件
function delEvent(obj,type,fn) {
    if(obj.detachEvent) {
        return obj.detachEvent('on' + type,fn);
    } else {
        return obj.removeEventListener(type,fn);
    }

}

//阻止事件冒泡
function stopBubble(event) {
    if(window.event) {
        event.cancelBubble = true; //IE6-8
    } else {
        event.stopPropagation();
    }
}

//禁止默认事件
function preventEvent(event) {
    var e = event || window.event; //根据整体的函数中是否有这句话而决定要不要在这里重复写
    if(e.preventDefault) {
        return e.preventDefault();
    } else {
        e.returnValue = false; //IE6-8
    }
}

//获取数据类型
function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1);
}



