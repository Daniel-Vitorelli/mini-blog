
export interface CardContent {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
}

export const cardcontent: CardContent[] = [
  {
    id: "backup",
    title: "Como fazer backup dos arquivos do seu celular",
    description: "Faça um favor a si mesmo no futuro e faça backup de todas as suas fotos, mensagens e arquivos preciosos antes que o desastre aconteça.",
    date: "27/02/2026",
    thumbnail: "/images/Backup.png"
  },
  {
    id: "fotos",
    title: "Saiba como recuperar fotos apagadas do celular",
    description: "Descubra como resgatar fotos apagadas em dispositivos Android e iPhone com este guia completo",
    date: "27/02/2026",
    thumbnail: "/images/GooglePhotos.png"
  }
]
