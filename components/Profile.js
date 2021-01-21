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


const DATA = [
    {
      title: "Featured",
      data: ["This is post 1 header"],
      content:["Hello world post content",],
    },
    {
      title: "Newest",
      data: ["This is post 1 header", "This is post 2 header", "This is post 3 header"],
      content:["Hello world post content", "Hello world post content", "Hello world post content"],    }
  ];
  
const Item = ({ title, data, content }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{data}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
  

export default class Profile extends Component {

    render(){
        return(
        <>
        <ScrollView>
            <View style={{flexDirection:'row', marginTop:20, marginLeft:15, justifyContent:'center',}}>
                <Image
                        style={styles.Avatar}
                        source={{
                            uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'
                            }}
                            size={50}
                            />
                {/* <View style={{flexDirection:'row', marginTop:20, marginLeft:15, justifyContent:'center',}}> */}
                    {/* <Title style={styles.title}>Randy Orton</Title> */}
                    {/* <Caption style={styles.caption}>Whats happening beez</Caption>
                    <Button style={styles.followBtn} width='100px' color='green' title="Follow"/> */}
                {/* </View>    */}
             
            </View>
            <View style={{flexDirection:'row', marginTop:20, marginLeft:15, justifyContent:'center',}}>
                <Title style={styles.header}>Aaron Moran</Title>
            </View>

            <View style={{flexDirection:'row', marginTop:10, marginLeft:15, justifyContent:'center',}}>
                <Caption style={styles.caption}>Wagwan beez</Caption>
            </View>

            <View style={{flexDirection:'row', marginTop:15, marginLeft:15, justifyContent:'center',}}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={ styles.caption}>Following</Caption>     
                <Paragraph style={[styles.paragraph, styles.caption]}> 100</Paragraph>
                <Caption style={ styles.caption}>Following</Caption>          
            </View>

            <Separator/>

            <View style={styles.container}>
                <Title>Featured</Title>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>


                
            </View>

            <View style={styles.container}>
                <Title>Newest</Title>               
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>
                <Text>This a post content to fill up space</Text>


            </View>

            {/* <SafeAreaView style={styles.container}>
                <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ section: {title, data, content} }) => 
                    <>
                        <Text style={styles.header}>{title}</Text>
                        <Text style={styles.content}>{data}</Text>
                        <Text style={styles.content}>{content}</Text>
                        <Separator/>
                    </>
                }
                />
            </SafeAreaView> */}
            </ScrollView>
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
})