import React, { Component } from 'react';
import { Image, StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const HeaderOptions = {
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff"            
    }
};

const MenuIcon = (props) => {
    return(
        <Icon name='menu' size={24} color='white'
            onPress={() => 
                props.navigation.toggleDrawer()}
        />
    );
}


const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={HeaderOptions}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
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
            screenOptions={HeaderOptions}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
            />
        </HomeNavigator.Navigator>
    );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return(
        <ContactNavigator.Navigator
            screenOptions={HeaderOptions}
        >
            <ContactNavigator.Screen
                name="Contact Us"
                component={Contact}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
            />
        </ContactNavigator.Navigator>
    );
}

const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return(
        <AboutNavigator.Navigator
            screenOptions={HeaderOptions}
        >
            <AboutNavigator.Screen
                name="About us"
                component={About}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
            />
        </AboutNavigator.Navigator>
    );
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return(
        <MainNavigator.Navigator 
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#D1C4E9'
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props}/>}
        >
            <MainNavigator.Screen 
                name="Home" 
                component={HomeNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='home' type='font-awesome' size={24} color={color}/>
                    )
                }}

            />
            <MainNavigator.Screen 
                name="About Us" 
                component={AboutNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='info-circle' type='font-awesome' size={24} color={color}/>
                    )
                }}
            />
            <MainNavigator.Screen 
                name="Menu" 
                component={MenuNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='list' type='font-awesome' size={24} color={color}/>
                    )
                }}
            />
            <MainNavigator.Screen 
                name="Contact Us" 
                component={ContactNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='address-card' type='font-awesome' size={22} color={color}/>
                    )
                }}
            />           
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})

export default Main;