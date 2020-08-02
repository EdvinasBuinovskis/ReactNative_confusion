import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
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
        );
    }
}

export default Contact;