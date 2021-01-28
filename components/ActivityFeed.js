import React, {Component} from 'react'
import {View, Image, StyleSheet,SafeAreaView, ScrollView, SectionList} from 'react-native'
import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Button,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

const Separator = () => (
    <View style={styles.separator} />
);

export default class ActivityFeed extends Component {

    render(){
        return(
        <View style={{backgroundColor:'white'}}>
        <ScrollView>
            <Separator/>

            <View style={styles.container}>
                <View style={styles.section}>
                    <Avatar.Image
                        source={{
                            uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                        }}
                        size={30}
                        marginRight={10}

                    />
                    <Text style={styles.title}>
                        <Text>Aaron Moran </Text>
                        followed you.
                    </Text>
                    
                </View>

                <Separator/>

                    
                <View style={styles.section}>
                    <Avatar.Image
                        source={{
                            uri:'https://www.thesun.co.uk/wp-content/uploads/2020/03/NINTCHDBPICT000571254905-e1584395163259.jpg'

                        }}
                        size={30}
                        marginRight={10}
                    />
                    <Text style={styles.title}>
                        <Text>Thomas Kenny </Text>
                        followed you.
                    </Text>
                </View>

                <Separator/>


                <View style={styles.section}>
                    <Avatar.Image
                        source={{
                            uri:'https://pbs.twimg.com/profile_images/552307347851210752/vrXDcTFC_400x400.jpeg'

                        }}
                        size={30}
                        marginRight={10}

                    />
                    <Text style={styles.title}>
                        <Text>Conor Shortt </Text>
                        followed you.
                    </Text>

                    <Button title="Hello"/>
                </View>
                
            </View>

            <Separator/>

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
        width:200,
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
        marginTop:10,
        marginBottom:10
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