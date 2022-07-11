import ScoreboardView from "./Scoreboard/scoreboardview.js"

let timeAzulScore = 0;
let timeVermelhoScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root,"Time Azul","Time Vermelho", (time,direction) => {
    const difference = direction === "minus" ? -1 : 1;

    if (time === "azul") {
        timeAzulScore = Math.max(timeAzulScore + difference, 0);
    } else {
        timeVermelhoScore = Math.max(timeVermelhoScore + difference, 0);
    }

    view.update(timeAzulScore,timeVermelhoScore);
});

