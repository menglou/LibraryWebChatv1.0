import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/mine',
      'pages/readerbind/readerbind',
      'pages/authorpromt/authorpromt'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '测试',
      navigationBarTextStyle: 'black',
      backgroundColor:"#eee"
    },
    tabBar:{
      color: "#626567",
      selectedColor: "#1FAEE6",
      backgroundColor: "#fff",
      borderStyle: "white",
      position:"bottom",
      list:[
           {
             pagePath:'pages/index/index',
             text:'首页',
             iconPath:'asset/img/home.png',
             selectedIconPath:'asset/img/home_focus.png'
           },
           {
            pagePath:'pages/mine/mine',
            text:'我的',
            iconPath:'asset/img/company.png',
            selectedIconPath:'asset/img/company_focus.png'
           },
         ],
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
