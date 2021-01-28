import React, {Component} from 'react'
import {View, Button, Image, StyleSheet,SafeAreaView, ScrollView, SectionList} from 'react-native'
import{
    Avatar,
    Title,
    Caption,
    TextInput,
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


export default class Profile extends Component {

    constructor(props){
        super(props);
        this.setState({ 
            refreshing: false,
        })
    }

    handleRefresh = () =>{
        this.setState({ refreshing:true,})
    }

    render(){
        return(
        <View style={{backgroundColor:'black', marginTop:5}}>
        <ScrollView >

        <View style={styles.container}>
                {/* <View style={styles.section}>
                    <Icon name="planet-outline" size={20}  style={{marginRight:5}}/>
                    <Title  style={{fontSize:14, color:'black',}}>YOUR COMMUNITIES</Title>  
                </View> */}
                {/* <View style={styles.section}>             
                    <Avatar.Image
                            marginLeft={30}
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://resources.premierleague.com/premierleague/photos/players/250x250/p50232.png'

                            }}
                            size={50}
                            onPress={() => navigation.navigate("Profile")}
                        />
                    <Avatar.Image
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={30}
                            marginTop={10}
                            source={{
                        uri:'data:image/png;base64,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'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://cdn.shopify.com/s/files/1/1095/6418/files/Montreal-canadiens-580x266.jpg?v=1481918145'

                            }}
                            size={50}
                        />
                </View>

                <View style={styles.section}>             
                    <Avatar.Image
                            marginLeft={30}
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://i.pinimg.com/originals/8d/c2/b0/8dc2b0a7aec6a71302b9f91902925643.png'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://pbs.twimg.com/profile_images/793776853467144192/g1rJjEmw_400x400.jpg'

                            }}
                            size={50}
                        />
                    <Avatar.Image
                            marginRight={30}
                            marginTop={10}
                            source={{
                                uri:'https://cdnb.artstation.com/p/assets/images/images/013/016/597/large/jessica-vicentini-wallpaperlogobcc.jpg?1537658551'

                            }}
                            size={50}
                        />
                </View> */}
                {/* <Text style={styles.links}>
                    See all
                </Text> */}
            </View>

            {/* <Separator/> */}

            <View style={styles.container}>
                <View style={styles.section}>
                    <Icon name="sunny-outline" size={20}  style={{marginRight:5}}/>
                    <Title style={{fontSize:14, color:'black',}}>DAILY DIGEST</Title>
                </View>
                <View style={styles.row}>
                    <View style={styles.section}>
                        <Avatar.Image
                        source={{
                            uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                        }}
                        size={30}
                    />
                    </View>
                    <View style={styles.section}>
                        <Caption style={ styles.caption}>
                            <Text>Aaron Moran</Text> in 
                            <Text style={{color:'green'}}> Compter Science</Text>
                        </Caption>
                    </View>
                </View> 
                <Title style={ styles.title}>5 work from Home Essentails that help me stay productive?</Title>
                {/* <Text style={{width:350 , fontSize:17}}>This is the post content, blah blah blah, more text hello world hello thank you okay.</Text> */}
            </View>

            <View style={styles.container}>
            <View style={styles.row}>
                    <View style={styles.section}>
                        <Avatar.Image
                        source={{
                            uri:'https://pbs.twimg.com/profile_images/552307347851210752/vrXDcTFC_400x400.jpeg'

                        }}
                        size={30}
                    />
                    </View>
                    <View style={styles.section}>
                        <Caption style={ styles.caption}>
                            <Text>Conor Shortt</Text> in 
                            <Text style={{color:'green'}}> GMIT</Text>
                        </Caption>
                    </View>
                </View>                 
                <Title  style={ styles.title}>Apple's Brings a Bazooka to Facebook's gun fight</Title>
                {/* <Text style={{width:350, marginBottom:10, fontSize:17}}>This is the post content, blah blah blah, more text hello world hello thank you okay.</Text> */}
                <Caption style={ styles.caption}>22 January 2021</Caption>

            </View>
            <View style={styles.container}>
            <View style={styles.row}>
                    <View style={styles.section}>
                    <Avatar.Image
                        source={{
                            uri:'https://img.cinemablend.com/filter:scale/quill/1/a/a/6/8/f/1aa68fa86a8241cdaa50c39ac8ecd547a73552e2.jpg?mw=600'

                        }}
                        size={30}
                    />
                    </View>
                    <View style={styles.section}>
                        <Caption style={ styles.caption}>
                            <Text>Tom Hansbury</Text> in 
                            <Text  style={{color:'green'}}> General</Text>
                        </Caption>
                    </View>
                </View>                 
                <Title  style={ styles.title}>Stop this microservices madness</Title>
                {/* <Text style={{width:350, marginBottom:10, fontSize:17}}>This is the post content, blah blah blah, more text hello world hello thank you okay.</Text> */}
                <Caption style={ styles.caption}>22 January 2021</Caption>

            </View>
            <View style={styles.container}>
            <View style={styles.row}>
                    <View style={styles.section}>
                    <Avatar.Image
                        source={{
                            uri:'https://www.thesun.co.uk/wp-content/uploads/2020/03/NINTCHDBPICT000571254905-e1584395163259.jpg'

                        }}
                        size={30}
                    />
                    </View>
                    <View style={styles.section}>
                        <Caption style={ styles.caption}>
                            <Text>Thomas Kenny</Text> in 
                            <Text style={{color:'green'}}> Compter Science</Text>
                        </Caption>
                    </View>
                </View> 
                <Title  style={ styles.title}>We're about to experieince the fakest economy boom in History</Title>
                {/* <Text style={{width:350, marginBottom:10, fontSize:17,}}>This is the post content, blah blah blah, more text hello world hello thank you okay.</Text> */}
                <Caption style={ styles.caption}>22 January 2021</Caption>


            </View>

            <View style={styles.container}>
                <Text style={styles.links}>Read More</Text>
            </View>

            <Separator/>

            <View style={styles.container}>
                <Title style={{fontSize:14, color:'black'}}>CONTRIBUTORS</Title>               
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
                <Text style={styles.links}>Read More</Text>
            </View>

            <Separator/>


            <View style={styles.container}>
                <View style={styles.section}>
                    <Icon name="bookmarks-outline" size={20} style={{marginRight:5}}/>
                    <Title style={{fontSize:14, color:'black',}}>READING LIST</Title> 
                </View>
              
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
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:10,
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
        backgroundColor:'white',
        marginBottom:10
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
        flexDirection:'row',
    },
    links:{
        color:'green',
        marginTop:15
    }
})