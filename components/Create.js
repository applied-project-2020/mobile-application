import React, {Component} from 'react'
import {View, Button, Image, StyleSheet,SafeAreaView, ScrollView, SectionList} from 'react-native'
import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

const Separator = () => (
    <View style={styles.separator} />
);



export default class Create extends Component {

    render(){
        return(
        <>
            <Text>Write a Post</Text>
        </>    
        );
    }
}


const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    separator: {
        marginVertical: 8,
        marginTop:20,
        marginBottom:20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    lineStyle:{
        flexDirection:'row',
        borderWidth: 0.1,
        borderColor:'lightgray',
        width: 350,
        height: 0.1,
        margin:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
        width:200
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
        marginTop:10
    },
    paragraph:{
        fontWeight:'bold',
        marginRight: 3
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        paddingVertical:12,
        paddingHorizontal:16,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    },

    followBtn:{
        color:'#fff',
        borderRadius:25,
        width:100,
    },

    container: {
        flex: 1,
        marginTop:10,
        marginLeft:10,
      },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
      },
    item: {
        backgroundColor: "white",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 22,
        marginLeft: 10,
        backgroundColor: "#fff",
        fontWeight:'bold',
        marginRight: 3,

    },
    content:{
        marginTop:15,
        marginLeft:10,
    },
    Avatar:{
        width:100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    paragraph:{
        fontWeight:'bold',
        marginRight: 3,
        justifyContent:'center',
        flexDirection:'row'
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
        justifyContent:'center',
        flexDirection:'row'
    },
    score:{
        backgroundColor:'lightblue',
        padding:5,
        marginTop:5,
        flexDirection:'row'

    }
})