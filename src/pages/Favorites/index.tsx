import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

function Favorites() {
    const [favorites, setFavorites] = useState<Teacher[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem("favorites").then((response) => {
            if (!response) return;
            const favoritedTeachers = JSON.parse(response);

            setFavorites(favoritedTeachers);
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher) => (
                    <TeacherItem
                        teacher={teacher}
                        key={teacher.id}
                        favorited={true}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default Favorites;
