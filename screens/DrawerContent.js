import React from 'react'
import {View, StyleSheet} from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView { ... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://image-cdn.essentiallysports.com/wp-content/uploads/20200915091809/Untitled-design-2020-09-15T091731.047.png'

                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column',}}>
                                <Title style={styles.title}>Randy Orton</Title>
                                <Caption style={styles.caption}>@randyorton</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={ styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>10</Paragraph>
                                <Caption style={ styles.caption}>Following</Caption>
                            </View>
                        </View>
                    </View>
                    <Text>
                    </Text>

                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}/>
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}/>
                            )}
                            label="Reading List"
                            onPress={() => {props.navigation.navigate('Reading')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}/>
                            )}
                            label="Contributors"
                            onPress={() => {props.navigation.navigate('Contributors')}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}/>
                            )}
                            label="Account Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Mode</Text>
                                <View pointerEvents="none"></View>
                                <Switch value={isDarkTheme}/>
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={ styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}/>
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
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
})