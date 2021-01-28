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
import Icon from 'react-native-vector-icons/Ionicons'

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
  

export default class UserProfile extends Component {

    render(){
        return(
        <View style={{backgroundColor:'white'}}>
        <ScrollView>
            <View style={{flexDirection:'row'}}>
                <Image
                        style={styles.Avatar}
                        marginTop={50}
                        marginLeft={20}
                        borderColor='white'
                        borderWidth={1}
                        zIndex={-1}
                        source={{
                            uri:'https://resources.premierleague.com/premierleague/photos/players/250x250/p50232.png'
                        }}
                            size={50}
                            />
            </View>

            <View style={{flexDirection:'row', marginTop:15, marginLeft:15,}}>
                <Title style={styles.header}>Jonjo Shelvey</Title>
                <Text style={styles.score}>4243</Text>                
            </View>

            <View style={styles.bioContainer}>
                <View style={styles.bioCaption}>
                   <Caption style={styles.bioText}>Wagwan beez</Caption> 
                </View>
                
            </View>

            <View style={styles.container}>
            <Title style={{fontSize:15, color:'gray',}}>TOP POSTS</Title>  
                <View style={styles.row}>
                        <View style={styles.section}>
                        <Avatar.Image
                            source={{
                                uri:'https://resources.premierleague.com/premierleague/photos/players/250x250/p50232.png'

                            }}
                            size={30}
                        />
                        </View>
                        <View style={styles.section}>
                            <Caption style={ styles.caption}>Aaron Moran in General</Caption>
                        </View>
                    </View>                 
                <Title style={styles.title}>Bro i would grease that</Title>
                <Text style={{width:350, marginBottom:10, fontSize:17}}>This is the post content, blah blah blah, more text hello world hello thank you okay.</Text>
                <Caption style={ styles.caption}>22 January 2021</Caption>
            </View>

            <Separator/>
            
            <View style={styles.container}>
            <View style={styles.row}>
                    <View style={styles.section}>
                    <Avatar.Image
                        source={{
                            uri:'https://resources.premierleague.com/premierleague/photos/players/250x250/p50232.png'

                        }}
                        size={30}
                    />
                    </View>
                    <View style={styles.section}>
                        <Caption style={ styles.caption}>Aaron Moran in General</Caption>
                    </View>
                </View>                 
                <Title style={styles.title}>Bro i would grease that</Title>
                <Text style={{width:350, marginBottom:10, fontSize:17}}>This is the post content, blah blah blah, more text hello world hello thank you okay.</Text>
                <Caption style={ styles.caption}>22 January 2021</Caption>

            </View>

            <Separator/>

            <View style={styles.container}>
                <View style={styles.section}>
                    <Icon name="planet-outline" size={20} style={{marginRight:10}}/>
                    <Title style={{fontSize:15, color:'gray',}}>COMMUNITIES</Title>  
                </View>             
                <View style={styles.section}>             
                    <Avatar.Image
                            marginRight={10}
                            source={{
                                uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={10}
                            source={{
                                uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={10}
                            source={{
                                uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={10}
                            source={{
                                uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                            }}
                            size={50}
                        />
                </View>
            </View>

            <Separator/>

            <View style={styles.container}>
                <Title style={{fontSize:15, color:'gray',}}>ACHIEVEMENTS</Title>               
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
        fontSize: 22,
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
        width:120,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:80
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
        fontSize: 16,
        lineHeight: 14,
        justifyContent:'center',
        flexDirection:'row'
    },
    score:{
        backgroundColor:'lightblue',
        padding:5,
        marginTop:5,
        flexDirection:'row'

    },
    bioContainer:{
      backgroundColor:'whitesmoke',
      color:'white',
      fontSize: 14,  
      flexDirection:'row', 
      marginTop:10, 
      alignSelf: 'stretch',
      marginBottom:20
    },
    bioCaption:{
        marginLeft:25,
        marginTop:10,
        marginBottom:10
    },
    bioText:{
        fontSize: 16,
        lineHeight: 14,
        justifyContent:'center',
        flexDirection:'row',
        color:'gray',
    },
})