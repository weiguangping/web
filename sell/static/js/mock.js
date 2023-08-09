import Mock from 'mockjs';
let banner = {
    'items|30': [{
        'id|+1': 0,
        'name': '@name',
        'age|1-100': 100,
        'color': '@color',
        'url': "@image('200x100', '#ff6600', '#FFF', 'png', 'img')"
    }]
}
let cats = {
    'items|30': [{
        'id|+1': 0,
        'name': '@name',
        'age|1-100': 100,
        'color': '@color',
        'url': "@image('200x100', '#ff6600', '#FFF', 'png', 'img')"
    }]
}
let tabs = {
    'items|4': [{
        'id|+1': 0,
        'name': '@name',
        'age|1-100': 100,
        'color': '@color',
        'url': "@image('200x100', '#ff6600', '#FFF', 'png', 'img')"
    }]
}
let pro = {
    'title': '@name',
    'items|50': [{
        'id|+1': 0,
        'name': '@name',
        'age|1-100': 100,
        'color': '@color',
        'url': "@image('200x100', '#ff6600', '#FFF', 'png', 'img')"
    }]
}
let msg2 = {
    'items|12': [{
        'id|+1': 0,
        'name': '@name',
        'age|1-100': 100,
        'color': '@color',
        'url': "@image('200x100', '#ff6600', '#FFF', 'png', 'img')"
    }]
}
let det = {
    'name': '@name',
    'det': '@name',
    'minprice|0-100': 0,
    'maxprice|0-100': 0,
    'img|3': ["@image('200x100', '#ff6600', '#FFF', 'png', 'img')"],
    'details|10': ["@image('200x100', '#ff6600', '#FFF', 'png', 'img')"],
    'sku|2': [{
        'id|+1': 0,
        'name': '@name',
        'value|4': [{
            'id|+1': 0,
            'name': '@name'
        }]
    }],
    'items|4': [{
        'id|+1': 0,
        'name': '@name',
        'age|1-100': 100,
        'color': '@color',
        'url': "@image('200x100', '#ff6600', '#FFF', 'png', 'img')"
    }]
}
let orderlist = {
    'page|0-3': 1,
    'items|20': [{
        'id|+1': 0,
        'name': '@name',
        'skuName': '@name',
        'img': ["@image('200x100', '#ff6600', '#FFF', 'png', 'img')"],
        'price|0-99': 0,
        'num|0-99': 0
    }]
}
let orderDetails = {
    'page|0-3': 1,
    'items|3': [{
        'id|+1': 0,
        'name': '@name',
        'skuName': '@name',
        'img': ["@image('200x100', '#ff6600', '#FFF', 'png', 'img')"],
        'price|0-99': 0,
        'num|0-99': 0
    }],
    'name': '@name',
    'details': '@county(true)',
    'tolprice|1-9999': 0,
    'issend|1': true,
    'ordernumber': '@id',
    'dan': '@id',
    'mobile': /1\d{10}/,
    'state|1-4': 0
}
Mock.mock("pro", pro)
Mock.mock("banner", banner)
Mock.mock("cats", cats)
Mock.mock("tabs", tabs)
Mock.mock("msg2", msg2)
Mock.mock("det", det)
Mock.mock("orderlist", orderlist)
Mock.mock("orderDetails", orderDetails)