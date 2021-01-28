import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
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
import Icon from 'react-native-vector-icons/Ionicons'


const Separator = () => (
    <View style={styles.separator} />
);

export default class Settings extends React.Component {

  render() {
    return (
    <View  style={{backgroundColor:'white'}}>
        <ScrollView>
      <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.section}>
                    <Icon name="person-outline" size={20} style={{marginLeft:15,marginRight:10}}/>
                </View>
                <View style={styles.section}>
                    <Caption style={ styles.title}>Manage Account</Caption>
                </View>
            </View>
        </View>

        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.section}>
            <View style={styles.section}>
                    <Icon name="lock-closed-outline" size={20} style={{marginLeft:15,marginRight:10}}/>
                </View>
                <View style={styles.section}>
                    <Caption style={ styles.title}>Privacy</Caption>
                </View>
            </View>
        </View>
        </View>

        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.section}>
            <View style={styles.section}>
                    <Icon name="shield-checkmark-outline" size={20} style={{marginLeft:15,marginRight:10}}/>
                </View>
                <View style={styles.section}>
                    <Caption style={ styles.title}>Security and login</Caption>
                </View>
            </View>
        </View>
        </View>

        <Separator/>

        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.section}>
            <View style={styles.section}>
                    <Icon name="planet-outline" size={20} style={{marginLeft:15,marginRight:10}}/>
                </View>
                <View style={styles.section}>
                    <Caption style={ styles.title}>Community Guidelines</Caption>
                </View>
            </View>
        </View>
        </View>

        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.section}>
            <View style={styles.section}>
                    <Icon name="share-outline" size={20} style={{marginLeft:15,marginRight:10}}/>
                </View>
                <View style={styles.section}>
                    <Caption style={ styles.title}>Share profile</Caption>
                </View>
            </View>
        </View>
        </View>

        <Separator/>

        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.section}>
            <View style={styles.section}>
                    <Icon name="log-out-outline" size={20} style={{marginLeft:15,marginRight:10}}/>
                </View>
                <View style={styles.section}>
                    <Caption style={ styles.title}>Log out</Caption>
                </View>
            </View>
        </View>
        </View>

        </ScrollView>
    </View>
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
        fontSize: 17,
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
        marginLeft:5,
        backgroundColor:'white'
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