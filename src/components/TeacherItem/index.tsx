import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri:
                            "https://avatars1.githubusercontent.com/u/60125300?s=460&u=98eeb4a4d64bc31f638be7acae2f773f152b27f9&v=4",
                    }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Luan Farias</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Entusiastas das melhores tecnologias de química avanãda.
                {"\n"}
                {"\n"}
                Apaixonado por explodir coisas em laboratório e por mudar a vida
                das pessoas atráves de experiências. Mais de 200.000 pessoas já
                passaram por uma das minhas explosões.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {"   "}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[styles.favoriteButton, styles.favorited]}
                    >
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
};

export default TeacherItem;
