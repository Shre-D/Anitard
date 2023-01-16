import Header from "../components/Header";
import Head from "next/head";

function Music() {
  return (
    <div>
      <Head>
        <title>Anitard-Music</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/otonari.png" className="rounded-full" />
      </Head>
      <Header />
      <div className="text-4xl p-4 pb-5">
        <h6 className="pb-6 text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300 ">
          My top 3 favourite Japanese songs!
        </h6>
        <div className="flex">
          <div className="rounded-2xl w-560 h-315 p-8">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eLPs_w-FepA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div>
            <h6 className="text-2xl p-6">
              <h6 className="pb-6 pt-6 text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Kimi no Shiranai Monogatari
              </h6>
              This is a song i could not stop replaying. Since I heard the piano
              riff in the beginning, I have been hooked to the song. After
              watching Bakemonogatari, this song hit even harder. Definitely my
              number 1 pick.
            </h6>
            <iframe
              style={{ borderRadius: "5px" }}
              src="https://open.spotify.com/embed/track/434YBNY61Y9sqBSp7OINBa?utm_source=generator"
              width="50%"
              height="100"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="pl-5 pt-5"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="rounded-2xl w-560 h-315 p-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mxhcNrtc198"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <h6 className="text-2xl p-6">
            <h6 className="pb-6 pt-6 text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Chiisana Koi No Uta
            </h6>
            This song also has a beautiful piano melody. The vocals are super
            clear and carry great emotion in them. Another fantastic song.
          </h6>
          <iframe
            style={{ borderRadius: "5px" }}
            src="https://open.spotify.com/embed/track/16FgjLvtKWzDpZxuh4wY9w?utm_source=generator"
            width="50%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="pl-5 pt-5"
          ></iframe>
        </div>
      </div>
      <div className="flex">
        <div className="rounded-2xl w-560 h-315 p-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Y4nEEZwckuU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <h6 className="text-2xl p-6">
            <h6 className="pb-6 pt-2 text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Gunjou/Aquamarine
            </h6>
            This song carries the neo soul vibe that I love so much. And of
            course, we have the vocals of the lead singer of yoasobi, whose
            vocals are some of the sharpest and clearest I have heard. The
            instrumental acrobatics with the bass, piano and the electric guitar
            make the song an extremely catchy one.
          </h6>
          <iframe
            style={{ borderRadius: "5px" }}
            src="https://open.spotify.com/embed/track/0T4AitQuq8IJhWBWuZwkFA?utm_source=generator"
            width="50%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="pl-5 pt-5"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Music;
