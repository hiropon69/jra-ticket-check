const marks = ["", "◎", "○", "▲", "△", "☆", "穴", "消"];

const sampleHorses = [
  [1, "◎", "スプリントロード", 4.2, 3.3, 82, 78, 72, 88],
  [2, "○", "ミッドナイトベル", 6.8, 4.1, 76, 75, 70, 78],
  [3, "▲", "グラスワンダム", 11.5, 5.0, 68, 70, 66, 65],
  [4, "△", "サンライズノート", 17.8, 6.2, 62, 64, 60, 54],
  [5, "穴", "カゼノシルシ", 31.4, 5.4, 70, 69, 73, 40],
  [6, "☆", "レッドカーブ", 22.9, 6.7, 58, 62, 74, 46],
  [7, "", "ブルーコメット", 55.0, 8.5, 45, 52, 48, 24],
  [8, "", "ホワイトステップ", 79.0, 9.0, 40, 44, 50, 16]
];

const fullSampleHorses = [
  [1, "", "アーバンゲート", 12.4, 4.7, 72, 68, 64],
  [2, "", "ミッドナイトベル", 6.8, 3.3, 80, 76, 70],
  [3, "", "グラスワンダム", 11.5, 5.0, 68, 70, 66],
  [4, "", "サンライズノート", 17.8, 6.2, 62, 64, 60],
  [5, "", "カゼノシルシ", 31.4, 5.4, 70, 69, 73],
  [6, "", "レッドカーブ", 22.9, 6.7, 58, 62, 74],
  [7, "", "ブルーコメット", 55.0, 8.5, 45, 52, 48],
  [8, "", "ホワイトステップ", 79.0, 9.0, 40, 44, 50],
  [9, "", "クラウンリバー", 9.7, 4.0, 74, 71, 66],
  [10, "", "ノーブルスカイ", 14.9, 4.8, 66, 79, 62],
  [11, "", "ビートフォース", 42.0, 6.1, 69, 60, 78],
  [12, "", "スターライトラン", 5.6, 3.7, 77, 82, 75],
  [13, "", "ロードフェザー", 24.5, 5.9, 61, 67, 80],
  [14, "", "セントラルアーク", 18.6, 5.2, 64, 65, 67],
  [15, "", "ハヤテブレイブ", 33.8, 6.5, 73, 58, 72],
  [16, "", "ゴールドミラー", 8.2, 4.4, 71, 74, 69],
  [17, "", "ライトニングエコー", 64.0, 8.1, 52, 55, 76],
  [18, "", "シルバーライン", 27.6, 5.8, 63, 72, 71]
];

const takarazukaHorses = [
  [1, "", "ダノンデサイル", "", 3.0, 82, 82, 70],
  [2, "", "ミュージアムマイル", "", 1.3, 62, 97, 76],
  [3, "", "シュガークン", "", 7.7, 62, 57, 76],
  [4, "", "ミクニインスパイア", "", 1.3, 62, 97, 76],
  [5, "", "クロワデュノール", "", 2.0, 100, 87, 70],
  [6, "", "ビザンチンドリーム", "", 4.3, 62, 70, 70],
  [7, "", "ファミリータイム", "", 6.0, 28, 69, 76],
  [8, "", "タガノデュード", "", 3.7, 73, 73, 76],
  [9, "", "コスモキュランダ", "", 6.0, 62, 55, 70],
  [10, "", "ジューンテイク", "", 4.3, 62, 70, 76],
  [11, "", "シンエンペラー", "", 8.3, 62, 49, 70],
  [12, "", "マイネルエンペラー", "", 8.3, 64, 27, 63],
  [13, "", "シェイクユアハート", "", 2.0, 62, 91, 76],
  [14, "", "スティンガーグラス", "", 1.3, 62, 91, 70],
  [15, "", "マイユニバース", "", 1.3, 62, 97, 70],
  [16, "", "メイショウタバル", "", 7.0, 91, 57, 76],
  [17, "", "レガレイラ", "", 2.0, 62, 91, 63],
  [18, "", "ミステリーウェイ", "", 12.7, 62, 25, 76]
];

