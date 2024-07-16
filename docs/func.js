

const jsonObject = [{
    "name": "聊天",
    "uri": "chatMessage",
    "params": [
        {
            "key": "friendUserId",
            "name": "好友Id",
            "type": "String",
            "desc": "",
            "required": true
        },
        {
            "key": "_isBindRole",
            "name": "校验角色",
            "type": "bool",
            "required": "false",
            "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗"
        }
    ],
    "type": 10030
},
{
    "name": "聊天室-支持直播",
    "uri": "chatMessageRoom",
    "params": [
        {
            "key": "_isBindRole",
            "name": "校验角色",
            "type": "bool",
            "required": "false",
            "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗"
        }
    ],
    "type": 10020
},
{
    "name": "话题详情页",
    "uri": "topicDetailPage",
    "params": [
        {
            "key": "gameId",
            "name": "gameId",
            "type": "int",
            "desc": "",
            "required": false
        },
        {
            "key": "topicId",
            "name": "话题Id",
            "type": "int",
            "desc": "",
            "required": true
        },
        {
            "key": "hideHeader",
            "name": "隐藏头部图片",
            "type": "bool",
            "desc": "",
            "required": false
        },
        {
            "key": "titleName",
            "name": "话题名字",
            "type": "String",
            "desc": "",
            "required": false
        },
        {
            "key": "tabIndex",
            "name": "默认选中tab",
            "type": "int",
            "desc": "默认是0",
            "required": false
        },
        {
            "key": "_isBindRole",
            "name": "校验角色",
            "type": "bool",
            "required": "false",
            "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗"
        }
    ],
    "type": 10042
},
{
    "name": "武器百科",
    "uri": "weapon_wiki_list",
    "params": [
        {
            "key": "gameId",
            "name": "业务Id",
            "type": "int",
            "desc": "",
            "required": true,
            "options": [
                {
                    "value": 10010,
                    "desc": "CF"
                },
                {
                    "value": 20003,
                    "desc": "CFM"
                },
                {
                    "value": 10038,
                    "desc": "CFHD"
                }
            ]
        },
        {
            "key": "name",
            "name": "标题栏名字",
            "type": "String",
            "desc": "gameId",
            "required": true
        },
        {
            "key": "_isBindRole",
            "name": "校验角色",
            "type": "bool",
            "required": "false",
            "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗"
        }
    ],
    "type": 10042
}];
document.addEventListener('DOMContentLoaded', function() {
    console.log("====="+window.jsondata);
    makePageOptions(window.jsondata);
  });

// window.addEventListener('load', function() {
//     console.log("load====="+window.jsondata);
// });

let selectedObject;
function makePageOptions(jsonData){
    let selectElement = document.getElementById("pageSelect");
    jsonData.forEach(item => {
        let option = document.createElement('option');
        option.value = item.name;
        option.text = item.name;
        selectElement.appendChild(option);

        selectElement.addEventListener('change', () => {
            let selectedOption = selectElement.value;

            // Find the selected object in the jsonData array
            selectedObject = jsonData.find(item => item.name === selectedOption);

            // Clear the existing params list
            let paramsContainer = document.getElementById('paramsContainer');
            while (paramsContainer.firstChild) {
                paramsContainer.removeChild(paramsContainer.firstChild);
            }

        // Add the params of the selected object to the params list
            selectedObject.params.forEach(param => {
                let div = document.createElement('paramDiv');
                div.id = 'paramDiv';
                let label = document.createElement('label');
                var name = param.name ? param.name : '';
                var type = param.type ? param.type : '';
                var required = param.required ? '必填' : '';
                var desc = param.desc ? ' ('+  desc+ ') ': '';
                textContent = type + ','+ required + desc  ;
                label.textContent = name + '('+ param.key +')';
                label.style.color = 'gray';
                div.appendChild(label);

                if (param.options) {
                    var select = document.createElement('select');
                    select.id = param.key;
                    param.options.forEach(option => {
                        insertSelectOption(select, param.key, option.value, option.desc);
                    });
                    div.appendChild(select);
                } else {
                    if(param.type == 'bool'){
                        var select = document.createElement('select');
                        select.id = param.key;
                        insertSelectOption(select, param.key, '0', 'false');
                        insertSelectOption(select, param.key, '1', 'true');
                        div.appendChild(select);
                    } else {
                        var input = addInputToDiv(div, param.key, 'text', textContent);
                        div.appendChild(input);
                    }
    
                }

                paramsContainer.appendChild(div);
            });
        });
    });
}

function insertSelectOption(select, selectId, value, text) {
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    select.appendChild(option);
    return option;
  }

  function addInputToDiv(div, id, type, placeholder) {
    let input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    div.appendChild(input);
    return input;
  }



function openButton() {
    let paramObj = {};
    let buttonObj = {};
    let paramsContainer = document.getElementById('paramsContainer');
    if (paramsContainer) {
        selectedObject.params.forEach(param => {
            let input = paramsContainer.querySelector(`input[id="${param.key}"]`);
            if (input) {
                let value;
                switch (param.type) {
                    case 'bool':
                        value = parseInt(input.value);
                        break;
                    case 'int':
                        value = parseInt(input.value);
                        break;
                    case 'float':
                        value = parseFloat(input.value);
                        break;
                    case 'string':
                    default:
                        value = input.value;
                        break;
                }
                console.log(value);
                if (value) {
                    paramObj[param.key] = value;
                }
            }
        });
    } else {
        console.log('paramDiv is null');
    }
    buttonObj = {
        type: selectedObject.type,
        uri: selectedObject.uri,
        param: paramObj
    };

    // button参数内容
     let resultButton = document.getElementById('resultButton');
     let label = document.createElement('label');
     label.textContent = JSON.stringify(buttonObj);
     resultButton.appendChild(label);
     console.log(JSON.stringify(buttonObj));

    let jsonString = JSON.stringify(buttonObj);
    let encodedString = encodeURIComponent(jsonString);
    console.log(encodedString);
    let schemeSelectElement = document.querySelector('#inputScheme');
    let schemeOption = schemeSelectElement.value;
    console.log("scheme =" +schemeOption);

    //外部吊起cfpage://webopenapi/startApp?paraEncodeType=&action=20003&button=
    var schemeUrl = schemeOption+'://webopenapi/startApp?paraEncodeType=&action=20003&button='+encodedString;
    let resultScheme = document.getElementById('resultScheme');
    let label2 = document.createElement('label');
    label2.textContent = schemeUrl;
    resultScheme.appendChild(label2);
}

function inputv() {

}