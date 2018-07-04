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
                    source={require('./img/tabna01.png')}
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
                        require('./img/tabna02.png')
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
                        require('./img/tabna03.png')
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
                        require('./img/tabna04.png')
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
                        require('./img/tabna05.png')
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
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#3bd1fc',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
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

