const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tekken 3's New Generation: The Fighters Who Replaced the Old Guard</title>
<meta name="description" content="Tekken 3 jumped nineteen years forward and replaced most of its own cast. Meet the newcomers, the successors under familiar names, and the few veterans who survived the cut.">
<style>
  body { font-family: Georgia, 'Times New Roman', serif; margin: 0; background: #f6f4ef; color: #22222a; line-height: 1.65; }
  main { max-width: 760px; margin: 0 auto; padding: 40px 22px 60px; }
  h1 { font-size: 2rem; line-height: 1.25; margin: 0 0 18px; }
  h2 { font-size: 1.35rem; margin: 34px 0 10px; color: #7a1f1f; }
  p { margin: 0 0 14px; }
  a { color: #7a1f1f; text-decoration: underline; }
  .faq p { margin-bottom: 10px; }
  footer { margin-top: 44px; font-size: 0.85rem; color: #666; border-top: 1px solid #ddd6c8; padding-top: 14px; }
</style>
</head>
<body>
<main>
<h1>Tekken 3's New Generation: The Fighters Who Replaced the Old Guard</h1>

<p>Most sequels add a few faces. Tekken 3 did something braver: set nineteen years after Tekken 2, it retired much of its own cast and handed the series to a new generation — and the gamble produced the most loved roster in Tekken history.</p>

<h2>Nineteen years later</h2>
<p>The story jumps forward nineteen years. Fighters age, some disappear, and a new King of Iron Fist Tournament is announced by an older Heihachi Mishima. The time skip let the developers rebuild the roster around a simple question: who would these fighters' students, children and successors be?</p>

<h2>The newcomers who took over</h2>
<p>Jin Kazama — son of Kazuya and Jun — stepped in as the new lead, carrying a blend of both parents' fighting styles. Around him arrived a wave of debuts: Ling Xiaoyu, all speed and evasion; Hwoarang, the taekwondo rival trained by Baek Doo San; Eddy Gordo, whose capoeira looked like dancing until it hit you; Bryan Fury; Julia Chang; and Mokujin, a wooden training dummy who copies another fighter's style every round. Even the final boss was new blood: Ogre, drawn to the tournament by the strongest fighters on Earth.</p>

<h2>Successors under familiar names</h2>
<p>Some "returning" names were new people. The King in Tekken 3 is a successor — a protégé from the original King's orphanage, fighting under the same mask. Marshall Law stayed home and sent his son, Forest Law, instead. The Jack line continued as Gun Jack. The names reassured players while the fighters underneath them were genuinely new.</p>

<h2>The veterans who survived the cut</h2>
<p>A handful of originals made it through: Heihachi, older and still at the centre of everything; Paul Phoenix; Nina Williams; Lei Wulong; and Yoshimitsu. Their presence matters — they are the measuring sticks the new generation is judged against, in the story and in players' hands. If you want the whole picture, the <a href="https://tekken3apk-download.com/tekken-3-all-characters-list/">Tekken 3 all characters list</a> shows the full roster — veterans, successors and newcomers alike.</p>

<h2>Why the gamble worked</h2>
<p>Replacing a cast usually angers fans. It worked here because the new fighters were not copies: they had new styles and new stories, and in Jin's case a direct line into the series' central family feud. Tekken 3 became the best-remembered game in the series with a roster most of which had never existed before it.</p>

<h2>Playing the new generation today</h2>
<p>That roster is the one in the version played today — the Android release (v1.3, about 61 MB, works on Android 4.4 and up, and plays fully offline) carries the complete home version. To meet the new generation yourself, get the game from the <a href="https://tekken3apk-download.com/">Tekken 3 APK download page</a>.</p>

<h2>Quick questions</h2>
<div class="faq">
<p><strong>Q: How many years after Tekken 2 is Tekken 3 set?</strong><br>
A: Nineteen years — the reason so much of the cast changed between the two games.</p>
<p><strong>Q: Who is the main character of Tekken 3?</strong><br>
A: Jin Kazama, making his debut as the son of Kazuya Mishima and Jun Kazama.</p>
<p><strong>Q: Is Marshall Law in Tekken 3?</strong><br>
A: No. His son, Forest Law, fights in his place — one of several successors who replaced a veteran.</p>
</div>

<footer>© 2026 Tekken 3 Guide. All rights reserved.</footer>
</main>
</body>
</html>
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://tekken3-guide.tekken3apkdownload.deno.net/</loc></url>
</urlset>`;

const robots = `User-agent: *
Allow: /

Sitemap: https://tekken3-guide.tekken3apkdownload.deno.net/sitemap.xml
`;

Deno.serve((req) => {
  const url = new URL(req.url);
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
  if (url.pathname === "/sitemap.xml") {
    return new Response(sitemap, { headers: { "content-type": "application/xml; charset=utf-8" } });
  }
  if (url.pathname === "/robots.txt") {
    return new Response(robots, { headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  return new Response("Not found", { status: 404 });
});
