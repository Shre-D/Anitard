import Head from "next/head";
import Header from "../components/Header";
import ShowcaseManga from "../components/ShowcaseManga";
import { useState, useEffect } from "react";
import MangaCarousel from "../components/MangaCarousel";

function Mangapage() {
  const [topManga, setTopManga] = useState([]);
  const [manwha, setManwha] = useState([]);
  const [search, setSearch] = useState("Naruto");

  async function fetchAnimeData() {
    const topManga = await fetch("https://api.jikan.moe/v4/top/manga");
    const outputTopManga = await topManga.json();
    const random = await fetch(
      "https://api.jikan.moe/v4/top/manga?type=manhwa"
    );
    const outputManwha = await random.json();
    setTopManga(outputTopManga.data);
    setManwha(outputManwha.data);
  }

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <div>
      <Head>
        <title>Anitard-Manga</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/otonari.png" className="rounded-full" />
      </Head>
      <Header />
      <ShowcaseManga topManga={topManga} />
      <MangaCarousel topManga={topManga} manwha={manwha} />
    </div>
  );
}

export default Mangapage;
