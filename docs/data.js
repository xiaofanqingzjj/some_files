 window.jsondata = [
    {
        "name": "网页webview",
        "uri": "webview",
        "params": [
            {
                "key": "url",
                "name": "网页地址",
                "type": "String",
                "desc": "网页地址，例如https://xx",
                "required": true
            },
            {
                "key": "need_login_status",
                "name": "是否需要登录态",
                "type": "bool",
                "desc": "",
                "required": false,
                "defaultValue": true
            },
            {
                "key": "support_account_switching",
                "name": "支持切换账号",
                "type": "bool",
                "desc": "古老的配置，功能不确定是否有效，需要角色切换组件时，请不要勾选这个选项!",
                "required": false,
                "defaultValue": false
            },
            {
                "key": "support_role_switching",
                "name": "支持切换角色",
                "type": "bool",
                "desc": "角色切换功能，必须指定业务；关闭切换角色时，‘切换角色类型’请选择‘不展示切换组件’",
                "required": false,
                "defaultValue": true
            },
            {
                "key": "support_role_switching_type",
                "name": "切换角色类型",
                "type": "Int",
                "desc": "角色切换功能，必须指定业务；关闭切换角色时，这里请选择‘不展示切换组件’",
                "required": false,
                "options": [
                    {
                        "value": "0",
                        "desc": "不展示切换组件"
                    },
                    {
                        "value": "1",
                        "desc": "切换组件在左边"
                    },
                    {
                        "value": "2",
                        "desc": "切换组件在导航栏"
                    },
                    {
                        "value": "3",
                        "desc": "切换组件在底部"
                    }
                ],
                "defaultValue": "2"
            },
            {
                "key": "setting_url",
                "name": "setting_url",
                "type": "String",
                "desc": "设置网页地址",
                "required": false
            },
            {
                "key": "event_id",
                "name": "上报事件id",
                "type": "Int",
                "desc": "",
                "required": false
            },
            {
                "key": "mod_id",
                "name": "上报模块id",
                "type": "Int",
                "desc": "",
                "required": false
            },
            {
                "key": "disable_backbutton_changed",
                "name": "隐藏返回按钮",
                "type": "bool",
                "desc": "",
                "required": false,
                "defaultValue": false
            },
            {
                "key": "is_hidden_avatar_on_back_button_display",
                "name": "隐藏导航栏头像",
                "type": "bool",
                "desc": "",
                "required": false,
                "defaultValue": true
            },
            {
                "key": "screenDirection",
                "name": "屏幕方向",
                "type": "Int",
                "desc": "",
                "required": false,
                "options": [
                    {
                        "value": "0",
                        "desc": "竖屏"
                    },
                    {
                        "value": "1",
                        "desc": "横屏"
                    }
                ]
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10032,
        "desc": "如果需要指定业务，所属业务"
    },
    {
        "uri": "personCenter",
        "name": "个人主页",
        "lowestVersion": "3.22.0",
        "desc": "",
        "params": [
            {
                "key": "userId",
                "name": "用户id",
                "type": "int",
                "value": "",
                "desc": "",
                "required": false
            },
            {
                "key": "isHost",
                "name": "是否主态",
                "type": "bool",
                "desc": "如果是主态忽略userId参数，直接打开主态",
                "required": false,
                "defaultValue": false,
                "lowestVserion": "3.23"
            },
            {
                "key": "initTab",
                "name": "初始选择的tab",
                "type": "String",
                "desc": "",
                "required": false,
                "options": [
                    {
                        "value": "moment",
                        "desc": "动态"
                    },
                    {
                        "value": "photo",
                        "desc": "相册"
                    },
                    {
                        "value": "works",
                        "desc": "作品"
                    }
                ],
                "lowestVserion": "3.23"
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
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
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
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
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10020
    },
    {
        "name": "发表动态",
        "uri": "submitMoment",
        "params": [
            {
                "key": "defaultEditType",
                "name": "动态类型",
                "type": "String",
                "desc": "",
                "required": true,
                "options": [
                    {
                        "value": "0",
                        "desc": "普通动态"
                    },
                    {
                        "value": "1",
                        "desc": "长文"
                    },
                    {
                        "value": "2",
                        "desc": "问答"
                    }
                ]
            },
            {
                "key": "topic",
                "name": "话题标签",
                "type": "String",
                "desc": "例如#如何看待免费皮肤枪++#",
                "required": false
            },
            {
                "key": "topicGameId",
                "name": "话题所属GameId",
                "type": "String",
                "desc": "",
                "required": false
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "图文投稿",
        "uri": "submit_work",
        "params": [
            {
                "key": "submit_work_type",
                "name": "投稿类型",
                "type": "String",
                "desc": "1图文，2视频，3问答圈",
                "required": true,
                "options": [
                    {
                        "value": "1",
                        "desc": "图文"
                    },
                    {
                        "value": "2",
                        "desc": "视频"
                    },
                    {
                        "value": "3",
                        "desc": "问答圈"
                    }
                ]
            },
            {
                "key": "submit_work_game_id",
                "name": "投稿业务gameId",
                "type": "投稿业务gameId",
                "desc": "",
                "required": false
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "绑定手机号",
        "uri": "bind_phone",
        "params": [
            {
                "key": "title",
                "name": "页面标题",
                "type": "String",
                "desc": "如解绑手机号",
                "required": true
            },
            {
                "key": "type",
                "name": "页面类型",
                "type": "Int",
                "desc": "0:解绑手机，1:换绑手机",
                "required": false
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "添加游戏",
        "uri": "addgame",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "账号管理",
        "uri": "accountManager",
        "params": [
            {
                "key": "gameId",
                "name": "gameId",
                "type": "String",
                "desc": "业务id",
                "required": true
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "游戏授权",
        "uri": "game_authorization",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "举报",
        "uri": "report",
        "params": [
            {
                "key": "userId",
                "name": "userId",
                "type": "String",
                "desc": "userId",
                "required": true
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "添加备注",
        "uri": "remark",
        "params": [
            {
                "key": "userId",
                "name": "userId",
                "type": "String",
                "desc": "用户ID",
                "required": true
            },
            {
                "key": "userId++",
                "name": "userId++",
                "type": "String",
                "desc": "用户ID",
                "required": true
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "动态详情",
        "uri": "momentDetail",
        "params": [
            {
                "key": "momentId",
                "name": "动态id",
                "type": "int",
                "desc": "",
                "required": true
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "lowestVserion": "3.23",
        "type": 10042
    },
    {
        "name": "圈子详情页",
        "uri": "CircleDetailMomentListPage",
        "params": [
            {
                "key": "cleId",
                "name": "cleId",
                "type": "String",
                "desc": "圈子id",
                "required": true
            },
            {
                "key": "circleName",
                "name": "圈子名",
                "type": "String",
                "desc": "",
                "required": false
            },
            {
                "key": "circleNickName",
                "name": "圈子昵称",
                "type": "String",
                "desc": "圈子昵称",
                "required": false
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "lowestVserion": "3.23",
        "type": 10042
    },
    {
        "name": "赛事介绍页",
        "uri": "competion_view",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "动态答案详情",
        "uri": "momentAnswerDetail",
        "params": [
            {
                "key": "momentId",
                "name": "动态Id",
                "type": "int",
                "desc": "",
                "required": true
            },
            {
                "key": "answerId",
                "name": "答案Id",
                "type": "int",
                "desc": "",
                "required": true
            },
            {
                "key": "gameId",
                "name": "gameId",
                "type": "int",
                "desc": "",
                "required": false
            },
            {
                "key": "type",
                "name": "跳转类型",
                "type": "int",
                "desc": "0正常跳转，1为定位到评论列表",
                "required": false,
                "options": [
                    {
                        "value": 0,
                        "desc": "正常跳转"
                    },
                    {
                        "value": 1,
                        "desc": "定位到评论列表"
                    }
                ]
            },
            {
                "key": "myCommentId",
                "name": "myCommentId",
                "type": "int",
                "desc": "",
                "required": false
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
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
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "搜索社区用户入口页",
        "uri": "search_user",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "搜索社区用户结果页",
        "uri": "search_user_result",
        "params": [
            {
                "key": "searchWord",
                "name": "搜索关键字",
                "type": "String",
                "desc": "",
                "required": true,
                "defaultValue": ""
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "频道列表",
        "uri": "info_channel_list",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10002
    },
    {
        "name": "游戏下载配置",
        "uri": "downloadGame",
        "params": [
            {
                "key": "sceneId",
                "name": "场景id",
                "type": "String",
                "desc": "资讯=201等",
                "required": true
            },
            {
                "key": "downloadInfo",
                "name": "下载信息",
                "type": "String",
                "desc": "下载配置信息，一个json字符串",
                "required": true
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10044
    },
    {
        "name": "打开微信小程序",
        "uri": "openChatFunc",
        "params": [
            {
                "key": "id",
                "name": "小程序id",
                "type": "String",
                "desc": "",
                "required": true
            },
            {
                "key": "path",
                "name": "小程序页面路径",
                "type": "String",
                "desc": "拉起小程序页面的可带参路径，不填默认拉起小程序首页",
                "required": false
            },
            {
                "key": "type",
                "name": "小程序类型",
                "type": "String",
                "desc": "1测试版、2预览版、3正式版",
                "required": false,
                "options": [
                    {
                        "value": "1",
                        "desc": "测试版"
                    },
                    {
                        "value": "2",
                        "desc": "预览版"
                    },
                    {
                        "value": "3",
                        "desc": "正式版"
                    }
                ]
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10034
    },
    {
        "name": "组队页面",
        "uri": "make_team_page",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
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
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "消息设置页",
        "uri": "cfgroup://msg_setting",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "设置页",
        "uri": "cfgroup://setting_page",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "意见反馈",
        "uri": "cfgroup://feedback",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "地图首页",
        "uri": "map_home_page",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "掌火动态答题",
        "uri": "moment_questions_page",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "火线币",
        "uri": "fire_coin",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042
    },
    {
        "name": "资讯详情页",
        "uri": "infodetail",
        "params": [
            {
                "key": "iInfoId",
                "name": "目标跳转资讯ID",
                "type": "String",
                "desc": "",
                "required": true
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10005
    },
    {
        "name": "搜索交易所商品",
        "uri": "exchange_search",
        "params": [
            {
                "key": "roleId",
                "name": "角色id",
                "type": "int",
                "desc": "",
                "required": true,
                "defaultValue": 0
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042,
        "lowestVersion": "3.24.0"
    },
    {
        "name": "CF交易所商品详情页",
        "uri": "exchangeSaleItemDetail",
        "params": [
            {
                "key": "itemId",
                "name": "物品id",
                "type": "String",
                "desc": "要打开商品详情的物品id",
                "required": true
            },
            {
                "key": "roleId",
                "name": "角色id",
                "type": "int",
                "desc": "当前用户的角色id",
                "required": true
            },
            {
                "key": "commentId",
                "name": "评论id",
                "type": "int",
                "desc": "跳转到的评论id",
                "required": false,
                "lowestVersion": "3.24.0"
            },
            {
                "key": "subCommentId",
                "name": "子评论id",
                "type": "int",
                "desc": "要跳转的子评论id",
                "required": false,
                "lowestVersion": "3.24.0"
            },
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042,
        "lowestVersion": "3.24.0"
    },
    {
        "name": "CF交易所首页",
        "uri": "cf_exchange_home_page",
        "params": [
            {
                "key": "_isBindRole",
                "name": "角色绑定提示",
                "type": "int",
                "required": "false",
                "desc": "开启后，当前选中业务无角色时会弹绑定角色提示窗，需要指定业务",
                "options": [
                    {
                        "value": 0,
                        "desc": "无角色时不提示"
                    },
                    {
                        "value": 1,
                        "desc": "无角色时弹窗提示"
                    }
                ]
            }
        ],
        "type": 10042,
        "lowestVersion": "3.24.0"
    }
];