import Announcement from "../models/announcements.model";

export function anncsRemoveTimestamps(announcement: Announcement) {
    const { createdAt, updatedAt, ...anncsWithoutTimestamps } = announcement.get({ plain: true });
    return anncsWithoutTimestamps;
}
