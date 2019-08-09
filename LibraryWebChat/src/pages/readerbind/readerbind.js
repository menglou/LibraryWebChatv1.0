import Taro, { Component } from '@tarojs/taro'
import {Swiper, SwiperItem, View, Text ,Image } from '@tarojs/components'
import { AtInput, AtForm ,AtIcon,AtSwipeAction,AtNoticebar,AtGrid,AtButton } from 'taro-ui'
import './readerbind.scss'

export class ReaderBind extends Component{
    config={

    }
    constructor(props){
        super(props)
        this.state={
               readeracount:"",
               readerpwd:""
        }
    }

    componentWillMount () { }

    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    onClick(){
         Taro.showModal({title:'爱的提示',content:'爱娇妹真好'})
    }
    
    render(){
        return(
            <View className="container">
                <View className="img-view">
                    <Image className="top-image" src="../../asset/resource/1.jpg"></Image>
                </View>
                <View className="form-input">
                    <AtForm>
                        <View className="form-input-user">
                            <View className="form-input-user-icon">
                               <Image className="img-user" src="../../asset/resource/用户.jpg"></Image>
                            </View>
                            <View className="form-input-user-input">
                               <AtInput  type="text" border={false} placeholder="请输入你的读者账号" value={this.state.readeracount}></AtInput>
                            </View>
                        </View>
                        <View className="form-input-pwd">
                            <View className="form-input-pwd-icon">
                               <Image className="img-pwd" src="../../asset/resource/密码.jpg"></Image>
                            </View>
                            <View className="form-input-pwd-input">
                               <AtInput type="password" border={false} placeholder="请输入你的读者密码" value={this.state.readerpwd}></AtInput>
                            </View>
                        </View>
                        
                        
                    </AtForm>
                </View>
                <View className="submit-view">
                      <AtButton type="primary" onClick={this.onClick}>立即绑定</AtButton>
                </View>
            </View>
        )
    }
}