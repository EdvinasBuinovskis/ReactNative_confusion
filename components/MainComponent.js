import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from './ContactComponent';
import About from './AboutComponent';

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
            />             
        </MenuNavigator.Navigator>
    );
}

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
    return(
        <HomeNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeNavigator.Navigator>
    );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return(
        <ContactNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <ContactNavigator.Screen
                name="Contact Us"
                component={Contact}
            />
        </ContactNavigator.Navigator>
    );
}

const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return(
        <AboutNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <AboutNavigator.Screen
                name="About us"
                component={About}
            />
        </AboutNavigator.Navigator>
    );
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return(
        <MainNavigator.Navigator 
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#D1C4E9'
            }}
        >
            <MainNavigator.Screen name="Home" component={HomeNavigatorScreen} />
            <MainNavigator.Screen name="About Us" component={AboutNavigatorScreen} />
            <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen} />
            <MainNavigator.Screen name="Contact Us" component={ContactNavigatorScreen} />           
        </MainNavigator.Navigator>
    );
}

class Main extends Component {

    render () {
        return (
            <NavigationContainer>
                <MainNavigatorDrawer/>           
            </NavigationContainer>
        );
    }
}

export default Main;