import Taro, { Component } from '@tarojs/taro'
import {Swiper, SwiperItem, View, Text ,Image } from '@tarojs/components'
import './authorpromt.scss'
import {TaroRequest} from '../untils/untils'

import { AtInput, AtForm ,AtIcon,AtSwipeAction,AtNoticebar,AtGrid, AtButton  } from 'taro-ui'

export class AuthorPromt extends Component{
    config={
        navigationBarTitleText: '授权登录',
    }
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentWillMount () { 
        
    }
  
    componentDidMount () { 

      
    }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { 

       


    }

    onauthor(e){
      if(e.detail.userInfo)
      {
          console.log(e.detail.userInfo)
          
          //调用登录获取openid
          Taro.login({
              success:(res)=>{
                 
                let param = {
                    url: 'Home',
                    data: {
                        code:res.code,
                        nickName:e.detail.userInfo.nickName,
                        province:e.detail.userInfo.province,
                        city:e.detail.userInfo.city,
                        gender:e.detail.userInfo.gender,
                    },
                    method: 'POST',
                }
                 
                TaroRequest(param).then(re=>{
                     debugger;
                     if(res.data.Code==100)
                     {
                         Taro.redirectTo({url:"../mine/mine"})
                     }
                     else{
                         Taro.showModal({title:"提示",content:"授权失败"}).then(res=>{
                              if(res.confirm)
                              {
                                 //把已经开开的授权在还原回去
                              }
                              else{
                               //把已经开开的授权在还原回去
                              }
                         })
                     }
                });
                   
              }
          })
      }
        
    }

    render(){
        return(
            <View >
                <View class='header'>
                    <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541568049159&di=2a7c5f20a198ec9bf72c9a84deb9c0db&imgtype=0&src=http%3A%2F%2Fwww.sj520.cn%2Fsc%2Fima%2Fweixin_sj520_25.jpg'></Image>
                </View>
 
                <View class='content'>
                    <View>申请获取以下权限</View>
                    <Text>获得你的公开信息(昵称，头像等)</Text>
                </View>
                 
                 <View className="login-view">
                     <AtButton type="primary" openType="getUserInfo"  onGetUserInfo={this.onauthor} >授权登录</AtButton>
                 </View>
            </View>

        )
    }
}