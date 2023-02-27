export interface Idable {

  id?: string;
}

export type KeyValuePair<TKey, TValue> = {
  key: TKey;
  value: TValue;
}
