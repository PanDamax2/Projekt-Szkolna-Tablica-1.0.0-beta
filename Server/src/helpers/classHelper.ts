import Classroom from "../models/classroom.model";

export function classroomRemoveTimestamps(classroom: Classroom) {
    const { createdAt, updatedAt, ...classroomWithoutTimestamps } = classroom.get({ plain: true });
    return classroomWithoutTimestamps;
}
