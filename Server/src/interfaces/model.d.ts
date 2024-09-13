import { Optional } from 'sequelize';

export interface AnnouncementAttributes {
    id: number;
    data: string;
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AnnouncementCreationAttributes extends Optional<AnnouncementAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ClassroomAttributes {
    id: number;
    title: string;
    html: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ClassroomCreationAttributes extends Omit<ClassroomAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ReplacementAttributes {
    id: number;
    lesson: string;
    teacher: string;
    branch: string;
    subject: string;
    room: string;
    date: string;
    deputy: string;

    createdAt?: Date;
    updatedAt?: Date;
}

export interface ReplacementCreationAttributes extends Optional<ReplacementAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface SliderAttributes {
    id: number;
    file: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SliderCreationAttributes extends Optional<SliderAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface UserAttributes {
    id: number;
    name: string;
    lastname: string;
    avatar?: string | null;
    email: string;
    login: string;
    password: string;
    isVerified: boolean;
    lastLogin: Date;
    resetPasswordToken?: string | null;
    resetPasswordExpireAt?: Date | null;
    verificationToken?: string  | null;
    verificationTokenExpireAt?: Date | null;
    isAdmin: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'isVerified' | 'createdAt' | 'updatedAt'> {
    isVerified?: boolean;
}

export interface ViewAttributes {
    id: number;
    schoolLogo: string;
    viewMode: ViewMode;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ViewCreationAttributes extends Omit<ViewAttributes, 'id' | 'createdAt' | 'updatedAt' | 'viewMode'> {
    viewMode?: ViewMode;
}