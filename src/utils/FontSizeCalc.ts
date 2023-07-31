export default function fontSize(title: string) {
    if (title.length <= 5 + 3) return 64 - 24;
    if (title.length <= 10 + 3) return 56 - 24;
    return 18;
};