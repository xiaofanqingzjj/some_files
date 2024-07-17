
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
        if (!selectedObject) {
            console.log('selectedObject is null');
            //弹alert提示
            alert("请先选择要打开的页面");

            return;
        }
        selectedObject.params.forEach(param => {
            let input = paramsContainer.querySelector(`input[id="${param.key}"]`);
            // 获取select的值
            if (!input) {
                input = paramsContainer.querySelector(`select[id="${param.key}"]`);
            }
            
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

   // console.log(buttonObj);

    // button参数内容
    let resultButton = document.getElementById('resultButton');
    while (resultButton.firstChild) {
        resultButton.removeChild(resultButton.firstChild);
    }
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
    while (resultScheme.firstChild) {
        resultScheme.removeChild(resultScheme.firstChild);
    }
    let label2 = document.createElement('resultSchemeLabel');
    label2.id = 'resultSchemeLabel';
    label2.textContent = schemeUrl;
    resultScheme.appendChild(label2);

    navigator.clipboard.writeText(schemeUrl).then(function() {
        console.log('复制成功');
      }, function(err) {
        console.log('复制失败: ', err);
      });
}


function openSchemeLink() {
    var resultSchemeLabel = document.getElementById('resultSchemeLabel')
    if (resultSchemeLabel == null) {
        openButton();
    }
    resultSchemeLabel = document.getElementById('resultSchemeLabel')
    var text = resultSchemeLabel.textContent;
    window.open(text, '_blank');
}

function copySchemeLink() {
    var resultSchemeLabel = document.getElementById('resultSchemeLabel')

    var text = resultSchemeLabel.textContent;
    navigator.clipboard.writeText(text).then(function() {
      console.log('复制成功');
    }, function(err) {
      console.log('复制失败: ', err);
    });
}
