import React, { Component } from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';
import {TabNavigator} from "react-navigation";
import index from './src/components/index/index'
import linkList from './src/components/linkfriend/linkList'
import familySchool from './src/components/familyschool/familySchoolShow'
import course from './src/components/course/courseList'
import userCenter from './src/components/usercenter/userCenter'


const mainPage = TabNavigator({
    index: {
        screen: index,
        navigationOptions: {
            title: '吴恩廷',
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('./img/muwu.jpg')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    linkList: {
        screen: linkList,
        navigationOptions: {
            title: '联系人',
            tabBarLabel: '联系人',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('./img/muwu.jpg')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    familySchool: {
        screen: familySchool,
        navigationOptions: {
            header:null,
            tabBarLabel: '家校圈',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('./img/muwu.jpg')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    course: {
        screen: course,
        navigationOptions: {
            header:null,
            tabBarLabel: '课堂',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('./img/muwu.jpg')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    userCenter: {
        screen: userCenter,
        //以下参数也可放置在MinePage.js页面
        navigationOptions: {
            title: '个人中心',
            tabBarLabel: '个人中心',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('./img/muwu.jpg')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#0F9C00', // 文字和图片选中颜色
        inactiveTintColor: '#333', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height:50
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop: 0,
        },
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});

module.exports = mainPage;

