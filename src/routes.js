import MainCatagory from './components/MainCatagory'
import NewCar from './components/NewCar'
import ListCar from './components/ListCar'
import ButtonMenu from './components/ButtonMenu'


export const routes=[
    {'path':'/catagory',name:'catagory',component:MainCatagory},
    {'path':'/catagoryCar',name:'catagoryCar',component:NewCar},
    {'path':'/catagoryCar/ListCar/:id/:namecar',name:'ListCar',component:ListCar},
    {'path':'/ButtonMenu',name:'ButtonMenu',component:ButtonMenu},
   
]