import React, { useState } from "react";
import { View, Text } from "react-native";

import PageHeader from "../../components/PageHeader";
import {
    BorderlessButton,
    RectButton,
    ScrollView,
    TextInput,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";

function TeacherList() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        const response = await api.get("classes", {
            params: {
                subject,
                week_day,
                time,
            },
        });

        setTeachers(response.data);
        setIsFiltersVisible(false);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor="#C1BCCC"
                            style={styles.input}
                            placeholder="Qual a matéria"
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#C1BCCC"
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    value={week_day}
                                    onChangeText={(text) => setWeekDay(text)}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#C1BCCC"
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton
                            onPress={handleFiltersSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher, key) => (
                    <TeacherItem teacher={teacher} key={teacher.id} />
                ))}
            </ScrollView>
        </View>
    );
}

export default TeacherList;
