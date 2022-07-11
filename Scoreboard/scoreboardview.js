export default class ScoreboardView {
    constructor(root,timeAzulName,timeVermelhoName,onControlButtonClick) {
        this.root = root;
        this.root.innerHTML = `
            <div class="scoreboard">
                <div class="scoreboard__name scoreboard__name--one">${timeAzulName}</div>
                <div class="scoreboard__name scoreboard__name--two">${timeVermelhoName}</div>
                <div class="scoreboard__score" data-for-time="azul">0</div>
                <div class="scoreboard__score" data-for-time="vermelho">0</div>
                <div class="scoreboard__control" data-for-time="azul">
                    <button class="scoreboard__control-button">-</button>
                    <button class="scoreboard__control-button">+</button>
                </div>
                <div class="scoreboard__control"data-for-time="vermelho">
                    <button class="scoreboard__control-button">-</button>
                    <button class="scoreboard__control-button">+</button>
                </div> 
        </div>
        `;

     this.root.querySelectorAll(".scoreboard__control-button").forEach(controlButton => {
        controlButton.addEventListener("click", () => {
            const direction = controlButton.textContent === "-" ? "minus" : "plus";
            const time = controlButton.closest(".scoreboard__control").dataset.forTime;

            onControlButtonClick(time,direction);

        })
     })
    }

    update(timeAzulScore,timeVermelhoScore) {
        this.root.querySelector(".scoreboard__score[data-for-time='azul']").textContent = timeAzulScore;
        this.root.querySelector(".scoreboard__score[data-for-time='vermelho']").textContent = timeVermelhoScore;
    }
}