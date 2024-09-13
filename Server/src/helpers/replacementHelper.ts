import Replacement from "../models/replacements.model";

export function replacementRemoveTimestamps(replacement: Replacement) {
    const { createdAt, updatedAt, ...sliderWithoutTimestamps } = replacement.get({ plain: true });
    return sliderWithoutTimestamps;
}
