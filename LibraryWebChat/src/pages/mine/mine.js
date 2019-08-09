import Taro, { Component, connectSocket } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem } from '@tarojs/components'
import './mine.scss'
import { AtInput, AtForm ,AtIcon,AtSwipeAction,AtAvatar } from 'taro-ui'

export class Mine extends Component{
     config={
        
    }
     constructor(props){
         super(props)
         this.state={
             img:"",
             nickname:""
         }
     }

     componentWillMount () { 
        this.onIsAuthor();
     }

     componentDidMount () { }
   
     componentWillUnmount () { }
   
     componentDidShow () { }
   
     componentDidHide () { }

     onredirct(){

     }

     onIsAuthor(){
         Taro.getSetting({
             success:(res=>{
               
                if(res.authSetting["scope.userInfo"])
                {
                     //获取用户信息并登录
                     Taro.getUserInfo({
                        success:(res)=>{
                           
                            var nickName = res.userInfo.nickName
                            var avatarUrl = res.userInfo.avatarUrl
                            var gender = res.userInfo.gender //性别 0：未知、1：男、2：女
                            var province = res.userInfo.province
                            var city = res.userInfo.city
                            var country = res.userInfo.country
                           
                            this.setState({
                                  img:res.userInfo.avatarUrl,
                                  nickName:res.userInfo.nickName
                            },()=>{})
                         }
                    })
                  
                }
                else
                {
                  Taro.navigateTo({url:"../authorpromt/authorpromt"})
                }
             })
         })
     }
   
     render(){
         return(
             <View className="container">
                  <View className="userinfo-imgeandname">
                        <View className="Avatar">
                            <AtAvatar size="large" circle image={this.state.img}></AtAvatar>
                        </View>
                        <View className="Nickname-view">
                            <Text>{this.state.nickName}</Text>
                        </View>
                  </View>
             </View>
         )
     }
}