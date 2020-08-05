import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal, FlatList } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
});

function RenderDish(props) {
    const dish = props.dish;

    if(dish != null ) {
        return (
            <Card featuredTitle={dish.name} image={{ uri: baseUrl + dish.image}}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <View>
                    <Icon raised reverse name={ props.favorite ? 'heart' : 'heart-o'} type='font-awesome' color='#f50'
                        onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
                    <Icon raised reverse name='pencil' type='font-awesome' color='#512DA8'
                        onPress={()=> props.toggleModal()}
                    />
                </View>
            </Card>
        );
    }
    else {
        return(<View></View>)
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return(
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Rating
                            showRating
                            rating={item.rating}
                            style={{margin: 10}}
                        />
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }

    return(
        <Card title="Comments">
            <FlatList 
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            rating: 3,
            comment: '',
            author: ''
        }
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleComment(dishId) {
        console.log(JSON.stringify(this.state));
        this.props.postComment(dishId, this.state.rating, this.state.author, this.state.comment)
        this.toggleModal();
    }

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    ratingCompleted = (rating) => {
        this.setState({
            rating: rating
        });
    }

    render() {
        const dishId = this.props.route.params.dishId;

        return(
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    toggleModal={() => this.toggleModal()} 
                    />             
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => this.toggleModal()}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.formRow}>
                        <Rating
                            showRating
                            style={{margin: 10}}
                            onFinishRating={this.ratingCompleted}
                        />
                    </View> 
                    <View style={styles.formRow}>  
                        <Input
                            placeholder="Author"
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            onChangeText={value => this.setState({ author: value })}
                        />
                        <Input
                            placeholder="Comment"
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            onChangeText={value => this.setState({ comment: value })}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Button
                            title='Submit'
                            color='#512DA8'
                            onPress={() => this.handleComment(dishId)}
                            accessibilityLabel='Learn more about this purple button'
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Button
                            title='Cancel'
                            color='#808080'
                            onPress={() => this.toggleModal()}
                            accessibilityLabel='Learn more about this purple button'
                        />
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        justifyContent: 'center',
        margin: 10
    },
      button: {
        width: '40%',
        height: 40
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);