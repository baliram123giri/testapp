import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const WP = wp
export const HP = hp

export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit"
    }).format(date)
}

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