const yen = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 });

function el(id) {
  return document.getElementById(id);
}

function createRows() {
  const tbody = el("horseRows");
  tbody.innerHTML = "";
  for (let i = 1; i <= 18; i += 1) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input data-field="number" type="number" min="1" max="18" value="${i}" /></td>
      <td><select data-field="mark">${marks.map((m) => `<option value="${m}">${m || "-"}</option>`).join("")}</select></td>
      <td><input data-field="name" type="text" placeholder="馬名" /></td>
      <td><input data-field="odds" type="number" min="1" step="0.1" placeholder="例 12.5" /></td>
      <td><input data-field="recentAvg" type="number" min="1" max="18" step="0.1" placeholder="例 5.3" /></td>
      <td><input data-field="courseFit" type="number" min="0" max="100" step="1" placeholder="0-100" /></td>
      <td><input data-field="distanceFit" type="number" min="0" max="100" step="1" placeholder="0-100" /></td>
      <td><input data-field="paceFit" type="number" min="0" max="100" step="1" placeholder="0-100" /></td>
      <td><input data-field="confidence" type="number" min="0" max="100" step="1" placeholder="0-100" /></td>
    `;
    tbody.appendChild(tr);
  }
}

function rowFields(row) {
  return {
    number: row.querySelector('[data-field="number"]'),
    mark: row.querySelector('[data-field="mark"]'),
    name: row.querySelector('[data-field="name"]'),
    odds: row.querySelector('[data-field="odds"]'),
    recentAvg: row.querySelector('[data-field="recentAvg"]'),
    courseFit: row.querySelector('[data-field="courseFit"]'),
    distanceFit: row.querySelector('[data-field="distanceFit"]'),
    paceFit: row.querySelector('[data-field="paceFit"]'),
    confidence: row.querySelector('[data-field="confidence"]')
  };
}

function setRows(horses, shouldPredict = false) {
  clearRows(false);
  const rows = [...document.querySelectorAll("#horseRows tr")];
  horses.slice(0, 18).forEach((horse, index) => {
    const row = rowFields(rows[index]);
    row.number.value = horse.number ?? horse[0] ?? index + 1;
    row.mark.value = horse.mark ?? horse[1] ?? "";
    row.name.value = horse.name ?? horse[2] ?? "";
    row.odds.value = horse.odds ?? horse[3] ?? "";
    row.recentAvg.value = horse.recentAvg ?? horse[4] ?? "";
    row.courseFit.value = horse.courseFit ?? horse[5] ?? "";
    row.distanceFit.value = horse.distanceFit ?? horse[6] ?? "";
    row.paceFit.value = horse.paceFit ?? horse[7] ?? "";
    row.confidence.value = horse.confidence ?? horse[8] ?? "";
  });
  if (shouldPredict) applyPrediction();
  calculate();
}

function setSample() {
  setRows(sampleHorses, false);
}

function setFullSample() {
  setRows(fullSampleHorses, true);
}

function setTakarazukaData() {
  setTakarazukaRace();
  setRows(takarazukaHorses, true);
}

function clearRows(recalculate = true) {
  document.querySelectorAll("#horseRows tr").forEach((row, index) => {
    const fields = rowFields(row);
    fields.number.value = index + 1;
    fields.mark.value = "";
    fields.name.value = "";
    fields.odds.value = "";
    fields.recentAvg.value = "";
    fields.courseFit.value = "";
    fields.distanceFit.value = "";
    fields.paceFit.value = "";
    fields.confidence.value = "";
  });
  if (recalculate) calculate();
}

function getHorses() {
  return [...document.querySelectorAll("#horseRows tr")]
    .map((row) => {
      const fields = rowFields(row);
      return {
        number: Number(fields.number.value),
        mark: fields.mark.value,
        name: fields.name.value.trim(),
        odds: Number(fields.odds.value || 0),
        recentAvg: Number(fields.recentAvg.value || 0),
        courseFit: Number(fields.courseFit.value || 0),
        distanceFit: Number(fields.distanceFit.value || 0),
        paceFit: Number(fields.paceFit.value || 0),
        confidence: Number(fields.confidence.value || 0)
      };
    })
    .filter((horse) => horse.name && horse.mark !== "消");
}

function scoreHorse(horse) {
  const mode = el("predictionMode").value;
  const recentScore = horse.recentAvg ? Math.max(0, 100 - (horse.recentAvg - 1) * 8) : 50;
  const fitScore = average([horse.courseFit, horse.distanceFit, horse.paceFit].filter(Boolean)) || 50;
  const oddsScore = horse.odds ? Math.min(100, Math.log2(horse.odds + 1) * 18) : 45;
  const base = recentScore * 0.38 + fitScore * 0.42 + oddsScore * 0.2;
  if (mode === "longshot") return base + oddsScore * 0.18;
  if (mode === "solid") return base + recentScore * 0.14 - oddsScore * 0.08;
  return base;
}

function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function applyPrediction() {
  const rows = [...document.querySelectorAll("#horseRows tr")];
  const ranked = rows
    .map((row, index) => {
      const fields = rowFields(row);
      const horse = {
        row,
        index,
        name: fields.name.value.trim(),
        odds: Number(fields.odds.value || 0),
        recentAvg: Number(fields.recentAvg.value || 0),
        courseFit: Number(fields.courseFit.value || 0),
        distanceFit: Number(fields.distanceFit.value || 0),
        paceFit: Number(fields.paceFit.value || 0)
      };
      return { ...horse, score: scoreHorse(horse) };
    })
    .filter((horse) => horse.name)
    .sort((a, b) => b.score - a.score);

  const markOrder = ["◎", "○", "▲", "△", "△", "☆"];
  rows.forEach((row) => {
    const fields = rowFields(row);
    if (fields.name.value.trim()) {
      fields.mark.value = "";
      fields.confidence.value = "";
    }
  });

  ranked.forEach((horse, index) => {
    const fields = rowFields(horse.row);
    fields.confidence.value = Math.round(Math.max(1, Math.min(99, horse.score)));
    fields.mark.value = markOrder[index] || "";
    if (index >= 6 && horse.odds >= Number(el("longshotOdds").value || 20) && horse.score >= 58) {
      fields.mark.value = "穴";
    }
  });
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const rows = lines.map((line) => line.split(",").map((cell) => cell.trim()));
  const hasHeader = rows[0]?.some((cell) => /馬番|馬名|単勝/.test(cell));
  const dataRows = hasHeader ? rows.slice(1) : rows;
  return dataRows.map((cols, index) => ({
    number: Number(cols[0] || index + 1),
    name: cols[1] || "",
    odds: Number(cols[2] || 0),
    recentAvg: Number(cols[3] || 0),
    courseFit: Number(cols[4] || 0),
    distanceFit: Number(cols[5] || 0),
    paceFit: Number(cols[6] || 0)
  }));
}

function importData() {
  const text = el("importText").value.trim();
  if (!text) {
    setFullSample();
    return;
  }
  try {
    const horses = el("importFormat").value === "json" ? JSON.parse(text) : parseCsv(text);
    setRows(horses, true);
  } catch (error) {
    el("ticketList").textContent = `取り込みに失敗しました。\n${error.message}`;
  }
}

function setTakarazukaRace() {
  el("weekName").value = "2026/6/14";
  el("raceType").value = "graded";
  el("raceCourse").value = "阪神";
  el("raceName").value = "宝塚記念 G1 11R";
  el("betType").value = "trifecta";
  el("budget").value = "10000";
  el("stake").value = "100";
  el("targetReturn").value = "50000";
  el("minOdds").value = "500";
  el("longshotOdds").value = "20";
  calculate();
}

function byMarks(horses, allowed) {
  return horses
    .filter((horse) => allowed.includes(horse.mark))
    .sort((a, b) => b.confidence - a.confidence || a.odds - b.odds);
}

function makePlan(horses) {
  const type = el("betType").value;
  const longshotOdds = Number(el("longshotOdds").value || 20);
  const favorites = byMarks(horses, ["◎", "○"]);
  const mids = byMarks(horses, ["◎", "○", "▲", "△"]);
  const spreads = byMarks(horses, ["◎", "○", "▲", "△", "☆", "穴"]).filter((horse) => horse.odds === 0 || horse.odds >= longshotOdds || ["◎", "○", "▲", "△"].includes(horse.mark));
  const anchor = favorites[0] ? [favorites[0]] : mids.slice(0, 1);

  if (type === "trifecta") {
    return {
      lanes: [
        ["1着", favorites.slice(0, 2)],
        ["2着", mids.slice(0, 4)],
        ["3着", spreads.slice(0, 7)]
      ],
      tickets: permuteTickets([favorites.slice(0, 2), mids.slice(0, 4), spreads.slice(0, 7)], "→")
    };
  }

  if (type === "trio") {
    return {
      lanes: [
        ["軸", anchor],
        ["相手1", mids.slice(1, 5)],
        ["相手2", spreads.slice(1, 8)]
      ],
      tickets: trioTickets(anchor, mids.slice(1, 5), spreads.slice(1, 8))
    };
  }

  return {
    lanes: [
      ["1着", favorites.slice(0, 2)],
      ["2着", spreads.slice(0, 7)]
    ],
    tickets: permuteTickets([favorites.slice(0, 2), spreads.slice(0, 7)], "→")
  };
}

function horseLabel(horse) {
  return `${horse.number}.${horse.name}${horse.mark ? ` ${horse.mark}` : ""}`;
}

function permuteTickets(lanes, separator) {
  if (lanes.some((lane) => lane.length === 0)) return [];
  const results = [];
  function walk(index, picked) {
    if (index === lanes.length) {
      results.push(picked.map(horseLabel).join(separator));
      return;
    }
    lanes[index].forEach((horse) => {
      if (!picked.some((item) => item.number === horse.number)) {
        walk(index + 1, [...picked, horse]);
      }
    });
  }
  walk(0, []);
  return results;
}

function trioTickets(anchors, laneA, laneB) {
  if (anchors.length === 0 || laneA.length === 0 || laneB.length === 0) return [];
  const seen = new Set();
  const results = [];
  anchors.forEach((anchor) => {
    laneA.forEach((a) => {
      laneB.forEach((b) => {
        const numbers = [anchor.number, a.number, b.number];
        if (new Set(numbers).size !== 3) return;
        const key = [...numbers].sort((x, y) => x - y).join("-");
        if (!seen.has(key)) {
          seen.add(key);
          results.push([anchor, a, b].map(horseLabel).join(" - "));
        }
      });
    });
  });
  return results;
}

function renderFormation(lanes) {
  el("formation").innerHTML = lanes.map(([label, horses]) => `
    <div class="lane">
      <strong>${label}</strong>
      <div class="chips">${horses.length ? horses.map((horse) => `<span class="chip">${horseLabel(horse)}</span>`).join("") : "<span class='chip'>未選択</span>"}</div>
    </div>
  `).join("");
}

function calculate() {
  const horses = getHorses();
  const plan = makePlan(horses);
  const stake = Number(el("stake").value || 100);
  const budget = Number(el("budget").value || 10000);
  const minOdds = Number(el("minOdds").value || 0);
  const targetReturn = Number(el("targetReturn").value || 50000);
  const points = plan.tickets.length;
  const cost = points * stake;
  const expectedMinReturn = stake * minOdds;
  const hasLongshot = horses.some((horse) => horse.mark === "穴" || horse.odds >= Number(el("longshotOdds").value || 20));
  const canBuy = points > 0 && cost <= budget && expectedMinReturn >= targetReturn && hasLongshot;

  renderFormation(plan.lanes);
  el("points").textContent = String(points);
  el("cost").textContent = yen.format(cost);
  el("return").textContent = yen.format(expectedMinReturn);
  el("status").textContent = canBuy ? "買い候補" : "見送り";

  const decision = el("decisionLabel");
  const panel = document.querySelector(".decision-panel");
  panel.classList.toggle("buy", canBuy);
  panel.classList.toggle("skip", !canBuy && points > 0);
  decision.textContent = canBuy ? "BUY CANDIDATE" : points > 0 ? "SKIP" : "CHECK";
  el("decisionText").textContent = canBuy ? "条件内で万馬券を狙える買い目" : points > 0 ? "今回は見送り推奨" : "出走馬データを取り込んでください";

  const reasons = [];
  if (points === 0) reasons.push("買い目を組める印が不足しています");
  if (cost > budget) reasons.push(`購入額が予算を${yen.format(cost - budget)}超過`);
  if (expectedMinReturn < targetReturn) reasons.push(`最低想定回収が目標に${yen.format(targetReturn - expectedMinReturn)}不足`);
  if (!hasLongshot) reasons.push("穴馬条件を満たす候補がいません");
  if (canBuy) reasons.push("購入額、最低想定回収、穴馬条件を満たしています");
  el("decisionReason").textContent = reasons.join(" / ");

  const title = `${el("weekName").value} ${el("raceType").selectedOptions[0].textContent} ${el("raceCourse").value} ${el("raceName").value}`;
  const betName = el("betType").selectedOptions[0].textContent;
  const ranked = horses
    .slice()
    .sort((a, b) => b.confidence - a.confidence)
    .map((horse) => `${horse.mark || "-"} ${horse.number}.${horse.name} 信頼度${horse.confidence} 単勝${horse.odds || "-"}倍`)
    .join("\n");
  const header = [
    title,
    `判定: ${canBuy ? "買い候補" : "見送り"}`,
    `買い方: ${betName}`,
    `点数: ${points}点 / 1点${yen.format(stake)} / 合計${yen.format(cost)}`,
    `最低想定オッズ: ${minOdds}倍 / 的中時最低: ${yen.format(expectedMinReturn)}`,
    "",
    "予想順位",
    ranked || "未入力",
    "",
    "買い目"
  ].join("\n");
  el("ticketList").textContent = points ? header + "\n" + plan.tickets.map((ticket, index) => `${String(index + 1).padStart(2, "0")}. ${ticket}`).join("\n") : "まだ買い目はありません。";
}

async function copyPlan() {
  await navigator.clipboard.writeText(el("ticketList").textContent);
  el("copyPlan").textContent = "コピー済み";
  setTimeout(() => { el("copyPlan").textContent = "コピー"; }, 1200);
}

function savePlan() {
  const blob = new Blob([el("ticketList").textContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `jra-ticket-plan-${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

createRows();
setSample();
el("loadSample").addEventListener("click", setSample);
el("setTakarazuka").addEventListener("click", setTakarazukaRace);
el("loadTakarazukaData").addEventListener("click", setTakarazukaData);
el("loadFullSample").addEventListener("click", setFullSample);
el("importData").addEventListener("click", importData);
el("clearHorses").addEventListener("click", () => clearRows(true));
el("generate").addEventListener("click", () => {
  applyPrediction();
  calculate();
});
el("copyPlan").addEventListener("click", copyPlan);
el("savePlan").addEventListener("click", savePlan);
document.addEventListener("input", (event) => {
  if (event.target.closest(".app")) calculate();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
