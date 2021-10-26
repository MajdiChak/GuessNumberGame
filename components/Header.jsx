import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

function Header(props){
    return(
        <View style={styles.header}>
            <Text  style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        width: "100%",
        height: 70,
        paddingTop:15,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.primary},
    

    headerTitle:{ fontSize:22,fontWeight:"bold",color:colors.white }
})

export default Header