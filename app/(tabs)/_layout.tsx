import {Tabs} from "expo-router";
import React from "react";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/colors";
import {View} from "react-native";

export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: Colors.bgColor,
                padding: 0,
                borderTopWidth: 0,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: Colors.primaryColor,
            tabBarInactiveTintColor: Colors.inactive,
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name='compass' size={28} color={color}/>
                )
            }}/>
            <Tabs.Screen name="category" options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name='space-dashboard' size={28} color={color}/>
                )
            }}/>
            <Tabs.Screen name="search" options={{
                tabBarIcon: ({color}) => (
                    <View style={{
                        backgroundColor: Colors.primaryColor,
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderRadius: 10,
                        height: 50,
                        width: 60,
                    }}>
                        <Ionicons name='search' size={24} color={Colors.white}/>
                    </View>
                )
            }}/>
            <Tabs.Screen name="bookmarks" options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name='bookmark' size={28} color={color}/>
                )
            }}/>
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name='user' size={28} color={color}/>
                )
            }}/>
        </Tabs>
    )
}