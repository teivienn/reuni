interface Identifiable {
    id: string;
}
export declare const keyExtractorById: <T extends Identifiable>({ id }: T) => T["id"];
export {};
