import Taro, { Component } from '@tarojs/taro'
import {Swiper, SwiperItem, View, Text ,Image } from '@tarojs/components'
import './index.scss'
import { AtInput, AtForm ,AtIcon,AtSwipeAction,AtNoticebar,AtGrid  } from 'taro-ui'

import {Home_List} from '../static/list'

export default class Index extends Component {

  config = {
   
  }

  componentWillMount () { 
     
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  ongridclick(e){
        
       if(e.key==1)
       {
         Taro.navigateTo({url:'../readerbind/readerbind'})
       }
  }

  render () {
    return (
      <View className='maincontent'>
        <View className="searchinput">
          <View className="at-icon at-icon-search icon" >
             
          </View>
          <View className="input-booknameorauthorview">
            <AtInput type="text"  border={false}   placeholder="请输入查询书明/作者关键词" confirmType="搜索"></AtInput>
          </View>
        </View>
        <View className="shuffling-view">
            <Swiper className="swiper-container" circular  indicatorDots  indicatorColor='#999' indicatorActiveColor='#bf708f' autoplay>
              <SwiperItem>
                <Image className="swiper-img" src="../../asset/resource/1.jpg"></Image>
              </SwiperItem>
              <SwiperItem>
                <Image className="swiper-img" src="../../asset/resource/2.jpg"></Image>
              </SwiperItem>
            </Swiper>
        </View>
        <View className="notice-view">
          <AtNoticebar icon='volume-plus' marquee={true} speed={20} single={true}>
              书坊智慧图书馆欢迎您，书坊智慧图书馆欢迎您，书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,
              书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您
              ,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您
              ,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您,书坊智慧图书馆欢迎您
          </AtNoticebar>
        </View>
        <View className="list-view">
            <AtGrid data={Home_List.List} hasBorder={false} columnNum={4} onClick={this.ongridclick.bind(this)} />
        </View>
      </View>
    )
  }
}
