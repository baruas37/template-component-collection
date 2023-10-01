interface Template {
  id: number;
  name: string;
  uname: string;
  description: string;
  category: string;
  columns: number;
  responsive: boolean;
  colorContrast: ColorContrast;
  colorsUsed: Color[];
  tags: Tag[];
}
