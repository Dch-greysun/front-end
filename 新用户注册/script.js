/*let与const都是只在声明所在的块级作用域内有效。

let声明的变量可以改变，值和类型都可以改变，没有限制。

const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。*/
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pwd');
const password2 = document.getElementById('pwd2');
const eye = document.getElementById('eye');
const eye2 = document.getElementById('eye2');

//密码可视
var flag = 0;
eye.onclick = function() {
    // 点击一次之后， flag 一定要变化
    if (flag == 0) {
        password.type = 'text';
        eye.src = 'images/open.png';
        flag = 1; // 赋值操作
    } else {
        password.type = 'password';
        eye.src = 'images/close.png';
        flag = 0;
    }

}

var flag1 = 0;
eye2.onclick = function() {
    // 点击一次之后， flag 一定要变化
    if (flag1 == 0) {
        password2.type = 'text';
        eye2.src = 'images/open.png';
        flag1 = 1; // 赋值操作
    } else {
        password2.type = 'password';
        eye2.src = 'images/close.png';
        flag1 = 0;
    }

}

//显示输入信息错误,错误就显示红色边框与字。 className 获取或设置指定元素的class属性的值。
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//显示成功信息，显示绿色边框
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//检查邮箱有效性。 trim() 方法用于删除字符串的头尾空白符。test() 方法用于检测一个字符串是否匹配某个模式
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, '您输入的邮箱不正确');
    }
}

// 检查表单是否填写完整
function checkRequired(inputArr) {
    let isRequired = false;
    //遍历表单
    inputArr.forEach(function(input) {
        //trim()去除空格
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)}未输入`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// 检查输入的字符长度
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} 必须至少有 ${min} 个字符`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} 必须少于 ${max} 个字符`
        );
    } else {
        showSuccess(input);
    }
}

// 检查两次输入的密码是否一致
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, '两次输入的密码不一致');
    }
}

//去掉请输入三个字
function getFieldName(input) {
    return input.placeholder.slice(3);
}

//第一:先看看是否是按下了button,如果是就先去取消默认的事件
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //第二:再看看提交之前填写以下几项了吗?
    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }

});