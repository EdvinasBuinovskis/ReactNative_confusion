import React, { Component } from 'react';
import { Image, StyleSheet, SafeAreaView, ScrollView, View, Text, ToastAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';

import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent'
import Login from './LoginComponent';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
});

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

const ReservationNavigator = createStackNavigator();

function ReservationNavigatorScreen() {
    return(
        <ReservationNavigator.Navigator
            screenOptions={HeaderOptions}
        >
            <AboutNavigator.Screen
                name="Reserve Table"
                component={Reservation}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
            />
        </ReservationNavigator.Navigator>
    );
}

const FavoritesNavigator = createStackNavigator();

function FavoritesNavigatorScreen() {
    return(
        <FavoritesNavigator.Navigator
            screenOptions={HeaderOptions}
        >
            <FavoritesNavigator.Screen
                name="My Favorites"
                component={Favorites}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
            />
        </FavoritesNavigator.Navigator>
    );
}

const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
    return(
        <LoginNavigator.Navigator
            screenOptions={HeaderOptions}
        >
            <LoginNavigator.Screen
                name="Login"
                component={Login}
                options= {
                    ({ navigation }) => ({
                    headerLeft: () => <MenuIcon navigation={navigation}/>
                    })
                }
            />
        </LoginNavigator.Navigator>
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
                name="Login" 
                component={LoginNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='sign-in' type='font-awesome' size={24} color={color}/>
                    )
                }}

            />
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
            <MainNavigator.Screen 
                name="My Favorites" 
                component={FavoritesNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='heart' type='font-awesome' size={24} color={color}/>
                    )
                }}
            />   
            <MainNavigator.Screen 
                name="Reserve Table" 
                component={ReservationNavigatorScreen} 
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='cutlery' type='font-awesome' size={24} color={color}/>
                    )
                }}
            />                 
        </MainNavigator.Navigator>
    );
}

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

        NetInfo.fetch().then((connectionInfo) => {
            ToastAndroid.show('Initial Network Connectivity Type: '
                + connectionInfo.type, ToastAndroid.LONG)
        });
        NetInfo.addEventListener(connectionChange => this.handleConnectivityChange(connectionChange))
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(connectionChange => this.handleConnectivityChange(connectionChange))
    }

    handleConnectivityChange = (connectionInfo) => {
        switch (connectionInfo.type) {
            case 'none': 
                ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
                break;
            case 'wifi':
                ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
                break;
            case 'cellular':
                ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
                break;
            case 'unknown':
                ToastAndroid.show('You now have an unknown connection!', ToastAndroid.LONG);
                break;
            default:
                break;
        }
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);