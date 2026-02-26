import { StyleSheet } from "react-native";
import { Text } from "@react-navigation/elements";
export default function CategoryText(props:any)
{
    return (
        <Text style={style.text}>{props.text}</Text>
    );
}

const style= StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 700,
    }
})