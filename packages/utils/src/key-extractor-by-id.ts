interface Identifiable {
  id: string;
}

export const keyExtractorById = <T extends Identifiable>({ id }: T): T['id'] =>
  id;
