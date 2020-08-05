import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <Card title="Contact Information">
                        <View style={{margin: 10}}>
                            <Text>121, Clear Water Bay Road{"\n"}</Text>
                            <Text>Clear Water Bay, Kowloon{"\n"}</Text>
                            <Text>HONG KONG{"\n"}</Text>
                            <Text>Tel: +852 1234 5678{"\n"}</Text>
                            <Text>Fax: +852 8765 4321{"\n"}</Text>
                            <Text>Email: confusion@food.net</Text>
                        </View>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;