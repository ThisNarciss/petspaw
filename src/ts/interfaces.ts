export interface ICat {
  id: number;
  value?: number;
  image: { id: string; url: string };
  user_id?: string;
  image_id?: string;
  breeds?: { name: string; id: string };
}
