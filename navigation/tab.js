import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text , Image } from 'react-native'

import Home from "../Screens/Home";
import Map from "../Screens/Map";
import Profile from "../Screens/MyProfile";
import toDoList from "../Screens/toDoList";

const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    return (
        <Tab.Navigator>
            <Tab.Screen name ="Home" component={Home} 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/icon/home.png')}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tinColor:focused ? "#e32f45":"#748c94"
                        }}/>
                            <Text style={{color:focused ? "e32f45":"748c94",fontSize:12}}>
                            
                            </Text>
                        
                    </View>
                )
            }}/>
            <Tab.Screen name ="Map" component={Map}
                options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/icon/map.png')}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tinColor:focused ? "#e32f45":"#748c94"
                        }}/>
                            <Text style={{color:focused ? "e32f45":"748c94",fontSize:12}}>
                            
                            </Text>
                        
                    </View>
                )
            }}
            />
            <Tab.Screen name ="Profile" component={Profile}
                options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/icon/profile.png')}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tinColor:focused ? "#e32f45":"#748c94"
                        }}/>
                            <Text style={{color:focused ? "e32f45":"748c94",fontSize:12}}>
                            
                            </Text>
                        
                    </View>
                )
            }}
            />

            <Tab.Screen name ="To Do" component={toDoList}
                options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/icon/todolist.png')}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tinColor:focused ? "#e32f45":"#748c94"
                        }}/>
                            <Text style={{color:focused ? "e32f45":"748c94",fontSize:12}}>
                            
                            </Text>
                        
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
        
}

export default Tabs;