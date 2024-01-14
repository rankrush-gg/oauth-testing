import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiCard from "@/components/ApiCard";
import { ModeToggle } from "@/components/theme-toggle";
import OauthButton from "@/components/OauthButton";

const urls = {
  chess: [
    {
      title: "Player Profile",
      url: "https://api.chess.com/pub/player/{{user_name}}",
      testData: ["muskyjobs", "sitontoilettime"],
    },
    {
      title: "Player Stats",
      url: "https://api.chess.com/pub/player/{{user_name}}/stats",
      testData: ["muskyjobs", "sitontoilettime"],
    },
  ],
  instagram: [
    {
      title: "User Profile",
      url: "https://graph.instagram.com/me?fields={{fields}}",
      testData: ["id,username"],
    },
    {
      title: "User Media",
      url: "https://graph.instagram.com/me/media?fields={{fields}}",
      testData: ["id,caption"],
    },
    {
      title: "Media Data",
      url: "https://graph.instagram.com/{{media_id}}?fields=id,media_type,media_url,username,timestamp",
      testData: ["18175957831279326", "18066267463348805", "17968750514252981"],
    },
    {
      title: "Account Metrics (not avliable with basic api)",
      url: "https://graph.facebook.com/{{user_id}}/insights?metric=impressions,reach,profile_views&period=lifetime",
      testData: ["6856909077765396"],
    },
    {
      title: "Media Metrics (not avliable with basic api)",
      url: "https://graph.facebook.com/{{media_id}}/insights?metric=engagement,impressions,reach&period=lifetime",
      testData: ["6856909077765396"],
    },
  ],
};

// cuz fuckin needs to be https
// ngrok http --domain=warthog-lucky-gradually.ngrok-free.app 3000
const redirect_uri = process.env.REDIRECT_URI;
const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`;

const chessAuthUrl = "";

export default function Home() {
  return (
    <main className="flex-1 space-y-4 p-16 pt-12">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl font-semibold">Oauth Testing</h2>
        <ModeToggle />
      </div>
      <Tabs defaultValue="chess" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chess">chess.com</TabsTrigger>
          <TabsTrigger value="instagram">instagram</TabsTrigger>
        </TabsList>
        <TabsContent value="chess" className="space-y-4">
          <OauthButton text="Chess.com" url={chessAuthUrl} />
          {urls.chess.map((url) => (
            <ApiCard
              key={url.title}
              title={url.title}
              templateUrl={url.url}
              testData={url.testData}
            />
          ))}
        </TabsContent>
        <TabsContent value="instagram" className="space-y-4">
          <OauthButton text="Instagram" url={instagramAuthUrl} />
          {urls.instagram.map((url) => (
            <ApiCard
              key={url.title}
              title={url.title}
              templateUrl={url.url}
              testData={url.testData}
            />
          ))}
        </TabsContent>
      </Tabs>
    </main>
  );
}
